import { describe, expect, expectTypeOf, test } from "vitest";
import { createBuilder } from "../create-builder";
import { typeValue } from "./typeValue";

describe("typeValue", () => {
  test("should add types to the input object", () => {
    const result = typeValue({ value: "test" })<{ type: string }>();

    expect(result).toEqual({ value: "test" });
    expectTypeOf(result).toMatchTypeOf<{
      value: string;
      has?: { type: string };
    }>();
  });

  test("should add types to the input object with a custom key", () => {
    const result = typeValue({ value: "test" })<{ type: number }, "types">();

    expect(result).toEqual({ value: "test" });
    expectTypeOf(result).toMatchTypeOf<{
      value: string;
      types?: { type: number };
    }>();
  });

  test("should add types to the input object with a custom key and value", () => {
    const builder = createBuilder({
      num: 2,
      str: "string",
      dex: typeValue({ value: undefined })<{
        foo: string;
        bar: number;
      }>(),
      foo: {
        baz: ["foo", "bar", "baz"],
      },
    });

    expectTypeOf(builder.use().dex).toEqualTypeOf<{
      value: undefined;
    }>();
  });
});
