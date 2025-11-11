import type { Values } from ".";

import { describe, expectTypeOf, it } from "vitest";

describe("Values type", () => {
  it("should return the correct union of values for a given list of strings", () => {
    expectTypeOf<Values<["a", "b", "c"]>>().toEqualTypeOf<
      "a" | "a.b" | "a.b.c"
    >();

    expectTypeOf<Values<["x", "y", "z"], "-">>().toEqualTypeOf<
      "x" | "x-y" | "x-y-z"
    >();

    expectTypeOf<Values<["foo", "bar"]>>().toEqualTypeOf<"foo" | "foo.bar">();
  });

  it("should return an empty string for an empty list", () => {
    expectTypeOf<Values<[]>>().toEqualTypeOf<"">();
  });
});
