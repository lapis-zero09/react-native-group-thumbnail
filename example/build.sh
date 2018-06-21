#!/bin/sh

rm -rf ./node_modules/react-native-group-thumbnail
mkdir ./node_modules/react-native-group-thumbnail
rsync -v -a --exclude example --exclude node_modules --exclude .git --exclude flow-typed --exclude .DS_Store --exclude yarn-error.log ../ ./node_modules/react-native-group-thumbnail/