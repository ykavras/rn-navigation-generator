const { srcPath } = require('../../config');
const { appendFile } = require('./utils');
const navigationContainer = require('../be-printed-func/navigation-container');

const createRootStackFile = async () => {
    const newPath = `${srcPath}/navigations/index.js`;
    await appendFile(newPath, '\n// Navigation Container');
    return await appendFile(newPath, navigationContainer());
};


module.exports = createRootStackFile;