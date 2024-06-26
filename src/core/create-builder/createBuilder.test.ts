import { describe, expect, expectTypeOf, it } from "vitest";
import { createBuilder } from "./createBuilder";

const register = {
  dex: undefined,
  foo: {
    bar: {
      baz: (id: number) => id,
    },
    qux: () => "hello",
  },
  num: 123,
  str: "test",
};

const use = expect.any(Function);
const get = expect.any(Function);

const match = {
  use,
  get,
  unbuild: register,
  dex: {
    use,
    get,
  },
  foo: {
    bar: {
      baz: {
        use,
        get,
      },
      use,
      get,
    },
    qux: {
      use,
      get,
    },
    use,
    get,
  },
  num: {
    use,
    get,
  },
  str: {
    use,
    get,
  },
};

describe("createBuilder", () => {
  it("should create a builder object with correct nested structure", () => {
    const builder = createBuilder(register);
    expect(builder).toMatchObject(match);

    expect(builder.foo.qux.use()).toEqual(["foo", "qux"]);
    expect(builder.foo.bar.baz.use(14)).toEqual(["foo", "bar", "baz", 14]);

    expect(builder.foo.bar.baz.get()).toEqual(["foo", "bar", "baz"]);
    expect(builder.foo.qux.get("hello", "world")).toEqual([
      "foo",
      "qux",
      "hello",
      "world",
    ]);
    expect(builder.foo.bar.get(["baz", "quz"])).toEqual([
      "foo",
      "bar",
      ["baz", "quz"],
    ]);
  });

  const builder = createBuilder(register, ["parent"]);

  it("should retrieve the nested value using the use method", () => {
    expect(builder.num.use()).toEqual(["parent", "num"]);
    expect(builder.str.use()).toEqual(["parent", "str"]);
    expect(builder.dex.use()).toEqual(["parent", "dex"]);
  });

  it("should append the value to the prefix array", () => {
    expect(builder.foo.bar.baz.use(110)).toEqual([
      "parent",
      "foo",
      "bar",
      "baz",
      110,
    ]);
  });

  it("should create a builder object with custom prefix", () => {
    expect(builder.foo.qux.use()).toEqual(["parent", "foo", "qux"]);
  });

  it("should correctly retrieve nested value using the use method on the root", () => {
    expect(builder.use()).toEqual(register);
    expect(builder.get()).toEqual(["parent"]);
  });

  it("should return undefined for non-existing nested value", () => {
    expect(builder.use().dex).toBeUndefined();
    expectTypeOf(builder.dex.use).toMatchTypeOf<() => string[]>();
  });

  it("should return the correct type of the builder", () => {
    expectTypeOf(builder.unbuild).toEqualTypeOf(register);
  });
});
