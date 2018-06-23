// @flow

export default function makeThumbStyle(props: []) {
  const thumbnailStyle = {
    small: {
      width: 36,
      height: 36,
      borderRadius: 18,
    },
    large: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
  }

  let theme = {
    width: 56,
    height: 56,
    borderRadius: 28,
  }

  _.map(props, (prop, propName) => {
    if (typeof prop !== 'object') {
      theme = { ...thumbnailStyle[propName] }
    }
  })

  if (props.square) {
    theme.borderRadius = 0
  }
  return theme
}
