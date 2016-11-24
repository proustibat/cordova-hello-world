# Cordova Hello World

Simple cordova project using cordova plugins, ios and android platforms.

## What does it do ?
It does the basical job from [base](https://github.com/proustibat/cordova-hello-world/blob/base) branch which is the basis branch: just a cordova hello world project with simple javascript and css, and a cordova camera plugin. 
This branch is merged with the followings:
- [basis/es6-babel-webpack](https://github.com/proustibat/cordova-hello-world/tree/basis/es6-babel-webpack) branch : 
    - Adds ES6 environment to develop javascript application from src folder. Based on this [Medium article](https://medium.com/france/d%C3%A9velopper-vos-applications-mobiles-en-es6-avec-autoroute-js-et-cordova-1231488d3514#.xdjzr53y6) but not using "autoroute"
- [basis/customize-platforms](https://github.com/proustibat/cordova-hello-world/edit/basis/customize-platforms) branch : 
    - Use *merges* to Customize Each Platform as explained in [this documentation section](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#using-merges-to-customize-each-platform)

## Requirements

- You'll need [Node](https://nodejs.org/en/download/) installed (or 'brew install node' with homebrew) and NPM.
- Wanna develop for android platforms? Please read this [installation documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
- Wanna develop for ios platforms? Please read this [installation documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)
- Please be sure [Cordova](https://cordova.apache.org/) is installed before ('npm install -g cordova')
- Be sure for this branch that [Webpack](https://webpack.github.io/docs/usage.html) is globally installed on your system ('npm install -g webpack')

## Installation
```sh
cordova prepare // or npm install
```


## Usage

### Running App

* On your browser

```sh
npm start
```

*Note that the command above runs `npm run compile:js && cordova serve -l`*

**Then visit [http://localhost:8000/](http://localhost:8000/)**

* **On android simulator**
 
```sh
npm run compile:js
cordova emulate android
```

* **On android device**
 
```sh
npm run compile:js
cordova run android --device
```

* **On ios simulator**
 
```sh
npm run compile:js
cordova emulate ios
```

* **On ios device**
 
```sh
npm run compile:js
cordova run ios --device
```

### Building

```sh
npm run compile:js
npm run build
```
*Note that `npm run build` command runs `cordova build android && cordova build ios`*

## Help
Some helpful commands

```sh
android sdk
```

```sh
android avd
```

```sh
cordova run android --list
```

```sh
cordova run ios --list
```

_____

You can visit chrome://inspect/#devices to debug your android device while running app on it.
To debug ios device, open safari on your mac, find your device on development tab.


