'use strict';


const fs = require("fs");
const path = require("path");


//
//
//

var enableRemoteDebugger = false;




//
// App file paths:
//

var appRootDir = fs.realpathSync(__dirname);

var configFileDir = appRootDir + '/config';

var appConfigFile = configFileDir + '/app.json';
var windowConfigFile = configFileDir + '/window.json';




//
// Parse command line args:
//

const argv = require('yargs')
    .usage('Usage: $0 <options>')
    .help()
    .alias('h', 'help')
    .alias('c', 'appCfg')
    .describe('c', 'App configuration file')
    .alias('w', 'windowCfg')
    .describe('w', 'Window configuration file')
    .alias('D', 'debugEnabled')
    .describe('D', 'Enable chrome remote debugger')
    .argv;

// catch non-hyphenated args as a launch command
const launchCommand = argv._;

if(argv.appCfg) {
    appConfigFile = argv.appCfg;
}

if(argv.windowCfg) {
    windowConfigFile = argv.windowCfg;
}


if(argv.debugEnabled) {
    enableRemoteDebugger = true;
}



if(launchCommand.length > 0) {
    console.log('launchCommand: ' + launchCommand.join(' '));
} else {
    console.log('launchCommand: <none>');
}




//
// Global app configuration defaults:
//

let defaultAppProperties = {
};

let defaultWindowProperties = {
    "width": 1440,
    "height": 900,
    "frame": false,
    "show": false
};




//
// Setup global app configuration
//

console.log('Loading app properties: ' + appConfigFile);
let appProperties = {};
try {
    appProperties = JSON.parse(fs.readFileSync(appConfigFile));
} catch(e) {
    console.log('Error: Failed to read app config file, using defaults.');
    appProperties = defaultAppProperties;
}


console.log('Loading window properties: ' + windowConfigFile);
let windowProperties = {};
try {
    windowProperties = JSON.parse(fs.readFileSync(windowConfigFile));
} catch(e) {
    console.log('Error: Failed to read config file, using defaults.');
    windowProperties = defaultWindowProperties;
}




//
// Display the current configurations:
//

console.log('appProperties = ' + JSON.stringify(appProperties, null, '  '));
console.log('windowProperties = ' + JSON.stringify(windowProperties, null, '  '));




//
// Create the Electron App and Window:
//

const electron = require('electron');

const app = electron.app;

if(enableRemoteDebugger) {
    app.commandLine.appendSwitch('remote-debugging-port', '8315');
    app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');
}

const BrowserWindow = electron.BrowserWindow;


let mainWindow;


app.on('ready', function () {
    mainWindow = new BrowserWindow(windowProperties);
    mainWindow.loadURL('file://' + appRootDir + '/src/public/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});


app.on('window-all-closed', function () {
    app.quit();
});


console.log('TestApp started successfully.');
