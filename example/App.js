import React from 'react'
import { Body, Title, Right, Root, Content, Container, Header, List, ListItem, Left } from 'native-base'
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
      <GroupThumbnail members={rowData.members} />
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
          name: '1人アイコンあり',
          text: 'hello',
          time: '3:43pm',
          members: [{ name: 'lapis-zero09', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' }],
        },
        {
          name: '1人アイコン無し',
          text: 'hello',
          time: '3:43pm',
          members: [{ name: 'lapis-zero09' }],
        },
        {
          name: '2人グループアイコンあり',
          text: 'ur u crazy?',
          time: '1:15am',
          members: [
            { iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: 'lapis-zero09', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
          ],
        },
        {
          name: '2人グループアイコンなし',
          text: 'ur u crazy?',
          time: '1:15am',
          members: [{ name: 'michael', iconPath: '' }, { name: 'lapis-zero09', iconPath: '' }],
        },
        {
          name: '2人グループ左アイコン',
          text: 'ur u crazy?',
          time: '1:15am',
          members: [
            { name: 'michael', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: 'lapis-zero09', iconPath: '' },
          ],
        },
        {
          name: '2人グループ右アイコン',
          text: 'ur u crazy?',
          time: '1:15am',
          members: [
            { name: 'michael', iconPath: null },
            { name: 'lapis-zero09', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
          ],
        },
        {
          name: '3人groupアイコンあり',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
          members: [
            { name: '近藤', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: '斎藤', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: '佐藤', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
          ],
        },
        {
          name: '3人groupアイコン無し',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
          members: [{ name: '近藤' }, { name: '斎藤' }, { name: '佐藤' }],
        },
        {
          name: '3人groupアイコン左あり',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
          members: [
            { name: '近藤', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { name: '斎藤' },
            { name: '佐藤' },
          ],
        },

        {
          name: '3人groupアイコン左・右上あり',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
          members: [
            { name: '近藤', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { name: '斎藤', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: '佐藤' },
          ],
        },
        {
          name: '3人groupアイコン左・右下あり',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
          members: [
            { name: '近藤', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: '斎藤' },
            { name: '佐藤', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
          ],
        },
        {
          name: '3人groupアイコン右あり',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
          members: [
            { name: '近藤' },
            { name: '斎藤', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: '佐藤', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
          ],
        },
        {
          name: '3人groupアイコン右上あり',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
          members: [
            { name: '近藤' },
            { name: '斎藤', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: '佐藤' },
          ],
        },
        {
          name: '3人groupアイコン右下あり',
          text: 'this is sentence from fdsfさf',
          time: '10:15am',
          members: [
            { name: '近藤' },
            { name: '斎藤' },
            { name: '佐藤', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
          ],
        },
        {
          name: '4人グループアイコン',
          text: 'this is test sentence.',
          time: '2:01pm',
          members: [
            { name: null, iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
            { name: 'fdsfa', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { name: 'fdsfa', iconPath: 'https://avatars3.githubusercontent.com/u/9119338?s=460&v=4' },
          ],
        },
        {
          name: '4人グループアイコン無し',
          text: 'this is test sentence.',
          time: '2:01pm',
          members: [
            { name: 'test', iconPath: '' },
            { name: 'あ', iconPath: null },
            { name: '河野' },
            { name: 'fsafd' },
          ],
        },
        {
          name: '4人グループ右アイコン',
          text: 'this is test sentence.',
          time: '2:01pm',
          members: [
            { name: 'test', iconPath: '' },
            { name: 'あ', iconPath: null },
            { name: null, iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { name: '' },
            { name: 'fdsfa', iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { name: 'fsafd' },
          ],
        },
        {
          name: '4人グループ左アイコン',
          text: 'this is test sentence.',
          time: '2:01pm',
          members: [
            { name: null, iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { name: 'あ', iconPath: null },
            { iconPath: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4' },
            { name: 'fsafd' },
          ],
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
