import type { Primitives } from "../Primitives";
import type { Serialize } from "../Serialize";

type JoinHelper<
  Head,
  Rest extends unknown[],
  Separator extends string,
> = Head extends Primitives
  ? Rest extends []
    ? `${Serialize<Head>}`
    : Rest extends Primitives[]
      ? `${Serialize<Head>}${Separator}${Join<Rest, Separator>}`
      : ""
  : "";

/**
 * Represents a list of primitives joined by a separator.
 *
 * @template List The type of the list.
 * @template Separator The type of the separator.
 *
 * @returns {string} The joined list.
 */
export type Join<
  List extends ReadonlyArray<Primitives>,
  Separator extends string = "",
> = List extends [infer Head, ...infer Rest]
  ? JoinHelper<Head, Rest, Separator>
  : "";
