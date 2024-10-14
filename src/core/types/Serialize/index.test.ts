import { describe, expectTypeOf, it } from "vitest";
import type { Serialize } from ".";

describe("Serialize", () => {
  it("should return an empty string for nullish values", () => {
    expectTypeOf<Serialize<null>>().toEqualTypeOf<"">();
    expectTypeOf<Serialize<undefined>>().toEqualTypeOf<"">();
  });

  it("should serialize other primitives", () => {
    expectTypeOf<Serialize<1>>().toEqualTypeOf<"1">();
    expectTypeOf<Serialize<"a">>().toEqualTypeOf<"a">();
    expectTypeOf<Serialize<true>>().toEqualTypeOf<"true">();
    expectTypeOf<Serialize<false>>().toEqualTypeOf<"false">();
    expectTypeOf<Serialize<1n>>().toEqualTypeOf<"1">();
  });
});
