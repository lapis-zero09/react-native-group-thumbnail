import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import GroupThumbnail from '../src/GroupThumbnail'

const data = require('./data.js')

it('renders correctly', () => {
  const tree = renderer.create(<GroupThumbnail small members={data[0].members} />).toJSON()
  expect(tree).toMatchSnapshot()
})
