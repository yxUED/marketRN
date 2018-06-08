#!/bin/bash

key=$1
version=$2
infoPlist="ios/fox/info.plist"
current=`cat $infoPlist | grep $key -A 1 | grep -Eo '\d{1}(\.|\d)*'`
echo Current iOS $key Version: $current

if [ ! -n "$version" ] ;then
    let "current++"
else
    current=$version
fi
sed -e "/$key/N" -e "s/\($key.*<string>\).*\(<\/string>\)/\1$current\2/" $infoPlist > $infoPlist.bak
mv -f $infoPlist.bak $infoPlist
echo Bump $key to $current
exit 0
