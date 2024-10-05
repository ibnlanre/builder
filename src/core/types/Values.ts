export type Values<
  List extends readonly string[],
  Separator extends string = ".",
  Result extends string = "",
> = List extends [infer Head extends string, ...infer Tail extends string[]]
  ? Result extends ""
    ? Values<Tail, Separator, `${Head}`>
    : Result | Values<Tail, Separator, `${Result}${Separator}${Head}`>
  : Result;
