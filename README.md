# NodeJS + Typescript Starter Kit

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CircleCI](https://circleci.com/gh/postlight/nodejs-typescript-kit.svg?style=svg&circle-token=b5c2cc962fa1978930d0777eb81c47cc0cccb73d)](https://circleci.com/gh/postlight/nodejs-typescript-kit)

## Installing Dependencies

```bash
yarn install
```

## Building the App

```bash
yarn build
```

## Running tests

Run all tests

```bash
yarn test
```

Run and watch all tests

```bash
yarn test:watch
```

## Linting

```bash
yarn lint
```

## Development

For running `.ts` files

```bash
yarn ts-node <file.ts>
```

For development mode

> _considering your entry point is `./src/index.ts`_ > _nodemon will watch the `src` folder and wait for changes made to any `.ts` files and will ignore test files_

```bash
yarn nodemon
```
