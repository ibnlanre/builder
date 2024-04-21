<h1 align="center">Builder ✨</h1>

<div align="center">

[![minified size](https://img.shields.io/bundlephobia/min/@ibnlanre/builder)](https://bundlephobia.com/package/@ibnlanre/builder)
[![license](https://img.shields.io/github/license/ibnlanre/builder?label=license)](https://github.com/ibnlanre/builder/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/@ibnlanre/builder)](https://www.npmjs.com/package/@ibnlanre/builder)
[![downloads](https://img.shields.io/npm/dt/@ibnlanre/builder)](https://www.npmjs.com/package/@ibnlanre/builder)

</div>

## Table of Content

1. Introduction
    - Overview
    - Purpose
    - Benefits
2. Getting Started
    - Installation
    - Basic Usage
3. Key Features
    - Builder Object
    - Dynamic Key Generation
    - Colocation of Values
    - Efficient Value Retrieval
    - Flexible Usage
    - Type Safety
4. Advanced Topics
    - Customizing Key Generation
    - Handling Errors
    - Performance Considerations
5. API Reference
    - Builder Methods
    - Configuration Options
6. Examples
    - Basic Examples
    - Advanced Use Cases
7. FAQs
8. Contribution Guidelines
9. Changelog
10. Contact / Support

## Introduction

The @ibnlanre/builder library is a package designed to streamline dynamic key generation, thus addressing the complex issue of cache key management and invalidation. By chaining the nodes of a register into an array of keys, it eliminates the need for manual construction of keys. This is achieved through a builder object, created using the createBuilder function. This object contains methods for retrieving the value of a key, making it easier to locate and reuse keys.

### Overview

The builder library is a lightweight package that simplifies the process of generating keys for cache management. It provides a clean and efficient way to access nested values in a register, without the need for manual key construction. The builder object is created using the createBuilder function, which takes a register and an array of prefixes as arguments. The register is a nested object containing the keys and values to be accessed, while the prefixes are used to generate the keys for the builder object.

### Purpose

The purpose of the builder library is to provide a simple and efficient way to manage cache keys in a nested object. By creating a builder object, developers can easily access and retrieve values from the register, without the need for manual key construction. This makes it easier to locate and reuse keys, reducing the risk of errors and improving code readability.

### Benefits

- **Simplicity**: The builder library simplifies the process of generating keys for cache management, making it easier to access and retrieve values from a nested object.
- **Efficiency**: By eliminating the need for manual key construction, the builder library streamlines the process of key generation, reducing the risk of errors and improving code efficiency.
- **Flexibility**: The builder library is highly flexible, allowing developers to customize key generation and handle errors as needed.
- **Type Safety**: The builder library provides type safety, ensuring that keys are generated and accessed correctly.
- **Performance**: The builder library is lightweight and efficient, making it ideal for use in performance-critical applications.
- **Ease of Use**: The builder library is easy to use and integrate into existing codebases, making it a valuable tool for developers.
- **Scalability**: The builder library is scalable, allowing developers to manage cache keys in a nested object with ease.
- **Maintainability**: The builder library improves code maintainability by providing a clean and efficient way to access and retrieve values from a register.
- **Readability**: The builder library enhances code readability by eliminating the need for manual key construction, making it easier to locate and reuse keys.

## Getting Started

### Installation

To install the @ibnlanre/builder library, run the following command:

```bash
npm install @ibnlanre/builder
```

### Basic Usage

To use the @ibnlanre/builder library, follow these steps:

1. Import the createBuilder function from the library:

```typescript
import { createBuilder } from '@ibnlanre/builder';
```

2. Create a builder object using the createBuilder function:

```typescript
const builder = createBuilder({
  foo: {
    baz: (id: number) => `/bazaar/${id}`,
    bar: 10,
  },
}, ["root", "node"]);
```

3. Access the register values using the builder object:

```typescript
builder.use(); // { foo: { baz: [Function: baz], bar: 10 } }

// Accessing a nested function value
builder.use().foo.baz(12); // "/bazaar/12"


// Accessing a nested primitive value
builder.use().foo.bar; // 10
```

## Key Features

### Builder Object

The builder object is the core feature of the @ibnlanre/builder library. It is created using the createBuilder function and contains methods for retrieving the value of a key. The builder object simplifies the process of key generation and provides a clean and efficient way to access nested values in a register.

### Dynamic Key Generation

The @ibnlanre/builder library dynamically generates keys for cache management, eliminating the need for manual key construction. By chaining the nodes of a register into an array of keys, it streamlines the process of key generation and retrieval, making it easier to locate and reuse keys.

### Colocation of Values

The builder library allows developers to colocate values in a nested object, making it easier to manage cache keys. By organizing keys and values in a register, developers can access and retrieve values with ease, improving code readability and maintainability.

### Efficient Value Retrieval

The builder library provides methods for retrieving the value of a key, making it easier to access nested values in a register. By chaining the nodes of a register into an array of keys, it streamlines the process of key generation and retrieval, reducing the risk of errors and improving code efficiency.

### Flexible Usage

The builder library is highly flexible, allowing developers to customize key generation and handle errors as needed. By providing a clean and efficient way to access and retrieve values from a register, it streamlines the process of cache key management, making it easier to locate and reuse keys.

### Type Safety

The builder library provides type safety, ensuring that keys are generated and accessed correctly. By validating keys at compile time, it reduces the risk of runtime errors and improves code reliability. This makes it easier to manage cache keys in a nested object, improving code maintainability and readability.

## Advanced Topics

### Customizing Key Generation

The @ibnlanre/builder library allows developers to customize key generation by providing an array of prefixes. These prefixes are used to generate the keys for the builder object, making it easier to access and retrieve values from a register. By customizing key generation, developers can streamline the process of cache key management and improve code efficiency.

### Handling Errors

The builder library provides methods for handling errors, making it easier to manage cache keys in a nested object. By validating keys at compile time, it reduces the risk of runtime errors and improves code reliability. This makes it easier to locate and reuse keys, reducing the risk of errors and improving code maintainability.

### Performance Considerations

The builder library is lightweight and efficient, making it ideal for use in performance-critical applications. By eliminating the need for manual key construction, it streamlines the process of key generation and retrieval, reducing the risk of errors and improving code efficiency. This makes it easier to manage cache keys in a nested object, improving code maintainability and readability.

## API Reference

### Builder Methods

The @ibnlanre/builder library provides the following methods for working with the builder object:

- `use()`: Returns the register itself, allowing developers to access nested values in the register.
- `get()`: Returns the prefixes associated with the builder object, allowing developers to retrieve the keys used to create the builder object.

### Configuration Options

The @ibnlanre/builder library provides the following configuration options for customizing key generation:

- `register`: A nested object containing the keys and values to be accessed.
- `prefixes`: An array of prefixes used to generate the keys for the builder object.
- `options`: Additional options for customizing key generation, such as error handling and performance optimizations.
- `types`: Type definitions for the builder object, ensuring that keys are generated and accessed correctly.
- `performance`: Performance optimizations for the builder object, improving code efficiency and reliability.

## Examples

### Basic Examples

The following code snippets demonstrate basic usage of the @ibnlanre/builder library:

```typescript

import { createBuilder } from '@ibnlanre/builder';

// Create a builder object
const builder = createBuilder({
  foo: {
    baz: (id: number) => `/bazaar/${id}`,
    bar: 10,
  },
}, ["root", "node"]);

// Access the register values
builder.use(); // { foo: { baz: [Function: baz], bar: 10 } }

// Access a nested function value
builder.use().foo.baz(12); // "/bazaar/12"

// Access a nested primitive value
builder.use().foo.bar; // 10

```

### Advanced Use Cases

The following code snippets demonstrate advanced use cases of the @ibnlanre/builder library:

```typescript

import { createBuilder } from '@ibnlanre/builder';

// Create a builder object with custom prefixes

const builder = createBuilder({
  foo: {
    baz: (id: number) => `/bazaar/${id}`,
    bar: 10,
  },
}, ["root", "node"]);

// Set custom prefixes for the builder object
builder.setPrefixes(["root", "node", "custom"]);

// Access the register values with custom prefixes

builder.use(); // { foo: { baz: [Function: baz], bar: 10 } }

// Access a nested function value with custom prefixes

builder.use().foo.baz(12); // "/bazaar/12"

// Access a nested primitive value with custom prefixes

builder.use().foo.bar; // 10

```

## FAQs

### What is the purpose of the @ibnlanre/builder library?

The @ibnlanre/builder library is designed to streamline dynamic key generation, making it easier to manage cache keys in a nested object. By creating a builder object, developers can access and retrieve values from the register, without the need for manual key construction.

### How does the @ibnlanre/builder library work?

The @ibnlanre/builder library creates a builder object using the createBuilder function. This object contains methods for retrieving the value of a key, making it easier to locate and reuse keys. By chaining the nodes of a register into an array of keys, it streamlines the process of key generation and retrieval.

### What are the key features of the @ibnlanre/builder library?

The key features of the @ibnlanre/builder library include the builder object, dynamic key generation, colocation of values, efficient value retrieval, flexible usage, and type safety. These features make it easier to manage cache keys in a nested object, improving code readability and maintainability.

### How can I customize key generation with the @ibnlanre/builder library?

You can customize key generation with the @ibnlanre/builder library by providing an array of prefixes. These prefixes are used to generate the keys for the builder object, making it easier to access and retrieve values from a register. By customizing key generation, you can streamline the process of cache key management and improve code efficiency.

## Contribution Guidelines

We welcome contributions to the @ibnlanre/builder library! To contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
1. Make your changes and ensure that the tests pass.
1. Write tests for your changes to ensure code quality.
1. Submit a pull request with a clear description of your changes.
1. Your pull request will be reviewed by the maintainers, and any necessary changes will be requested.
1. Once your pull request is approved, it will be merged into the main branch.
1. Thank you for contributing to the @ibnlanre/builder library!

## Changelog

The @ibnlanre/builder library follows semantic versioning. For a list of changes in each version, please refer to the [CHANGELOG.md](CHANGELOG.md) file.

## Contact / Support

If you have any questions or need support, please contact us at [me](hubb.com) or [me](hubb.com). We are happy to help with any issues or concerns you may have.
