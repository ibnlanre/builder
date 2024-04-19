import { describe, expect, expectTypeOf, test } from "vitest";
import { hasTypes } from "./hasTypes";

describe("hasTypes", () => {
  test("should add types to the input object", () => {
    const result = hasTypes({ value: "test" })<{ type: string }>();

    expect(result).toEqual({ value: "test" });
    expectTypeOf(result).toMatchTypeOf<{
      value: string;
      has?: { type: string };
    }>();
  });

  test("should add types to the input object with a custom key", () => {
    const result = hasTypes({ value: "test" })<{ type: number }, "types">();

    expect(result).toEqual({ value: "test" });
    expectTypeOf(result).toMatchTypeOf<{
      value: string;
      types?: { type: number };
    }>();
  });
});
