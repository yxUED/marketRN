#!/bin/bash

version=$1
fox="src/fox.js"
sed -e "s/const VERSION = \'.*\';/const VERSION = \'$version\';/" $fox > $fox.bak
mv -f $fox.bak $fox
sh sh/bump_ios.sh CFBundleShortVersionString $version
sh sh/bump_android.sh versionName $version
exit 0
