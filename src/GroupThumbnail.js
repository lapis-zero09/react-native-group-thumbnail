// @flow
import React, { Component } from 'react'
// import styled from 'styled-components/native'
// import { css } from 'styled-components'
// import { Thumbnail } from 'native-base'
import { Image, Text, View, StyleSheet } from 'react-native'
import { getOr } from 'lodash/fp'

type memberProps = {
  name: string | null,
  iconPath: string | null,
}

type Props = { members: Array<memberProps> }

const styles = StyleSheet.create({
  InitialIconContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  InitialIconText: {
    fontSize: 20,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 15,
    margin: 5,
  },
  Image: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
})

// const Center = css`
//   align-items: flex-end;
//   align-items: center;
// `

// const InitialIconContainer = styled.View`
//   height: 30px;
//   width: 30px;
//   border-radius: 15px;
//   ${Center};
//   background-color: red;
// `

// const InitialIconText = styled.View`
//   font-size: 10px;
//   color: #000000;
//   border-radius: 15px;
//   ${Center};
// `

// const InlineGroup = styled.View`
//   flex-direction: row;
//   align-items: flex-end;
//   align-items: center;
//   height: 38px;
//   width: 38px;
//   border-radius: 5px;
// `

const getMemberThumbList = (members: Array<memberProps>) => {
  const memberThumbList = members
    .filter(
      (member) =>
        (member.name || member.iconPath) &&
        (member.name !== '' || member.iconPath !== '') &&
        (member.name !== null || member.iconPath !== null),
    )
    .map(
      (member) =>
        member.iconPath !== null && member.iconPath !== '' ? member.iconPath : getOr('', ['name', '0'], member),
    )
  return memberThumbList.filter((m) => m && m !== null && m !== '')
}

export class GroupThumbnail extends Component<Props> {
  render() {
    console.log(this.props.members)
    const memberThumbList = getMemberThumbList(this.props.members)
    console.log(memberThumbList)

    if (memberThumbList === null) {
      return <View />
    }
    // if (memberThumbList.length === 1) {
    if (memberThumbList[0].length > 1) {
      return <Image style={[styles.Image]} source={{ uri: memberThumbList[0] }} />
    }
    return (
      <View style={[styles.InitialIconText]}>
        <Text style={[styles.InitialIconText]}>{memberThumbList[0]}</Text>
      </View>
    )
    // }
    // return <View />
  }
}
