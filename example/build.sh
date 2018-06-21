#!/bin/sh

rm -rf ./node_modules/react-native-group-thumbnail
mkdir ./node_modules/react-native-group-thumbnail
rsync -v -a --exclude example --exclude node_modules ../ ./node_modules/react-native-group-thumbnail/