import { createBuilder } from "@ibnlanre/builder";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const products = createBuilder({
  fetch: async () => {
    const resp = await fetch("api/products");
    return resp.json();
  },
  delete: async (id: string) => {
    const resp = await fetch(`api/products/${id}`, { method: "DELETE" });
    return resp.json();
  }
})

export function useGetProducts() {
  return useQuery({
    queryKey: products.fetch.$use(),
    queryFn: products.$use.fetch,
  })
}

export function useDeleteProduct(options: { onSuccess: () => {} }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: products.$use.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: products.fetch.$use(),
      })
      options.onSuccess();
    }
  })
}
