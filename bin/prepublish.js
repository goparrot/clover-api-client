const { writeFileSync, copyFileSync, mkdirSync, existsSync } = require('fs');
const originPackage = require('../package.json');

const distPackage = originPackage;
distPackage.module = './index.js';
distPackage.main = './index.js';
distPackage.types = './index.d.ts';
delete distPackage.scripts;
delete distPackage.devDependencies;
delete distPackage.config;
delete distPackage['lint-staged'];

if (!existsSync('dist')) {
    mkdirSync('dist');
}

writeFileSync('./dist/package.json', JSON.stringify(distPackage, null, 2));

const copyFiles = ['README.md'];
for (const file of copyFiles) {
    copyFileSync(`./${file}`, `./dist/${file}`);
}
