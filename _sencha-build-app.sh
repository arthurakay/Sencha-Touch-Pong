#!/bin/bash
sencha build -p pong.jsb3 -d ./build

cp pong.css ./build/pong.css
cp -R assets ./build/assets