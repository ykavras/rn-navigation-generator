const { srcPath } = require('../../config');
const { appendFile } = require('./utils');
const createStackFunc = require('../be-printed-func/stack-navigator');

const createStackFile = screens => {
    const results = screens.map(async (screen, index) => {
        const newPath = `${srcPath}/navigations/index.js`;
        if (index === 0) {
            await appendFile(newPath, '\n// Imports Stack Functions\n');
        }
        return await appendFile(newPath, createStackFunc(screen));
    });
    return Promise.all(results).then(completed => {
        if (!completed) {
            return false;
        } else {
            return true;
        }
    });
};


module.exports = createStackFile;