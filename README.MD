# Cordova Hello World

Simple cordova project using cordova plugins, form ios platform and android platform.


## Requirements

- Please be sure cordova is installed before (npm install -g cordova)
- Wanna develop for android platforms? Please read this installation documentation:[https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
- Wanna develop for ios platforms? Please read this installation documentation:[https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)


## Installation
```sh
cordova prepare
```


## Usage

### Running App

* On your browser
 
```sh
cordova serve -l
```
Then visit [http://localhost:8000/](http://localhost:8000/)

* On android simulator
 
```sh
cordova emulate android
```

* On android device 
 
```sh
cordova run android --device
```


* On ios simulator
 
```sh
cordova emulate ios
```

* On ios device
 
```sh
cordova run ios --device
```

### Building

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







