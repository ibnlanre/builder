type Primitives = string | number | boolean;

export type Join<
  List extends ReadonlyArray<Primitives>,
  Separator extends string = "",
> = List extends [infer Head, ...infer Rest]
  ? Head extends Primitives
    ? Rest extends []
      ? Head
      : Rest extends Primitives[]
        ? `${Head}${Separator}${Join<Rest, Separator>}`
        : ""
    : ""
  : "";
