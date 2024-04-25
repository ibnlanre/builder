import { describe, expect, expectTypeOf, test } from "vitest";
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
});
