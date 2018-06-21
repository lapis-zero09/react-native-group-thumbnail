import React from 'react'
import { Body, Title, Right, Root, Content, Container, Header, List, ListItem, Left, Thumbnail } from 'native-base'
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
      <Thumbnail small source={{ uri: rowData.url }} />
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
          url: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4',
          name: 'lapis-zero09',
          text: 'hello',
          time: '3:43pm',
        },
        {
          url: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4',
          name: 'name2',
          text: 'this is sentence from name2',
          time: '2:01pm',
        },
        {
          url: 'https://avatars3.githubusercontent.com/u/12763048?s=460&v=4',
          name: 'name3',
          text: 'this is sentence from name3',
          time: '10:15am',
        },
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
          <GroupThumbnail />
        </Container>
      </Root>
    )
  }
}
