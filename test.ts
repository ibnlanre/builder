import { Intersect } from "@ibnlanre/types";
import { createBuilder, typeValue } from "./src";

// const builder = createBuilder({
//   foo: {
//     bar: hasTypes({
//       baz: (a: number, b: string) => a + b,
//     })<{
//       hello: string;
//     }>(),
//   },
// });

// const test = builder.foo.bar.get("test", { hello: "world" }, 8, 74n).join("/");

const bar = typeValue({
  hello: "world",
});

//   <{
//   id: number;
// }>();

const builder = createBuilder({
  foo: {
    bar,
    baz: typeValue({
      id: 42,
    })(),
  },
});

// Access the type of the `bar` property.
type Bar = typeof builder.unbuild.foo.bar;
//   ^? { hello: string; has: { id: number; } }

// Access the type of the `baz` property.
type Baz = typeof builder.unbuild.foo.baz;
//   ^? { id: number; has: {} }

const x = builder.use();
const y = builder.foo.bar.use();
const z = builder.foo.get();

// ========================================================

// const register = {
//   user: {
//     id: 1,
//     name: "John Doe",
//     email: "johndoe@jmail.com",
//   },
//   post: {
//     id: 1,
//     title: "Hello, World!",
//     content: "This is my first post.",
//   },
// };

// const builder = createBuilder(register);
// const userName = builder.use().user.name;

// type User = ReturnType<typeof builder.use>["user"];

// type UserName = typeof register.user.name;

// ========================================================

const create = (data: { email: string; password: string }) => {
  return fetch("/account/create", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  });
};

const delete_account = (id: number) => {
  return fetch(`/account/${id}/delete`, {
    method: "DELETE",
  });
};

const register = createBuilder(
  {
    account: {
      delete_account,
      create,
    },
  },
  ["account"]
);

register.account.create.get("test", { email: "test", password: "test" });
type x = typeof register.unbuild.account.create;
