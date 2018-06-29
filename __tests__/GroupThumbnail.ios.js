import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import GroupThumbnail from '../src/GroupThumbnail'

const members = [{ name: '河野', iconPath: '' }]

// const members = [{ name: 'lapis-zero09', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' }]

it('renders correctly', () => {
  const tree = renderer.create(<GroupThumbnail small members={members} />).toJSON()
  expect(tree).toMatchSnapshot()
})
