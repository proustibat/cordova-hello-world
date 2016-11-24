# Cordova Hello World

Simple cordova project using cordova plugins, form ios platform and android platform.
This branch adds ES6 environment to develop application based on this medium article [https://medium.com/france/d%C3%A9velopper-vos-applications-mobiles-en-es6-avec-autoroute-js-et-cordova-1231488d3514#.xdjzr53y6](https://medium.com/france/d%C3%A9velopper-vos-applications-mobiles-en-es6-avec-autoroute-js-et-cordova-1231488d3514#.xdjzr53y6)

## Requirements

- You'll need Node installed (brew install node)
- Please be sure cordova is installed before (npm install -g cordova)
- Wanna develop for android platforms? Please read this installation documentation:[https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
- Wanna develop for ios platforms? Please read this installation documentation:[https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)
- Be sure for this branch that webpack is globally installed on your system (npm install -g webpack)

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


//TODO: use jquery from node modules instad of from javascript sources





