export type Paths<
  List extends readonly unknown[],
  Separator extends string = ".",
  Result extends string = "",
> = List extends []
  ? Result
  : List extends [...infer Head, infer Tail]
    ? Tail extends string | number
      ? Result extends ""
        ? Paths<Head, `${Tail}`>
        : Paths<Head, `${Tail}${Separator}${Result}`>
      : Paths<Head, Result>
    : never;
