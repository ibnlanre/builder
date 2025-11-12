<h1 align="center">Builder ✨</h1>

<div align="center">

[![minified size](https://img.shields.io/bundlephobia/min/@ibnlanre/builder)](https://bundlephobia.com/package/@ibnlanre/builder)
[![license](https://img.shields.io/github/license/ibnlanre/builder?label=license)](https://github.com/ibnlanre/builder/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/@ibnlanre/builder)](https://www.npmjs.com/package/@ibnlanre/builder)
[![downloads](https://img.shields.io/npm/dt/@ibnlanre/builder)](https://www.npmjs.com/package/@ibnlanre/builder)

</div>

## FAQs

**What problem does `@ibnlanre/builder` solve?**

It simplifies the management of deeply nested, dynamic keys, especially for caching libraries like SWR or TanStack Query. Instead of manually constructing keys like `['users', 'list', { page: 1 }]`, you can define a typed structure once and access keys with full type-safety and autocompletion, like `builder.users.list.$get({ page: 1 })`. This reduces errors and improves developer experience.

**How is it different from other solutions?**

`@ibnlanre/builder` focuses on a zero-dependency, lightweight, and type-safe approach. It generates a simple proxy-based object that translates nested property access into key arrays. It doesn't manage state or caching itself, making it a flexible utility that integrates with any data-fetching library.

**What are the core features?**

- **Dynamic Key Generation**: Effortlessly create complex keys from a nested object structure.
- **Type Safety**: Leverages TypeScript for full autocompletion and compile-time checks.
- **Prefix Customization**: Add global prefixes to all generated keys, useful for versioning or scoping.
- **Zero Dependencies**: A tiny, dependency-free utility.
- **Framework Agnostic**: Works with React, Vue, Svelte, or any JavaScript/TypeScript project.

**Where can I find the full documentation?**

For comprehensive guides, API references, and live examples, visit the official documentation website: **[create-builder.vercel.app](https://create-builder.vercel.app/)**

## License

The `@ibnlanre/builder` library is licensed under the [BSD-3-Clause][bsd-3-clause] License. For more information, please refer to the [LICENSE][license] file.

[license]: LICENSE.md
[bsd-3-clause]: https://opensource.org/license/bsd-3-clause
