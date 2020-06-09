const { screensPath } = require('../../config');
const { createFolder, createComponent } = require('./utils');


const createComponentFile = screens => {
    const results = screens.map(async screen => {
        const newPath = `${screensPath}/${screen}`;
        const isCreateFolder = await createFolder(newPath);
        const isCreateComponent = await createComponent(newPath, screen);
        return isCreateFolder, isCreateComponent;
    });
    return Promise.all(results).then(completed => {
        if (!completed) {
            return false;
        } else {
            return true;
        }
    });
};


module.exports = createComponentFile;