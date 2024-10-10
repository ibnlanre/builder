import { createBuilder } from "./createBuilder";

const builder = createBuilder(
  {
    foo: {
      baz: (id) => `/bazaar/${id}`,
      bar: 10,
    },
  },
  {
    prefix: ["root"],
  }
);

builder.$get("root.foo.bar");
