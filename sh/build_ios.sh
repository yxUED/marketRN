#!/bin/bash

PROJECT="fox.xcodeproj"
DIST="../dist/ios/"
RESIGNING_PROFILE="./fox_app_store.mobileprovision"
SIGNING_IDENTITY="iPhone Distribution: SoEasy Internet Finance Group Co., Ltd. (Q67TW3T8PL)"

cd ios
ipa build -p $PROJECT -d $DIST -s fox -c Release -m $RESIGNING_PROFILE -i $SIGNING_IDENTITY --ipa fox.ipa --clean
