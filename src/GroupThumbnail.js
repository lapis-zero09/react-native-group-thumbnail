// @flow
import React, { Component } from 'react'
// import styled from 'styled-components'
import { Text, View, StyleSheet } from 'react-native'
import { getOr } from 'lodash/fp'

type memberProps = {
  name: string | null,
  iconPath: string | null,
}

type Props = { members: Array<memberProps> }

const styles = StyleSheet.create({
  container: { backgroundColor: 'red' },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 10,
  },
})

// const InlineGroup = styled.View`
//   flex-direction: row;
//   align-items: flex-end;
//   align-items: center;
//   height: 38px;
//   width: 38px;
//   border-radius: 5px;
// `

const getMemberIconList = (members: Array<memberProps>) => {
  const memberIconList = members
    .filter(
      (member) =>
        (member.name || member.iconPath) &&
        (member.name !== '' || member.iconPath !== '' || (member.name !== null || member.iconPath !== null)),
    )
    .map(
      (member) =>
        member.iconPath !== '' && member.iconPath !== null && member.iconPath[0] !== '/'
          ? member.iconPath
          : member.name.charAt(0),
      // getOr('', ['name', charAt(0)], member),
    )
  return memberIconList
}

export class GroupThumbnail extends Component<Props> {
  render() {
    const members = [
      { name: 'test', iconPath: '' },
      { name: 'あ', iconPath: null },
      { name: null, iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
      { iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
      { name: '' },
      // { name: 'fsafd' },
      {},
    ]
    console.log(getMemberIconList(members))
    return (
      <View style={[styles.container]}>
        <Text style={[styles.text]}>hello! from index.js</Text>
      </View>
    )
  }
}
