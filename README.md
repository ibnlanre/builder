<h1 align="center">Builder Repository</h1>

<div align="center">

[![minified size](https://img.shields.io/bundlephobia/min/@ibnlanre/builder)](https://bundlephobia.com/package/@ibnlanre/builder)
[![license](https://img.shields.io/github/license/ibnlanre/builder?label=license)](https://github.com/ibnlanre/builder/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/@ibnlanre/builder)](https://www.npmjs.com/package/@ibnlanre/builder)
[![downloads](https://img.shields.io/npm/dt/@ibnlanre/builder)](https://www.npmjs.com/package/@ibnlanre/builder)

</div>

## 📦 About This Repository

This is the monorepo for the `@ibnlanre/builder` library and its documentation. It contains:

- **[`app/`](./app)** - The core `@ibnlanre/builder` library package
- **[`docs/`](./docs)** - Documentation website built with Nextra

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build the library
cd app && pnpm run bundle

# Start the docs dev server
cd docs && pnpm run dev
```

### Development Workflow

**Working on the library:**

```bash
cd app
pnpm run test        # Run tests
pnpm run typecheck   # Type check
pnpm run lint        # Lint code
pnpm run bundle      # Build the library
```

**Working on documentation:**

```bash
cd docs
pnpm run dev         # Start dev server
pnpm run build       # Build for production
```

## 📚 Documentation

For comprehensive guides, API references, and live examples, visit the official documentation:

**[create-builder.vercel.app](https://create-builder.vercel.app/)**

## 🧪 Testing

The project uses [Vitest](https://vitest.dev/) for testing:

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm run coverage

# Run tests in watch mode
cd app && pnpm run test -- --watch
```

## 📝 Publishing

The library is published to npm from the `app/` directory:

```bash
cd app

# Patch version (1.0.0 → 1.0.1)
pnpm run patch

# Minor version (1.0.0 → 1.1.0)
pnpm run minor

# Major version (1.0.0 → 2.0.0)
pnpm run major
```

The publish process automatically:
1. Runs tests and type checking
2. Builds the library
3. Validates package exports with `@arethetypeswrong/cli`
4. Publishes to npm
5. Pushes git tags

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`pnpm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

The `@ibnlanre/builder` library is licensed under the [MIT](./LICENSE) License.

---

<div align="center">
Built with ❤️ by <a href="https://github.com/ibnlanre">Ridwan Olanrewaju</a>
</div>

