/**
 * Represents a store key.
 *
 * @param {Field} Field The type of the field.
 * @param {Prefix} Prefix The type of the prefix.
 *
 * @returns {Base<Field, Prefix>} A store key object with get and use functions.
 */
export type Base<Field, Prefix extends readonly string[] = []> = {
  $get: <Arguments extends unknown[]>(
    ...args: Arguments
  ) => [...Prefix, Field, ...Arguments];
  $use: () => [...Prefix, Field];
};
