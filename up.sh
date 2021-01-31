#!/usr/bin/env bash

export PATH=$PATH:~/.config/JetBrains/WebStorm2020.3/node/node-v14.15.0-linux-x64/bin

#npm install -g firebase-tools
#firebase login
#firebase init

npm run build
firebase deploy
npm run start
