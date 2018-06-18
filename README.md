##### Android打离线包命令
react-native bundle --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --platform android --assets-dest ./android/app/src/main/res/ --dev false

##### 添加 prop-types
React 15.5之后,将验证从 React 中单拎出来，执行下面👇命令即可:
>npm install prop-types