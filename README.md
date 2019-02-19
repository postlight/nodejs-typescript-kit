# NodeJS + Typescript Starter Kit

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CircleCI](https://circleci.com/gh/postlight/nodejs-typescript-kit.svg?style=svg&circle-token=b5c2cc962fa1978930d0777eb81c47cc0cccb73d)](https://circleci.com/gh/postlight/nodejs-typescript-kit)

## Creating a project

Create the project by using **npx**:

_[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher_

```bash
npx node-typescript-starter-kit my-awesome-project
cd my-awesome-project
```

Install dependencies using either **yarn** or **npm**

```bash
yarn install

#   or

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

### Linting + Prettier

```bash
yarn lint
yarn prettify
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
---
npm test
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
