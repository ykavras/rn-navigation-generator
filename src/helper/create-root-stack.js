const { srcPath } = require('../../config');
const { appendFile } = require('./utils');
const rootStackNavigator = require('../be-printed-func/root-stack');

const createRootStackFile = async () => {
    const newPath = `${srcPath}/navigations/index.js`;
    await appendFile(newPath, '\n// Root Stack Navigator\n');
    return await appendFile(newPath, rootStackNavigator());
};


module.exports = createRootStackFile;