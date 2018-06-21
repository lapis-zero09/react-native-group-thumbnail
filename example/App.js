import React from 'react'
import {
  Body,
  Title,
  Right,
  Root,
  Content,
  Container,
  Header,
  List,
  ListItem,
  Left,
  Thumbnail,
  View,
} from 'native-base'
import { StyleSheet, Text } from 'react-native'
import { GroupThumbnail } from 'react-native-group-thumbnail'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const ListItemComponent = (rowData) => (
  <ListItem avatar style={[styles.container]}>
    <Left>
      <GroupThumbnail members={[{ name: rowData.name, iconPath: rowData.iconPath }]} />
      {/* <Thumbnail small source={{ uri: rowData.iconPath }} /> */}
    </Left>
    <Body>
      <Text>{rowData.name}</Text>
      <Text note>{rowData.text}</Text>
    </Body>
    <Right>
      <Text note>{rowData.time}</Text>
    </Right>
  </ListItem>
)

export default class App extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      dataSource: [
        {
          iconPath: '',
          name: 'lapis-zero09',
          text: 'hello',
          time: '3:43pm',
        },
        {
          iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4',
          name: '',
          text: 'this is test sentence.',
          time: '2:01pm',
        },
        {
          iconPath: '',
          name: 'Tom Michel',
          text: 'Are u crazy?',
          time: '10:15am',
        },
        {
          iconPath: '',
          name: '河野　晋策',
          text: 'あああああああああああaaaaaaaaaaaaaaaaaaaaaaaaaaaあああああ',
          time: '10:15am',
        },
        {
          iconPath: '',
          name: '渡辺',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
        },
      ],
      members: [
        { name: 'test', iconPath: '' },
        { name: 'あ', iconPath: null },
        { name: null, iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
        { iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
        { name: '' },
        { name: 'fdsfa', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
        { name: 'fsafd' },
        {},
      ],
    }
  }

  render() {
    return (
      <Root>
        <Container>
          <Header>
            <Body>
              <Title>Header</Title>
            </Body>
          </Header>
          <Content>
            <List dataArray={this.state.dataSource} renderRow={(rowData) => <ListItemComponent {...rowData} />} />
          </Content>
        </Container>
      </Root>
    )
  }
}
