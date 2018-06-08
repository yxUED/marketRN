#!/bin/bash

build=$1
fox="src/fox.js"
sed -e "s/const BUILD = .*;/const BUILD = $build;/" $fox > $fox.bak
mv -f $fox.bak $fox
sh sh/bump_ios.sh CFBundleVersion $build
sh sh/bump_android.sh versionCode $build
exit 0
