/* eslint-disable */
const path = require('path');
const fs = require('fs');

function fromRoot(...args) {
    return path.resolve(process.cwd(), ...args);
}
function fromSrc(...args) {
    return fromRoot('src', ...args);
}

module.exports = {
    chainWebpack: config => {
        // Get all the directories, filtering out the files
        const directories = fs.readdirSync(fromSrc('.'), { withFileTypes: true }).filter(item => item.isDirectory());
        directories.forEach(dir => config.resolve.alias.set('@' + dir.name, fromSrc(dir.name)));
    }
}