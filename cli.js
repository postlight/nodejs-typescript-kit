#!/usr/bin/env node

const chalk = require('chalk');
const editJsonFile = require('edit-json-file');
const fs = require('fs');
const path = require('path');
const util = require('util');

const asyncMkdir = util.promisify(fs.mkdir);
const CWD = process.cwd();

const createDirectoryContents = async (starterKitPath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(starterKitPath);

  filesToCreate.forEach(file => {
    const origFilePath = path.resolve(starterKitPath, file);
    const writePath = path.resolve(newProjectPath, file);

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      fs.writeFileSync(
        path.resolve(CWD, writePath),
        contents,
        'utf8'
      );
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.resolve(CWD, writePath);

      createDirectoryContents(origFilePath, writePath);
    }
  });
};

const editFiles = async projectName => {
  let file = editJsonFile(path.resolve(__dirname, 'starter-kit', 'package.json');
  file.set('name', projectName);
  file.save();

  fs.rename(
    path.resolve(__dirname, 'starter-kit', 'gitignore'),
    path.resolve(__dirname, 'starter-kit', '.gitignore'),
    function (err) {
      if (err) throw err;
    }
  );
};

const checkDirectory = async () => {
  const length = process.argv.length;

  if (length !== 3) {
    throw 'You should input 1 argument as the project name';
  } else {
    const projectName = process.argv[2];
    const directory = path.resolve(CWD, projectName);

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

  const starterKitPath = path.resolve(__dirname, 'starter-kit');

  await editFiles(projectName);

  await asyncMkdir(path.resolve(CWD, projectName));

  await createDirectoryContents(starterKitPath, projectName);

  successText(projectName);
};

run().catch(err => {
  console.log(`${chalk.bgRed(err.message || err)}\n`);
});
