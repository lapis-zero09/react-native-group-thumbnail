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
      <GroupThumbnail small members={rowData.members} />
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
      dataSource: require('./data/rooms.js'),
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
