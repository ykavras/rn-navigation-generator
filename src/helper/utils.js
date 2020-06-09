const fs = require('fs-extra');
const readline = require('readline');
const { component, styles } = require('../be-printed-func/component');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const removeFolder = async path => {
    try {
        await fs.remove(path);
        return true;
    } catch (err) {
        return false;
    }
};

const createFolder = async path => {
    try {
        await fs.mkdir(path);
        return true;
    } catch (err) {
        return false;
    }
};

const createComponent = async (path, screen) => {
    try {
        await fs.writeFile(`${path}/index.js`, component(screen));
        await fs.writeFile(`${path}/styles.js`, styles);
        return true;
    } catch (err) {
        return false;
    }
};

const createFile = async (path, content) => {
    try {
        await fs.writeFile(path, content);
        return true;
    } catch (err) {
        return false;
    }
};

const appendFile = async (path, content) => {
    try {
        await fs.appendFile(path, content);
        return true;
    } catch (err) {
        return false;
    }
};

const renderQuestion = async data => {
    let array = [];
    for (let item of data) {
        array = (
            await new Promise(resolve => {
                rl.question(item, answer => {
                    const answerSplit = answer.replace(/\s/g, '').split(',');
                    resolve(answerSplit);
                });
            })
        );
    }
    rl.close();
    return array.map(i => {
        const first = i.charAt(0).toUpperCase();
        const last = i.slice(1);
        return first + last;
    });
};

module.exports = {
    removeFolder,
    createFolder,
    createComponent,
    renderQuestion,
    createFile,
    appendFile,
};