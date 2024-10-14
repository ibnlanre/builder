export type Dictionary = {
  readonly [k: string]: unknown;
  readonly [k: number]: unknown;
  readonly [k: symbol]: unknown;
};
