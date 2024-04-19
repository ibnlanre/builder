/**
 * Represents a store key.
 *
 * @param {Field} Field The type of the field.
 * @param {Prefix} Prefix The type of the prefix.
 *
 * @returns {Key<Field, Prefix>} A store key object with get and use functions.
 */
export type Key<Field, Prefix extends readonly string[] = []> = {
  get: <Y extends any[]>(...args: Y) => [...Prefix, Field, ...Y];
  use: () => [...Prefix, Field];
};
