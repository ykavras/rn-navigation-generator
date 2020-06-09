const appFile = require('../be-printed-func/app-file');
const { createFile } = require('./utils');


const createAppFile = async () => {
    const newPath = `${process.cwd()}/App.js`;
    return await createFile(newPath, appFile);
};


module.exports = createAppFile;