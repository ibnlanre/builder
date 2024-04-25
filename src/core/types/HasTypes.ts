import type { Dictionary, Intersect } from "@ibnlanre/types";

/**
 * Represents an object with types.
 *
 * @template Input The type of the input object.
 * @template Types The type of the types to add.
 * @template Key The type of the key to add.
 *
 * @return Intersect<Input & Partial<Record<Key, Types>>> An object with optional types.
 */
export type HasTypes<
  Input extends Dictionary,
  Types extends Dictionary,
  Key extends string = "has"
> = Intersect<Input & Partial<Record<Key, Types>>>;
