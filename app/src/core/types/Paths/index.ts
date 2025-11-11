import type { Dictionary } from "../Dictionary";
import type { Values } from "../Values";

export type Paths<
  Register extends Dictionary,
  Prefix extends readonly string[] = [],
  Separator extends string = ".",
> = Register extends Dictionary
  ? {
      [Key in keyof Register]: Key extends number | string
        ? Register[Key] extends Dictionary
          ?
              | PathsHelper<
                  Prefix,
                  `${Key}${Separator}${Paths<Register[Key], [], Separator>}`,
                  Separator
                >
              | PathsHelper<Prefix, `${Key}`, Separator>
          : PathsHelper<Prefix, `${Key}`, Separator>
        : never;
    }[keyof Register]
  : never;

type PathsHelper<
  Prefix extends readonly string[],
  Key extends string,
  Separator extends string = ".",
> = Values<[...Prefix, Key], Separator>;
