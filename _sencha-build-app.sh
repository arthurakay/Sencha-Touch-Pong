#!/bin/bash
rm -rf build/*

sencha build -p pong.jsb3 -d ./build

cp build.html ./build/index.html
cp pong.css ./build
cp app.js ./build

mkdir ./build/assets
cp assets/sencha-touch-2.0.0-gpl/resources/css/sencha-touch.css ./build/assets/
cp assets/sencha-touch-2.0.0-gpl/sencha-touch-all.js ./build/assets/

mkdir ./build/assets/sounds
cp -R assets/sounds ./build/assets

zip -r -X build/build.zip build