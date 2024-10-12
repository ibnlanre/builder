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

const $use = expect.any(Function);
const $get = expect.any(Function);
const $ = { $use, $get };

const match = {
  $use: register,
  $get,
  dex: $,
  foo: {
    bar: {
      baz: $,
      $use,
      $get,
    },
    qux: $,
    $use,
    $get,
  },
  num: $,
  str: $,
};

describe("createBuilder", () => {
  const builder = createBuilder(register, {
    prefix: ["parent"],
    separator: "/",
  });

  it("should create a builder object with correct nested structure", () => {
    expect(builder).toMatchObject(match);
    expectTypeOf(builder).toMatchTypeOf<typeof match>();
  });

  it("should correctly retrieve nested value using the use method on the root", () => {
    expect(builder.$use).toEqual(register);
    expectTypeOf(builder.$use).toEqualTypeOf(register);

    expect(builder.$use.dex).toBeUndefined();
    expectTypeOf(builder.dex.$use()).toEqualTypeOf<["parent", "dex"]>();
  });

  it("should return the key passed to the get method", () => {
    expect(builder.$get()).toEqual(["parent"]);
    expectTypeOf(builder.$get()).toEqualTypeOf<["parent"]>();

    expect(builder.$get("parent/foo/bar/baz")).toEqual("parent/foo/bar/baz");
    expectTypeOf(
      builder.$get("parent/foo/bar/baz")
    ).toEqualTypeOf<"parent/foo/bar/baz">();

    expect(builder.$get("parent/foo")).toEqual("parent/foo");
    expectTypeOf(builder.$get("parent/foo")).toEqualTypeOf<"parent/foo">();

    expect(builder.$get("parent/foo/qux")).toEqual("parent/foo/qux");
    expectTypeOf(
      builder.$get("parent/foo/qux")
    ).toEqualTypeOf<"parent/foo/qux">();

    expect(builder.$get("parent/num", 34, 5n)).toEqual("parent/num/34/5n");
    expectTypeOf(
      builder.$get("parent/num", 34, 5n)
    ).toEqualTypeOf<"parent/num/34/5n">();

    expect(builder.$get("parent/str", "hello", "world")).toEqual(
      "parent/str/hello/world"
    );
    expectTypeOf(
      builder.$get("parent/str", "hello", "world")
    ).toEqualTypeOf<"parent/str/hello/world">();
  });

  it("should retrieve the nested value using the get method", () => {
    expect(builder.foo.bar.baz.$get()).toEqual(["parent", "foo", "bar", "baz"]);
    expectTypeOf(builder.foo.bar.baz.$get()).toEqualTypeOf<
      ["parent", "foo", "bar", "baz"]
    >();

    expect(builder.foo.qux.$get("hello", "world")).toEqual([
      "parent",
      "foo",
      "qux",
      "hello",
      "world",
    ]);
    expectTypeOf(builder.foo.qux.$get("more", "test")).toEqualTypeOf<
      ["parent", "foo", "qux", string, string]
    >();

    expect(builder.foo.bar.$get(["baz", "quz"])).toEqual([
      "parent",
      "foo",
      "bar",
      ["baz", "quz"],
    ]);
  });

  it("should retrieve the nested value using the use method", () => {
    expect(builder.num.$use()).toEqual(["parent", "num"]);
    expectTypeOf(builder.num.$use).toEqualTypeOf<() => ["parent", "num"]>();

    expect(builder.str.$use()).toEqual(["parent", "str"]);
    expectTypeOf(builder.str.$use).toEqualTypeOf<() => ["parent", "str"]>();

    expect(builder.dex.$use()).toEqual(["parent", "dex"]);
    expectTypeOf(builder.dex.$use).toEqualTypeOf<() => ["parent", "dex"]>();
  });

  it("should append the value to the prefix array", () => {
    expect(builder.foo.bar.baz.$use(110)).toEqual([
      "parent",
      "foo",
      "bar",
      "baz",
      110,
    ]);
    expectTypeOf(builder.foo.bar.baz.$use(20)).toEqualTypeOf<
      ["parent", "foo", "bar", "baz", number]
    >();
  });

  it("should create a builder object with custom prefix", () => {
    expect(builder.foo.qux.$use()).toEqual(["parent", "foo", "qux"]);
    expectTypeOf(builder.foo.qux.$use()).toEqualTypeOf<
      ["parent", "foo", "qux"]
    >();
  });
});
