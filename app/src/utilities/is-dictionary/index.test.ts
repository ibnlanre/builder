import { describe, expect, it } from "vitest";
import { isDictionary } from ".";

describe("isDictionary", () => {
  it("should return true for plain objects", () => {
    expect(isDictionary({})).toBe(true);
    expect(isDictionary({ key: "value" })).toBe(true);
  });

  it("should return false for null", () => {
    expect(isDictionary(null)).toBe(false);
  });

  it("should return false for arrays", () => {
    expect(isDictionary([])).toBe(false);
    expect(isDictionary([1, 2, 3])).toBe(false);
  });

  it("should return false for non-object types", () => {
    expect(isDictionary(42)).toBe(false);
    expect(isDictionary("string")).toBe(false);
    expect(isDictionary(true)).toBe(false);
    expect(isDictionary(undefined)).toBe(false);
  });

  it("should return true for objects created with Object.create(null)", () => {
    const obj = Object.create(null);
    expect(isDictionary(obj)).toBe(true);
  });
});
