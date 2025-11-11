import { describe, expect, it } from "vitest";

import { isFunction } from ".";

describe("isFunction", () => {
  it("should return true for a function", () => {
    const func = () => {};
    expect(isFunction(func)).toBe(true);
  });

  it("should return false for a string", () => {
    const str = "I am not a function";
    expect(isFunction(str)).toBe(false);
  });

  it("should return false for a number", () => {
    const num = 42;
    expect(isFunction(num)).toBe(false);
  });

  it("should return false for an object", () => {
    const obj = { key: "value" };
    expect(isFunction(obj)).toBe(false);
  });

  it("should return false for an array", () => {
    const arr = [1, 2, 3];
    expect(isFunction(arr)).toBe(false);
  });

  it("should return false for null", () => {
    expect(isFunction(null)).toBe(false);
  });

  it("should return false for undefined", () => {
    expect(isFunction(undefined)).toBe(false);
  });
});
