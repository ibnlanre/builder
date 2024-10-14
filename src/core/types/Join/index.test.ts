import { describe, expectTypeOf, it } from "vitest";
import type { Join } from ".";

describe("Join", () => {
  it("should join an array of strings with no separator", () => {
    type Result = Join<["a", "b", "c"]>;
    expectTypeOf<Result>().toEqualTypeOf<"abc">();
  });

  it("should join an array of strings with a separator", () => {
    type Result = Join<["a", "b", "c"], "-">;
    expectTypeOf<Result>().toEqualTypeOf<"a-b-c">();
  });

  it("should join an array of numbers with no separator", () => {
    type Result = Join<[1, 2, 3]>;
    expectTypeOf<Result>().toEqualTypeOf<"123">();
  });

  it("should join an array of numbers with a separator", () => {
    type Result = Join<[1, 2, 3], ",">;
    expectTypeOf<Result>().toEqualTypeOf<"1,2,3">();
  });

  it("should join an array of bigints with no separator", () => {
    type Result = Join<[1n, 2n, 3n]>;
    expectTypeOf<Result>().toEqualTypeOf<"123">();
  });

  it("should join an array of booleans with no separator", () => {
    type Result = Join<[true, false, true]>;
    expectTypeOf<Result>().toEqualTypeOf<"truefalsetrue">();
  });

  it("should join an array of booleans with a separator", () => {
    type Result = Join<[true, false, true], "|">;
    expectTypeOf<Result>().toEqualTypeOf<"true|false|true">();
  });

  it("should return an empty string for an empty array", () => {
    type Result = Join<[]>;
    expectTypeOf<Result>().toEqualTypeOf<"">();
  });

  it("should handle a single element array", () => {
    type Result = Join<["single"]>;
    expectTypeOf<Result>().toEqualTypeOf<"single">();
  });
});
