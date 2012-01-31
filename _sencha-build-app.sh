#!/bin/bash
cp designer.js app.js
sencha build -p pong.jsb3 -d ./build
rm app.js

cp pong.css ./build/pong.css