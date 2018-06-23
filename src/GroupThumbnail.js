// @flow
import React, { Component } from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { View, StyleSheet } from 'react-native'

import ThumbnailBlock from './ThumbnailBlock'
import getMemberThumbList from './getMemberThumbList'
import makeThumbStyle from './makeThumbStyle'

type memberProps = {
  name: string | null,
  iconPath: string | null,
}

type Props = {
  members: Array<memberProps>,
  style: any,
  square: boolean,
  circular: boolean,
  size: number,
}

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
  height: 36px;
  width: 36px;
  border-radius: 18px;
`

export class GroupThumbnail extends Component<Props> {
  render() {
    const memberThumbList = getMemberThumbList(this.props.members)
    const thumbStyle = makeThumbStyle(this.props)
    // console.log('------------after--------------')
    // console.log(this.props)
    // console.log(makeThumbStyle(this.props))
    // console.log('-------------before-------------')

    if (!memberThumbList || memberThumbList === null) {
      return <View />
    }
    if (memberThumbList.length === 0) {
      return (
        <InlineGroup style={thumbStyle}>
          <ThumbnailBlock item="" options={[]} />
        </InlineGroup>
      )
    } else if (memberThumbList.length === 1) {
      return (
        <InlineGroup style={thumbStyle}>
          <ThumbnailBlock item={memberThumbList[0]} options={[]} />
        </InlineGroup>
      )
    } else if (memberThumbList.length === 2) {
      return (
        <InlineGroup style={thumbStyle}>
          <ThumbnailBlock item={memberThumbList[0]} options={['left']} />
          <ThumbnailBlock item={memberThumbList[1]} options={['right']} />
        </InlineGroup>
      )
    } else if (memberThumbList.length === 3) {
      return (
        <InlineGroup style={thumbStyle}>
          <ThumbnailBlock item={memberThumbList[0]} options={['left']} />
          <View>
            <ThumbnailBlock item={memberThumbList[1]} options={['top', 'right']} />
            <ThumbnailBlock item={memberThumbList[2]} options={['bottom', 'right']} />
          </View>
        </InlineGroup>
      )
    }
    return (
      <InlineGroup style={thumbStyle}>
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

GroupThumbnail.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  square: PropTypes.bool,
  circular: PropTypes.bool,
  size: PropTypes.number,
}
