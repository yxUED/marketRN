#!/bin/bash

key=$1
version=$2
gradle="android/app/build.gradle"
current=`cat $gradle | grep $key | head -2 | tail | grep -Eo "\d{1}(\.|\d)*"`
echo Current Android $key Version: $current

if [ ! -n "$version" ] ;then
    let "current++"
else
    current=$version
fi

if [ $key == "versionCode" ] ;then
    sed -e "s/versionCode [0-9][0-9]*/versionCode $current/" $gradle > $gradle.bak
else
    echo $key
    sed -e "s/versionName \".*\"/versionName \"$current\"/" $gradle > $gradle.bak
fi

mv -f $gradle.bak $gradle
echo Bump $key to $current
exit 0
