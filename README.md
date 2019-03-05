# NodeJS - TypeScript Starter Kit

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CircleCI](https://circleci.com/gh/postlight/nodejs-typescript-kit.svg?style=svg)](https://circleci.com/gh/postlight/nodejs-typescript-kit)

This NodeJS + TypeScript starter kit is a zero-config codebase that lets you start writing code immediately. Includes:

* TypeScript or just regular ol' JavaScript
* Jest for testing
* Prettier for formatting
* ESLint for linting
* Basic config and build scripts

## Creating a project

Create the project by using **npx**:

_[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher_

```bash
npx @postlight/node-typescript-starter-kit my-awesome-project

cd my-awesome-project
```

Install dependencies using either **yarn** or **npm**

```bash
yarn install

#  or

npm install
```

And you can directly start coding!

![startekit](https://user-images.githubusercontent.com/32297675/53011741-c68e9200-3449-11e9-8746-01bcc0fff247.gif)

## Starter Kit Documentation

### Development

For development, we'll assume you're using `yarn`, but if you're using `npm` instead, adjust the commands appropriately (namely, replace `yarn` with `npm run`).

For running an individual `.ts` file:

```bash
yarn ts-node <file.ts>
```

For development mode:

```bash
yarn nodemon
```

[nodemon](https://www.npmjs.com/package/nodemon) will automatically restart the application when file changes are detected. This is useful if the tool you're building executes code when run.

### Linting

```bash
yarn lint
```

VSCode Users should add this to their workspace settings to integrate JS/TS Linting in general:

```json
  "eslint.validate": [
    "javascript",
    "typescript",
  ]
```

### Running tests

Run all tests:

```bash
yarn test
```

Run and watch all tests:

```bash
yarn test:watch
```

### Building the App

```bash
yarn build
```

## Building your app with CircleCI

Having already pushed your project to your favorite git-repository hosting service, you're one click away from integrating your app with CircleCI.

- Login to [CircleCI](https://circleci.com/)
- On the left side menu, press `Add Projects`.
- Pinpoint your project and press `Set Up Project`.
- Choose `Linux` as the OS and `Node` as the language.
- Press `Start Building`, and you're all set! :tada:

CircleCI ensures that every commit is checked for errors before merging.
This basic setup runs `yarn lint`, `yarn test`, and `yarn build`.

## What's Included?

Your environment will have everything you need to build a modern NodeJS - Typescript application

- Typescript Support
- Jest unit testing
- ESLint and Prettier configs
- CircleCI configs
- Pre-commit hooks

  ***

  A micro project from your friends at [Postlight Labs](https://postlight.com/labs)
