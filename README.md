# ReScript React Cordova Template

Boilerplate code to quickly start developing across mobile and desktop platforms, using ReScript, React and Cordova.
Developing for the browser is done using Moduleserve. Afterwards, you can build the application and test it on mobile devices.
This readme file will have documentation more tailored to Linux, as I have set this up on a Linux system myself.
# Requirements
For Android development, you will need Android Studio, as well as a working AVD (Android Virtual Device). This can be created within Android Studio. You may use any editor when working with Cordova.
# Cordova installation
https://cordova.apache.org/#getstarted
You will need to install Cordova globally. You will need to set environment variables as well. This can be done in Linux by editing ~/.bashrc.
To check whether the environment variables are set correctly (for example for Android), use:
```
cordova requirements android
```
You might also need to switch Java versions. In Linux this is done by using the command:
```
sudo update-alternatives --config java
```
Java 8 openJDK will work with Cordova.
These are the environment variables I am using for Android (edit any line that is user specific, if you are going to copy it over):
```
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export ANDROID_SDK_ROOT=/home/lucas/Android/Sdk/
export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools
```

# Cordova add platforms (Android as an example)
```
cordova platform add android
```
# Run your application in a browser
Create a terminal instance and use:
```
npm run watch
```
This will run the ReScript compiler. After this, create a new terminal instance and use:
```
npm run server
```
This will create a local server at localhost:8000
# Run your application on a mobile platform
Build the application first by using
```
npm run build
```
Afterwards, you can run it, using this command. Replace platform with any platform you want to run it on.
```
cordova run [platform]
```


# Build

```
npm run build
```

# Watch

```
npm run watch
```
