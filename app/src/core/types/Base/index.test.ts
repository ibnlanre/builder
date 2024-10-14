import { describe, expectTypeOf, it } from "vitest";
import type { Base } from ".";

describe("Base type", () => {
  type TestField = "testField";
  type TestPrefix = ["prefix1", "prefix2"];

  type TestBase = Base<TestField, TestPrefix>;

  it("should have a $get method that returns the correct type", () => {
    const testBase: TestBase = {
      $get: (...args) => ["prefix1", "prefix2", "testField", ...args],
      $use: () => ["prefix1", "prefix2", "testField"],
    };

    expectTypeOf(testBase.$get).toEqualTypeOf<
      <Arguments extends unknown[]>(
        ...args: Arguments
      ) => [...TestPrefix, TestField, ...Arguments]
    >();

    const result = testBase.$get(1, "two", true);
    expectTypeOf(result).toEqualTypeOf<
      ["prefix1", "prefix2", "testField", number, string, boolean]
    >();
  });

  it("should have a $use method that returns the correct type", () => {
    const testBase: TestBase = {
      $get: (...args) => ["prefix1", "prefix2", "testField", ...args],
      $use: () => ["prefix1", "prefix2", "testField"],
    };

    expectTypeOf(testBase.$use).toEqualTypeOf<
      () => [...TestPrefix, TestField]
    >();

    const result = testBase.$use();
    expectTypeOf(result).toEqualTypeOf<["prefix1", "prefix2", "testField"]>();
  });
});
