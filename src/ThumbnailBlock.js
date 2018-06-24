// @flow
import React from 'react'
import { Image } from 'react-native'
import styled, { css } from 'styled-components'

type Props = {
  item: string,
  options: Array<string>,
}

const Center = css`
  justify-content: center;
  align-items: center;
`

const InitialTextFormat = css`
  color: #fff;
  font-weight: bold;
  align-self: center;
`

// const ThumbnailText = styled.Text`
//   margin-right: ${(p) => (p.right ? '3px' : '0.5px')};
//   margin-left: ${(p) => (p.left ? '3px' : '0.5px')};
//   font-size: 14px;
//   ${InitialTextFormat};
// `

// const ThumbnailText = styled.Text`
//   margin-bottom: ${(p) => (p.bottom ? '5px' : '1px')};
//   margin-top: ${(p) => (p.top ? '5px' : '1px')};
//   margin-right: ${(p) => (p.right ? '5px' : '1px')};
//   margin-left: ${(p) => (p.left ? '5px' : '1px')};
//   font-size: 12px;
//   ${InitialTextFormat};
// `

// const InitialThumbText = styled.Text`
//   margin: 3px;
//   font-size: 25px;
//   ${InitialTextFormat};
//   border-radius: 18px;
// `

  // ${(props) => !props.single && css`margin-right: ${(props) => (props.right ? props.marginMaxSize : props.marginMinSize)}px`};
  // ${(props) => !props.single && css`margin-left: ${(props) => (props.left ? props.marginMaxSize : props.marginMinSize)}px`};

const ThumbnailText = styled.Text.attrs({
  size: (props) => (props.small ? 12 : (props.large ? 16 : 14)),
  marginMaxSize: (props) => (props.single ? 5 : 3),
  marginMinSize: (props) => (props.single ? 1 : 0.5),
})`
  color: #fff;
  align-self: center;
  font-weight: bold;
  font-size: ${(props) => (props.only ? props.size+10 :(props.single ? props.size+2 : props.size))}px;
  margin-bottom: ${(props) => (props.bottom ? props.marginMaxSize : props.marginMinSize)}px;
  margin-top: ${(props) => (props.top ? props.marginMaxSize : props.marginMinSize)}px;
  margin-right: ${(props) => (props.right ? props.marginMaxSize : props.marginMinSize)}px;
  margin-left: ${(props) => (props.left ? props.marginMaxSize : props.marginMinSize)}px;
`

const ThumbnailView = styled.View.attrs({
  size: (props) => (props.small ? 36 : (props.large ? 80 : 56)),
})`
  background-color: rgb(153, 153, 153);
  width: ${props => props.only ? props.size : props.size/2}px;
  height: ${props => props.only ? props.size : props.size/2}px;
  align-items: center;
  justify-content: center;
`

const Thumbnail = styled(Image).attrs({
  size: (props) => (props.small ? 36 : props.large ? 80 : 56),
})`
  width: ${props => props.single ? props.size : props.size/2}px;
  height: ${props => props.single ? props.size : props.size/2}px;
  margin-top: ${(p) => (p.top ? 0 : 1)}px;
  margin-bottom: ${(p) => (p.bottom ? -1 : 1)}px;
  margin-right: ${(p) => (p.right ? 0 : 1)}px;
  margin-left: ${(p) => (p.left ? -1 : 1)}px;
  ${props => props.only && Center};
`

const ThumbnailBlock = (props: any) => {
  if (props.item.length === 1) {
    // initial icon
    if (props.options.includes('left')) {
      // left content
      if (props.options.includes('top')) {
        // left top content
        return (
          <ThumbnailView {...props}>
            <ThumbnailText {...props} top left>
              {props.item}
            </ThumbnailText>
          </ThumbnailView>
        )
      } else if (props.options.includes('bottom')) {
        // left bottom
        return (
          <ThumbnailView {...props}>
            <ThumbnailText {...props} bottom left>
              {props.item}
            </ThumbnailText>
          </ThumbnailView>
        )
      }
      // left single content
      return (
        <ThumbnailView {...props} single>
          <ThumbnailText {...props} single left>{props.item}</ThumbnailText>
        </ThumbnailView>
      )
    } else if (props.options.includes('right')) {
      // right content
      if (props.options.includes('top')) {
        // right top content
        return (
          <ThumbnailView {...props}>
            <ThumbnailText {...props} top right>
              {props.item}
            </ThumbnailText>
          </ThumbnailView>
        )
      } else if (props.options.includes('bottom')) {
        // right bottom content
        return (
          <ThumbnailView {...props}>
            <ThumbnailText {...props} bottom right>
              {props.item}
            </ThumbnailText>
          </ThumbnailView>
        )
      }
      // right single content
      return (
        <ThumbnailView {...props} single>
          <ThumbnailText {...props} single right>{props.item}</ThumbnailText>
        </ThumbnailView>
      )
    }
    // initialThumb only
    return (
      <ThumbnailView {...props} only>
        <ThumbnailText {...props} only>{props.item}</ThumbnailText>
      </ThumbnailView>
    )
  }
  // thumbnail content
  if (props.options.includes('left')) {
    // left content
    if (props.options.includes('top')) {
      // top left content
      return <Thumbnail {...props} left top source={{ uri: props.item }} />
    } else if (props.options.includes('bottom')) {
      // bottom left content
      return <Thumbnail {...props} left bottom source={{ uri: props.item }} />
    }
    // left single content
    return <Thumbnail {...props} single left source={{ uri: props.item }} />
  } else if (props.options.includes('right')) {
    // right content
    if (props.options.includes('top')) {
      // top right content
      return <Thumbnail {...props} right top source={{ uri: props.item }} />
    } else if (props.options.includes('bottom')) {
      // bottom right content
      return <Thumbnail {...props} right bottom source={{ uri: props.item }} />
    }
    // right single Image
    return <Thumbnail {...props} single right source={{ uri: props.item }} />
  }
  // thumbnail only
  console.log(props)
  return (<Thumbnail single only {...props} source={{ uri: props.item }} />)
}

export default ThumbnailBlock
