#!/usr/bin/env node

'use strict';

const { removeFolder, createFolder, createFile, renderQuestion } = require('./src/helper/utils');
const { questionScreens } = require('./src/helper/questions');
const createComponentFile = require('./src/helper/create-component');
const createStackFile = require('./src/helper/create-stack-navigator');
const createTabNavigatorFile = require('./src/helper/create-tab-navigator');
const createRootStackNavigatorFile = require('./src/helper/create-root-stack');
const createNavigationContainerFile = require('./src/helper/create-navigation-container');
const createAppFile = require('./src/helper/create-app');
const importScreens = require('./src/helper/import-screens');
const { srcPath, screensPath } = require('./config');
const exec = require('child_process').exec;

//navigation file
const navigationFile = require('./src/be-printed-func/navigation-file.js');


(async () => {

    // Remove Src Folder.
    const isStep = await removeFolder(srcPath);
    console.log('isStep =>', isStep);
    if (!isStep) return false;


    // Create Src Folder.
    const isStep0 = await createFolder(srcPath);
    console.log('isStep0 =>', isStep0);
    if (!isStep0) return false;


    // Create Screens Folder.
    const isStep1 = await createFolder(screensPath);
    console.log('isStep1 =>', isStep1);
    if (!isStep1) return false;


    // Get Screens Array.
    const screens = await renderQuestion(questionScreens);


    // Create Components Folders. && Create Components
    const isStep2 = await createComponentFile(screens);
    console.log('isStep2 =>', isStep2);
    if (!isStep2) return false;


    // Create Navigations Folder.
    const isStep3 = await createFolder(`${srcPath}/navigations`);
    console.log('isStep3 =>', isStep3);
    if (!isStep3) return false;


    const isStep4 = await createFile(`${srcPath}/navigations/index.js`, navigationFile);
    console.log('isStep4 =>', isStep4);
    if (!isStep4) return false;


    // Navigations index file imports screens.
    const isStep5 = await importScreens(screens);
    console.log('isStep5 =>', isStep5);
    if (!isStep5) return false;


    // Navigations index file StackNavigator Func add.
    const isStep6 = await createStackFile(screens);
    console.log('isStep6 =>', isStep6);
    if (!isStep6) return false;


    // Navigations index file Tabs Navigator add.
    const isStep7 = await createTabNavigatorFile(screens);
    console.log('isStep7 =>', isStep7);
    if (!isStep7) return false;


    // Navigations index file Root Stack Navigator add.
    const isStep8 = await createRootStackNavigatorFile();
    console.log('isStep8 =>', isStep8);
    if (!isStep7) return false;

    // Navigations index file Navigation Container add.
    const isStep9 = await createNavigationContainerFile();
    console.log('isStep9 =>', isStep9);
    if (!isStep9) return false;

    // Create App File.
    const isStep10 = await createAppFile();
    console.log('isStep10 =>', isStep10);
    if (!isStep10) return false;

    const yarnAdd = 'yarn add @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/bottom-tabs';
    const installer = exec(`${yarnAdd} && npx pod-install`, (error, stdOut, stdErr) => {
        console.log('Happy hacks! (npx react-native run (ios or android))\n');
        process.exit()
    });
    installer.stdout.on('data', (data) => {
        console.log(data);
    });
    installer.stderr.on('data', (data) => {
        console.error(data);
    });
})();