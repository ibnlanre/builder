import { Dictionary } from "./Dictionary";

export type Intersect<ObjectType extends unknown> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends Dictionary
    ? Intersect<ObjectType[Key]>
    : ObjectType[Key];
} & unknown;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
