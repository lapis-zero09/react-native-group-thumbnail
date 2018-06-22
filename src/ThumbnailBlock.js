// @flow
import React from 'react'
import { Image } from 'react-native'
import { Thumbnail } from 'native-base'
import styled, { css } from 'styled-components'

type Props = {
  item: string,
  options: Array<string>,
}

const InitialTextFormat = css`
  color: #fff;
  font-weight: bold;
  align-self: center;
`

const InitialIconSingleText = styled.Text`
  margin-right: ${(p) => (p.right ? '3px' : '0.5px')};
  margin-left: ${(p) => (p.left ? '3px' : '0.5px')};
  margin-top: 50%;
  font-size: 16px;
  ${InitialTextFormat};
`

const InitialIconMultipleText = styled.Text`
  margin-bottom: ${(p) => (p.bottom ? '5px' : '1px')};
  margin-top: ${(p) => (p.top ? '5px' : '1px')};
  margin-right: ${(p) => (p.right ? '5px' : '1px')};
  margin-left: ${(p) => (p.left ? '5px' : '1px')};
  font-size: 14px;
  ${InitialTextFormat};
`

const SingleTextView = styled.View`
  background-color: rgb(153, 153, 153);
  width: 19px;
  height: 38px;
`

const MultipleTextView = styled.View`
  background-color: rgb(153, 153, 153);
  width: 19px;
  height: 19px;
`

const InitialIconText = styled.Text`
  margin: 3px;
  font-size: 25px;
  ${InitialTextFormat};
  border-radius: 19px;
`

const InitialIcon = styled.View`
  background-color: rgb(153, 153, 153);
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  border-radius: 19px;
`

const ThumbnailBlock = ({ item, options }: Props) => {
  if (item.length === 1) {
    // initial icon
    if (options.includes('left')) {
      // left content
      if (options.includes('top')) {
        // left top content
        return (
          <MultipleTextView>
            <InitialIconMultipleText top left>
              {item}
            </InitialIconMultipleText>
          </MultipleTextView>
        )
      } else if (options.includes('bottom')) {
        // left bottom
        return (
          <MultipleTextView>
            <InitialIconMultipleText bottom left>
              {item}
            </InitialIconMultipleText>
          </MultipleTextView>
        )
      }
      // left single content
      return (
        <SingleTextView>
          <InitialIconSingleText left>{item}</InitialIconSingleText>
        </SingleTextView>
      )
    } else if (options.includes('right')) {
      // right content
      if (options.includes('top')) {
        // right top content
        return (
          <MultipleTextView>
            <InitialIconMultipleText top right>
              {item}
            </InitialIconMultipleText>
          </MultipleTextView>
        )
      } else if (options.includes('bottom')) {
        // right bottom content
        return (
          <MultipleTextView>
            <InitialIconMultipleText bottom right>
              {item}
            </InitialIconMultipleText>
          </MultipleTextView>
        )
      }
      // right single content
      return (
        <SingleTextView>
          <InitialIconSingleText right>{item}</InitialIconSingleText>
        </SingleTextView>
      )
    }
    // initialIcon only
    return (
      <InitialIcon>
        <InitialIconText>{item}</InitialIconText>
      </InitialIcon>
    )
  }
  // thumbnail content
  if (options.includes('left')) {
    // left content
    if (options.includes('top')) {
      // top left content
      return (
        <Image left top source={{ uri: item }} style={{ width: 19, height: 19, marginBottom: 0.5, marginRight: 0.5 }} />
      )
    } else if (options.includes('bottom')) {
      // bottom left content
      return (
        <Image left bottom source={{ uri: item }} style={{ width: 19, height: 19, marginRight: 0.5, marginTop: 0.5 }} />
      )
    }
    // left single content
    return <Image left source={{ uri: item }} style={{ width: 19, height: 38, marginRight: 0.5 }} />
  } else if (options.includes('right')) {
    // right content
    if (options.includes('top')) {
      // top right content
      return (
        <Image right top source={{ uri: item }} style={{ width: 19, height: 19, marginBottom: 0.5, marginLeft: 0.5 }} />
      )
    } else if (options.includes('bottom')) {
      // bottom right content
      return (
        <Image right bottom source={{ uri: item }} style={{ width: 19, height: 19, marginLeft: 0.5, marginTop: 0.5 }} />
      )
    }
    // right single Image
    return <Image right source={{ uri: item }} style={{ width: 19, height: 38, marginLeft: 0.5 }} />
  }
  // thumbnail only
  return <Thumbnail small source={{ uri: item }} />
}

export default ThumbnailBlock
