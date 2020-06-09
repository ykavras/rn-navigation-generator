const { srcPath } = require('../../config');
const { appendFile } = require('./utils');

const importScreens = screens => {
    const results = screens.map(async screen => {
        const newPath = `${srcPath}/navigations/index.js`;
        return await appendFile(newPath, `import ${screen} from '../screens/${screen}';\n`);
    });
    return Promise.all(results).then(completed => {
        if (!completed) {
            return false;
        } else {
            return true;
        }
    });
};


module.exports = importScreens;