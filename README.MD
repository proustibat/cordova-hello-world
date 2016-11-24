# Cordova Hello World

Simple cordova project using cordova plugins, ios and android platforms.

## What does this branch do ?
- Create from the [master](https://github.com/proustibat/cordova-hello-world/tree/master) branch which is the basis branch.
- Adds ES6 environment to develop javascript application from src folder. Based on this [Medium article](https://medium.com/france/d%C3%A9velopper-vos-applications-mobiles-en-es6-avec-autoroute-js-et-cordova-1231488d3514#.xdjzr53y6) but not using "autoroute"

## Requirements

- You'll need [Node](https://nodejs.org/en/download/) installed (or 'brew install node' with homebrew) and NPM.
- Wanna develop for android platforms? Please read this [installation documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
- Wanna develop for ios platforms? Please read this [installation documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)
- Please be sure [Cordova](https://cordova.apache.org/) is installed before ('npm install -g cordova')
- Be sure for this branch that webpack is globally installed on your system ('npm install -g webpack')

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

*Command above runs these following commands:*

```sh
npm run compile:js
cordova serve -l
```

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
Command above runs these 2 following commands

```sh
cordova build android
```

```sh
cordova build ios
```

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


