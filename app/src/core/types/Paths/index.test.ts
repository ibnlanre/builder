import { describe, expect, it } from "vitest";
import type { Paths } from ".";

describe("Paths type utility", () => {
  it("should generate correct paths for a simple dictionary", () => {
    type SimpleDict = {
      a: number;
      b: string;
    };

    type Result = Paths<SimpleDict>;
    type Expected = "a" | "b";

    const assertType = <T>(value: T) => value;
    const result: Result = assertType<Expected>("a");
    expect(result).toBe("a");
  });

  it("should generate correct paths for a nested dictionary", () => {
    type NestedDict = {
      a: {
        b: {
          c: number;
        };
      };
      d: string;
    };

    type Result = Paths<NestedDict>;
    type Expected = "a" | "a.b" | "a.b.c" | "d";

    const assertType = <T>(value: T) => value;
    const result: Result = assertType<Expected>("a.b.c");
    expect(result).toBe("a.b.c");
  });

  it("should generate correct paths with custom separator", () => {
    type CustomSeparatorDict = {
      a: {
        b: {
          c: number;
        };
      };
      d: string;
    };

    type Result = Paths<CustomSeparatorDict, [], "/">;
    type Expected = "a" | "a/b" | "a/b/c" | "d";

    const assertType = <T>(value: T) => value;
    const result: Result = assertType<Expected>("a/b/c");
    expect(result).toBe("a/b/c");
  });
});
