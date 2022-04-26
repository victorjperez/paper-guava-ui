const fs = require('fs');
const process = require('process');

if (!process.argv[2] || !/^[a-zA-Z]+$/.test(process.argv[2])) {
  console.log('\x1b[31mERROR: Invalid argument! Argument must contain letters only.\x1b[0m');
  console.log('\x1b[31mExample command: yarn run create:component ComponentName\x1b[0m');
  process.exit(9);
}
const componentName = process.argv[2];
const componentPath = `./src/${componentName}`;
const scriptFilesPath = './scripts/CreateComponentFiles';

if (fs.existsSync(componentPath)) {
  console.log('\x1b[31mERROR: Component already exists! Exiting...\x1b[0m');
  process.exit(9);
}

fs.mkdirSync(componentPath);

const fileNames = [
  ['Component.module.txt', `${componentName}.module.scss`],
  ['Component.stories.txt', `${componentName}.stories.js`],
  ['Component.test.txt', `${componentName}.test.js`],
  ['Component.txt', `${componentName}.js`],
  ['index.txt', 'index.js'],
  ['README.txt', 'README.mdx'],
];

let readData;
fileNames.forEach((fileName) => {
  readData = fs.readFileSync(`${scriptFilesPath}/${fileName[0]}`);

  let result = readData.toString().replace(/{% Component %}/g, componentName);

  fs.writeFileSync(`${componentPath}/${fileName[1]}`, result);

});
console.log(`\x1b[32mSuccess!\x1b[0m Your new component folder is located at \x1b[36m${componentPath}\x1b[0m.`);
console.log('Visit the contribution guide that Victor definitely made for further steps on creating your component.');
process.exit(0);
