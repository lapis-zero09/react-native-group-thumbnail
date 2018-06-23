// @flow
import React from 'react'
import { Image } from 'react-native'
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

const InitialThumbSingleText = styled.Text`
  margin-right: ${(p) => (p.right ? '3px' : '0.5px')};
  margin-left: ${(p) => (p.left ? '3px' : '0.5px')};
  margin-top: 50%;
  font-size: 14px;
  ${InitialTextFormat};
`

const InitialThumbMultipleText = styled.Text`
  margin-bottom: ${(p) => (p.bottom ? '5px' : '1px')};
  margin-top: ${(p) => (p.top ? '5px' : '1px')};
  margin-right: ${(p) => (p.right ? '5px' : '1px')};
  margin-left: ${(p) => (p.left ? '5px' : '1px')};
  font-size: 12px;
  ${InitialTextFormat};
`

const InitialThumbSingle = styled(Image)`
  width: 20px;
  height: 39px;
  margin-right: ${(p) => (p.right ? '0px' : '1px')};
  margin-left: ${(p) => (p.left ? '-1px' : '1px')};
`

const InitialThumbMultiple = styled(Image)`
  width: 20px;
  height: 20px;
  margin-top: ${(p) => (p.top ? '0px' : '1px')};
  margin-bottom: ${(p) => (p.bottom ? '-1px' : '1px')};
  margin-right: ${(p) => (p.right ? '0px' : '1px')};
  margin-left: ${(p) => (p.left ? '-1px' : '1px')};
`

const SingleTextView = styled.View`
  background-color: rgba(0, 0, 0, 0);
  width: 19px;
  height: 38px;
`

const MultipleTextView = styled.View`
  background-color: rgba(0, 0, 0, 0);
  width: 19px;
  height: 19px;
  justify-content: space-evenly;
  align-items: center;
`

const InitialThumbText = styled.Text`
  margin: 3px;
  font-size: 25px;
  ${InitialTextFormat};
  border-radius: 19px;
`

const InitialThumb = styled.View`
  background-color: rgb(153, 153, 153);
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  border-radius: 19px;
`

const Thumb = styled(Image)`
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
            <InitialThumbMultipleText top left>
              {item}
            </InitialThumbMultipleText>
          </MultipleTextView>
        )
      } else if (options.includes('bottom')) {
        // left bottom
        return (
          <MultipleTextView>
            <InitialThumbMultipleText bottom left>
              {item}
            </InitialThumbMultipleText>
          </MultipleTextView>
        )
      }
      // left single content
      return (
        <SingleTextView>
          <InitialThumbSingleText left>{item}</InitialThumbSingleText>
        </SingleTextView>
      )
    } else if (options.includes('right')) {
      // right content
      if (options.includes('top')) {
        // right top content
        return (
          <MultipleTextView>
            <InitialThumbMultipleText top right>
              {item}
            </InitialThumbMultipleText>
          </MultipleTextView>
        )
      } else if (options.includes('bottom')) {
        // right bottom content
        return (
          <MultipleTextView>
            <InitialThumbMultipleText bottom right>
              {item}
            </InitialThumbMultipleText>
          </MultipleTextView>
        )
      }
      // right single content
      return (
        <SingleTextView>
          <InitialThumbSingleText right>{item}</InitialThumbSingleText>
        </SingleTextView>
      )
    }
    // initialThumb only
    return (
      <InitialThumb>
        <InitialThumbText>{item}</InitialThumbText>
      </InitialThumb>
    )
  }
  // thumbnail content
  if (options.includes('left')) {
    // left content
    if (options.includes('top')) {
      // top left content
      return <InitialThumbMultiple left top source={{ uri: item }} />
    } else if (options.includes('bottom')) {
      // bottom left content
      return <InitialThumbMultiple left bottom source={{ uri: item }} />
    }
    // left single content
    return <InitialThumbSingle left source={{ uri: item }} />
  } else if (options.includes('right')) {
    // right content
    if (options.includes('top')) {
      // top right content
      return <InitialThumbMultiple right top source={{ uri: item }} />
    } else if (options.includes('bottom')) {
      // bottom right content
      return <InitialThumbMultiple right bottom source={{ uri: item }} />
    }
    // right single Image
    return <InitialThumbSingle right source={{ uri: item }} />
  }
  // thumbnail only
  return <Thumb source={{ uri: item }} />
}

export default ThumbnailBlock
