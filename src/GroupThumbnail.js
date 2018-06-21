// @flow
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { backgroundColor: 'red' },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 10,
  },
})

export class GroupThumbnail extends Component<{}> {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.text]}>hello! from index.js</Text>
      </View>
    )
  }
}
