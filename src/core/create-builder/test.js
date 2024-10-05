import { createBuilder } from "./createBuilder";

const store = {
  foo: {
    baz: (id) => `/bazaar/${id}`,
    bar: 10,
  },
};

const builder = createBuilder(store, ["root"]);

builder.$get("");
