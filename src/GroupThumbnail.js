// @flow
import React, { Component } from 'react'
import styled from 'styled-components/native'
import { css } from 'styled-components'
import { View, StyleSheet } from 'react-native'

import ThumbnailBlock from './ThumbnailBlock'
import getMemberThumbList from './getMemberThumbList'

type memberProps = {
  name: string | null,
  iconPath: string | null,
}

type Props = { members: Array<memberProps> }

// const styles = StyleSheet.create({
//   InitialIconContainer: {
//     height: 30,
//     width: 30,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'red',
//   },
//   InitialIconText: {
//     fontSize: 20,
//     color: '#000000',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     borderRadius: 15,
//     margin: 5,
//   },
//   Image: {
//     height: 30,
//     width: 30,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'red',
//   },
// })

const InlineGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background-color: rgb(153, 153, 153);
  height: 38px;
  width: 38px;
  border-radius: 19px;
`

export class GroupThumbnail extends Component<Props> {
  render() {
    const memberThumbList = getMemberThumbList(this.props.members)

    if (!memberThumbList || memberThumbList === null) {
      return <View />
    }
    if (memberThumbList.length === 0) {
      return <ThumbnailBlock item="" options={[]} />
    } else if (memberThumbList.length === 1) {
      return <ThumbnailBlock item={memberThumbList[0]} options={[]} />
    } else if (memberThumbList.length === 2) {
      return (
        <InlineGroup>
          <ThumbnailBlock item={memberThumbList[0]} options={['left']} />
          <ThumbnailBlock item={memberThumbList[1]} options={['right']} />
        </InlineGroup>
      )
    } else if (memberThumbList.length === 3) {
      return (
        <InlineGroup>
          <ThumbnailBlock item={memberThumbList[0]} options={['left']} />
          <View>
            <ThumbnailBlock item={memberThumbList[1]} options={['top', 'right']} />
            <ThumbnailBlock item={memberThumbList[2]} options={['bottom', 'right']} />
          </View>
        </InlineGroup>
      )
    }
    return (
      <InlineGroup>
        <View>
          <ThumbnailBlock item={memberThumbList[0]} options={['top', 'left']} />
          <ThumbnailBlock item={memberThumbList[2]} options={['bottom', 'left']} />
        </View>
        <View>
          <ThumbnailBlock item={memberThumbList[1]} options={['top', 'right']} />
          <ThumbnailBlock item={memberThumbList[3]} options={['bottom', 'right']} />
        </View>
      </InlineGroup>
    )
  }
}
