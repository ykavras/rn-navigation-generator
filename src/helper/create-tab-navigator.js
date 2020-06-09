const { srcPath } = require('../../config');
const { appendFile } = require('./utils');
const createTabNavigator = require('../be-printed-func/tab-navigator');

const createTabNavigatorFile = async screens => {
    const newPath = `${srcPath}/navigations/index.js`;
    await appendFile(newPath, '\n// Imports Tabs Navigator');
    return await appendFile(newPath, createTabNavigator(screens));
};


module.exports = createTabNavigatorFile;