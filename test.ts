import { createBuilder, hasTypes } from "./dist";

const builder = createBuilder({
  foo: {
    bar: hasTypes({
      baz: (a: number, b: string) => a + b,
    })<{
      hello: "world";
    }>(),
  },
});

builder.map.foo.bar.has.hello;
const test = builder.foo.bar.get("test");
