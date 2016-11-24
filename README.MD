# Cordova Hello World

Simple cordova project using cordova plugins, ios and android platforms.


## Requirements

- You'll need [Node](https://nodejs.org/en/download/) installed (or `brew install node` with homebrew) and NPM.
- Wanna develop for android platforms? Please read this [installation documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
- Wanna develop for ios platforms? Please read this [installation documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)
- Please be sure [Cordova](https://cordova.apache.org/) is installed before (`npm install -g cordova`)

## Installation

```sh
git clone git@github.com:proustibat/cordova-hello-world.git
cd cordova-hello-world
git checkout base
npm install
```
*Note that `npm install` simply runs `cordova prepare` command*


## Usage

### Running App

* **On your browser**: run `npm start`

*Note that the command above runs `cordova serve -l`*
Then visit [http://localhost:8000/](http://localhost:8000/)

* **On android simulator**: run `cordova emulate android`
* **On android device**: run `cordova run android --device` (with a usb connected device)
* **On ios simulator**: run `cordova emulate ios`
* **On ios device**: run `cordova run ios --device` (with a usb connected device)

### Building
```sh
npm run build
```
*Note that `npm run build` command runs `cordova build android && cordova build ios`*

## Help
- Launch Android SDK Manager: run `android sdk`
- Launch Android Virtual Device Manager: run `android avd`
- Listing available android virtual devices: run `cordova run android --list`
- Listing available iOS virtual devices: run `cordova run ios --list`
- While running an app on simulators or devices, you can visit [chrome://inspect/#devices](chrome://inspect/#devices) to debug your android device> For ios device, open safari, find your device in development tab.





