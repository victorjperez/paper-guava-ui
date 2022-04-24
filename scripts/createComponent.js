const fs = require("fs");

if (!process.argv[2] || !/^[a-zA-Z]+$/.test(process.argv[2])) {
  console.log("\x1b[31mERROR: Invalid argument! Argument must contain letters only.\x1b[0m");
  console.log(
    "\x1b[31mExample command: yarn run create:component ComponentName\x1b[0m"
  );
  process.exit(9);
}
const componentName = process.argv[2];
const componentPath = `./src/${componentName}`;
const scriptFilesPath = "./scripts/CreateComponentFiles/";

if (fs.existsSync(componentPath)) {
  console.log("\x1b[31mERROR: Component already exists! Exiting...\x1b[0m");
  process.exit(9);
} 
try {
  fs.mkdirSync(componentPath);
} catch (err) {
  throw err;
}
const fileNames = [
  ["Component.module.txt", `${componentName}.module.scss`],
  ["Component.stories.txt", `${componentName}.stories.js`],
  ["Component.test.txt", `${componentName}.test.js`],
  ["Component.txt",`${componentName}.js`],
  ["index.txt", "index.js"],
  ["README.txt", "README.mdx"],
];


fileNames.forEach(fileName => {
    fs.readFile(
      `${scriptFilesPath}/${fileName[0]}`,
      "utf8",
      function (err, data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/{% Component %}/g, componentName);

        fs.writeFile(
          `${componentPath}/${fileName[1]}`,
          result,
          "utf8",
          function (err) {
            if (err) return console.log(err);
          }
        );
      }
    );
});
console.log(
  `\x1b[32mSuccess!\x1b[0m Your new component folder is located at \x1b[36m${componentPath}\x1b[0m.`
);
console.log('Visit the contribution guide that Victor definitely made for further steps on creating your component.');
process.exit(0);