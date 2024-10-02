import type { Paths } from "./Paths";

/**
 * Represents a store key.
 *
 * @param {Field} Field The type of the field.
 * @param {Prefix} Prefix The type of the prefix.
 *
 * @returns {Base<Field, Prefix>} A store key object with get and use functions.
 */
export type Base<
  Field,
  Prefix extends readonly string[] = [],
  Separator extends string = ".",
> = {
  $get: <Y extends any[]>(...args: Y) => [...Prefix, Field, ...Y];
  $use: () => [...Prefix, Field];
  $key: Paths<[...Prefix, Field], Separator>;
};
