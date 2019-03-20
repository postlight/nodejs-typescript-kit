#!/usr/bin/env node

const chalk = require('chalk');
const editJsonFile = require('edit-json-file');
const util = require('util');
const fs = require('fs');

const asyncMkdir = util.promisify(fs.mkdir);

const CURR_DIR = process.cwd();
const isWindows = process.platform === 'win32';

const createDirectoryContents = async (starterKitPath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(starterKitPath);

  filesToCreate.forEach(file => {
    const origFilePath = `${starterKitPath}/${file}`;

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');

      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      createDirectoryContents(
        `${starterKitPath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
};

const editFiles = async projectName => {
  let file = editJsonFile(`${__dirname}/starter-kit/package.json`);

  file.set('name', projectName);
  file.save();

  fs.rename(
    `${__dirname}/starter-kit/gitignore`,
    `${__dirname}/starter-kit/.gitignore`
  );
};

const checkDirectory = async () => {
  const length = process.argv.length;

  if (length !== 3) {
    throw 'You should input 1 argument as the project name';
  } else {
    const projectName = process.argv[2];
    const directory = isWindows
      ? `${CURR_DIR}\\${projectName}`
      : `${CURR_DIR}/${projectName}`;

    console.log(`\n\nCreating a new starter kit in ${chalk.cyan(directory)}\n`);
    return projectName;
  }
};

const successText = projectName => {
  const successText = `Success! Created ${chalk.cyan(
    projectName
  )} at ${chalk.cyan(CURR_DIR)} 
  \n\nRun the following to get started:\n\n\t
  ${chalk.cyan('cd')} ${projectName}
  \n    Changes directory
  \n  ${chalk.cyan('yarn install')}
  \n    Installs all dependencies.
  \n\nAnd you're all set!
  \nInside that directory, you can run several commands:
  \n  ${chalk.cyan('yarn build')}
  \n    Builds the app.
  \n  ${chalk.cyan('yarn lint')}
  \n    Checks if the code is linted correctly. 
  \n  ${chalk.cyan('yarn test')}
  \n    Starts the test runner.
  \n\n You can check the documentation here: https://github.com/postlight/nodejs-typescript-kit
  `;

  console.log(successText);
};

const run = async () => {
  const projectName = await checkDirectory();

  const starterKitPath = `${__dirname}/starter-kit/`;

  await editFiles(projectName);

  await asyncMkdir(`${CURR_DIR}/${projectName}`);

  await createDirectoryContents(starterKitPath, projectName);

  successText(projectName);
};

run().catch(err => {
  console.log(`${chalk.bgRed(err.message || err)}\n`);
});
