import { describe, expect, expectTypeOf, it } from "vitest";
import { createBuilder } from "./createBuilder";

describe("createBuilder", () => {
  const obj = {
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

  it("should create a builder object with correct nested structure", () => {
    const builder = createBuilder(obj);

    expect(builder).toEqual({
      use,
      get,
      dex: { use, get },
      foo: {
        bar: {
          baz: { use, get },
          use,
          get,
        },
        qux: { use, get },
        use,
        get,
      },
      num: { use, get },
      str: { use, get },
    });

    expect(builder.foo.bar.baz.get()).toEqual(["foo", "bar", "baz"]);
    expect(builder.foo.bar.baz.use(14)).toEqual(["foo", "bar", "baz", 14]);
    expect(builder.foo.qux.use()).toEqual(["foo", "qux"]);
    expect(builder.num.use()).toEqual(["num"]);
    expect(builder.str.use()).toEqual(["str"]);
  });

  const builder = createBuilder(obj, ["parent"]);

  it("should still have the same structure as its first argument", () => {
    expect(builder).toEqual({
      use,
      get,
      dex: { use, get },
      foo: {
        bar: {
          baz: { use, get },
          use,
          get,
        },
        qux: { use, get },
        use,
        get,
      },
      num: { use, get },
      str: { use, get },
    });
  });

  it("should retrieve the nested value using the use method", () => {
    expect(builder.num.use()).toEqual(["parent", "num"]);
    expect(builder.str.use()).toEqual(["parent", "str"]);
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
    expect(builder.use()).toEqual(obj);
    expect(builder.get()).toEqual(["parent"]);
  });

  it("should return undefined for non-existing nested value", () => {
    expect(builder.use().dex).toBeUndefined();
  });

  it("should return the correct type of the builder", () => {
    expectTypeOf(builder.map).toEqualTypeOf(obj);
  });
});
