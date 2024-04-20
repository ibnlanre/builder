import { createBuilder, hasTypes } from "./dist";

// const builder = createBuilder({
//   foo: {
//     bar: hasTypes({
//       baz: (a: number, b: string) => a + b,
//     })<{
//       hello: "world";
//     }>(),
//   },
// });

// builder.map.foo.bar.has.hello;
// const test = builder.foo.bar.get("test", { hello: "world" }, 8, 74n).join("/");

// const x = builder.get();
// const y = builder.use();
// const z = builder.map;

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

const register = createBuilder({
  account: {
    delete_account,
    create,
  },
});

register.account.create.get("test", { email: "test", password: "test" });
