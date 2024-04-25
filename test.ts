import { Intersect } from "@ibnlanre/types";
import { createBuilder, typeValue } from "./src/core";
import { createBuilderProvider } from "./src/react";

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

builder.foo.baz.get("test", { id: 11 });

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

// Builder Provider is a custom hook that creates a BuilderProvider component and a useBuilder hook. The BuilderProvider component is a context provider that provides the builders prop to all its children. The useBuilder hook is used to access the builders prop in any child component.

//  The  useBuilderProvider  function is a custom hook that creates a  BuilderProvider  component and a  useBuilder  hook. The  BuilderProvider  component is a context provider that provides the  builders  prop to all its children. The  useBuilder  hook is used to access the  builders  prop in any child component.
//  The  useBuilderProvider  function takes two type parameters:  Register  and  Prefix . The  Register  type is a dictionary of registered components, while the  Prefix  type is an array of strings that represent the path to the registered component.
//  The  Builders  type is a record of builders, where the key is the name of the builder and the value is the builder function. The  BuilderProviderProps  type is a props object that takes the  builders  prop and children as its properties.
//  The  useBuilderProvider  function returns an object with two properties:  useBuilder  and  Provider . The  useBuilder  function is a custom hook that returns the builder function for a given name. The  Provider  property is a JSX element that wraps the children with the  BuilderContext.Provider  component.
//  Now that we have defined the  useBuilderProvider  function, we can use it to create a  BuilderProvider  component that provides the  builders  prop to all its children.
//  Step 3: Create a BuilderProvider Component
//  Next, we will create a  BuilderProvider  component that uses the  useBuilderProvider  function to provide the  builders  prop to all its children.

//  The  BuilderProvider  component is a context provider that provides the  builders  prop to all its children. It uses the  useBuilderProvider  function to create a  BuilderProvider  component and a  useBuilder  hook. The  useBuilder  hook is used to access the  builders  prop in any child component.

const userBuilder = createBuilder({
  user: {
    name: "John Doe",
    age: 30,
  },
});

const locationBuilder = createBuilder({
  location: {
    country: "Nigeria",
    city: "Lagos",
  },
});

export const { useBuilder, BuilderProvider } = createBuilderProvider({
  locationBuilder,
  userBuilder,
});
const { locationBuilder: location } = useBuilder();

// type builders = keyof typeof userBuilder;

// function Component() {
//   const { userBuilder } = useBuilder();
//   const user = userBuilder.use().user.age;
//   const key = userBuilder.user.age.use();
// }
