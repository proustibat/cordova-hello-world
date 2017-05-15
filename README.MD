![Dependencies Updates Status](https://david-dm.org/proustibat/cordova-hello-world.svg) [![Code Climate](https://codeclimate.com/github/proustibat/cordova-hello-world/badges/gpa.svg)](https://codeclimate.com/github/proustibat/cordova-hello-world)
# Cordova Hello World 

Simple cordova project using cordova plugins, ios and android platforms.




## What does it do ?
It does the basical job from [base](https://github.com/proustibat/cordova-hello-world/tree/base) branch which is the basis branch: just a cordova hello world project with simple javascript and css, and a cordova camera plugin. 
This branch is merged with the followings:
- [basis/es6-babel-webpack](https://github.com/proustibat/cordova-hello-world/tree/basis/es6-babel-webpack) branch : 
    - Adds ES6 environment to develop javascript application from src folder. Based on this [Medium article](https://medium.com/france/d%C3%A9velopper-vos-applications-mobiles-en-es6-avec-autoroute-js-et-cordova-1231488d3514#.xdjzr53y6) but not using "autoroute"
- [basis/customize-platforms](https://github.com/proustibat/cordova-hello-world/tree/basis/customize-platforms) branch : 
    - Use *merges* to Customize Each Platform as explained in [this documentation section](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#using-merges-to-customize-each-platform)
- [basis/configuration-customization](https://github.com/proustibat/cordova-hello-world/tree/basis/configuration-customization) branch : 
    - Adds some configuration parameters following [this documentation about config.xml] (https://cordova.apache.org/docs/en/latest/config_ref/index.html)
- [basis/crosswalk](https://github.com/proustibat/cordova-hello-world/tree/basis/crosswalk) branch : 
    - Just add [Cordova Plugin Crosswalk Webview](https://crosswalk-project.org/documentation/cordova.html)

## Requirements

- You'll need [Node](https://nodejs.org/en/download/) installed (or `brew install node` with homebrew) and NPM.
- Wanna develop for android platforms? Please read this [installation documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
- Wanna develop for ios platforms? Please read this [installation documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)
- Please be sure [Cordova](https://cordova.apache.org/) is installed before (`npm install -g cordova`)
- Be sure that [Webpack](https://webpack.github.io/docs/usage.html) is globally installed on your system (`npm install -g webpack`)

## Installation

```sh
git clone git@github.com:proustibat/cordova-hello-world.git
cd cordova-hello-world
npm install
```
*Note that `npm install` simply runs `cordova prepare` command*


## Usage

### Running App

* **On your browser**: run `npm start`

Your browser will open at [http://localhost:8000/www](http://localhost:8000/www)

If you change index.js in sources, then browser will reload automatically.

* **On android simulator**:
```sh
cordova emulate android
```

* **On android device**
(with a usb connected device)
```sh
cordova run android --device
```

* **On ios simulator**
```sh
cordova emulate ios
```

* **On ios device**
(with a usb connected device)
```sh
cordova run ios --device
```

### Building

```sh
npm run build
```
*Note that `npm run build` command runs `cordova build android && cordova build ios && cordova serve -l`*

## Help
- Launch Android SDK Manager: run `android sdk`
- Launch Android Virtual Device Manager: run `android avd`
- Listing available android virtual devices: run `cordova run android --list`
- Listing available iOS virtual devices: run `cordova run ios --list`
- While running an app on simulators or devices, you can visit [chrome://inspect/#devices](chrome://inspect/#devices) to debug your android device> For ios device, open safari, find your device in development tab.


