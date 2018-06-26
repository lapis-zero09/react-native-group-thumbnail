import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { View } from 'react-native'

import ThumbnailBlock from './ThumbnailBlock'
import getMemberThumbList from './getMemberThumbList'

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

const InlineGroup = styled.View.attrs({
  size: (props) => (props.small ? 36 : props.large ? 80 : 56),
})`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background-color: rgb(153, 153, 153);
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: ${(props) => (props.square ? 0 : props.size / 2)}px;
`

export class GroupThumbnail extends Component<Props> {
  render() {
    const memberThumbList = getMemberThumbList(this.props.members)

    if (!memberThumbList || memberThumbList === null) {
      return <View />
    }
    if (memberThumbList.length === 0) {
      return (
        <InlineGroup {...this.props}>
          <ThumbnailBlock {...this.props} item="" options={[]} />
        </InlineGroup>
      )
    } else if (memberThumbList.length === 1) {
      return (
        <InlineGroup {...this.props}>
          <ThumbnailBlock {...this.props} item={memberThumbList[0]} options={[]} />
        </InlineGroup>
      )
    } else if (memberThumbList.length === 2) {
      return (
        <InlineGroup {...this.props}>
          <ThumbnailBlock {...this.props} item={memberThumbList[0]} options={['left']} />
          <ThumbnailBlock {...this.props} item={memberThumbList[1]} options={['right']} />
        </InlineGroup>
      )
    } else if (memberThumbList.length === 3) {
      return (
        <InlineGroup {...this.props}>
          <ThumbnailBlock {...this.props} item={memberThumbList[0]} options={['left']} />
          <View>
            <ThumbnailBlock {...this.props} item={memberThumbList[1]} options={['top', 'right']} />
            <ThumbnailBlock {...this.props} item={memberThumbList[2]} options={['bottom', 'right']} />
          </View>
        </InlineGroup>
      )
    }
    return (
      <InlineGroup {...this.props}>
        <View>
          <ThumbnailBlock {...this.props} item={memberThumbList[0]} options={['top', 'left']} />
          <ThumbnailBlock {...this.props} item={memberThumbList[2]} options={['bottom', 'left']} />
        </View>
        <View>
          <ThumbnailBlock {...this.props} item={memberThumbList[1]} options={['top', 'right']} />
          <ThumbnailBlock {...this.props} item={memberThumbList[3]} options={['bottom', 'right']} />
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
