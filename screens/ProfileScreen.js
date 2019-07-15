import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button ,Title} from 'native-base';
import Icon from 'react-native-fa-icons';
export default class ProfileScreen extends Component {
  render() {
    return (

        
        
      <Container>
           <Header>
           {<Icon name='arrow-left' style={{marginLeft:10, fontSize: 20, color: 'black'  }} onPress={() => this.props.navigation.navigate('Home')}/>}
 
          <Left
          
           />
          <Body>
          
            <Title></Title>
          </Body>
          <Right />
        </Header>
        
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../pics/rk.jpg')} />
              </Left>
              <Body>
                <Text>Rajneesh Kumar</Text>
                <Text note numberOfLines={1}>Studying In Computer Science . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View Profile</Text>
                </Button>
              </Right>
            </ListItem>
          </List>


           <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../pics/dish.jpg')} />
              </Left>
              <Body>
                <Text>Ajay Verma</Text>
                <Text note numberOfLines={1}>Studying In BSC . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View Profile</Text>
                </Button>
              </Right>
            </ListItem>
          </List>




<List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../pics/exam1.jpg')} />
              </Left>
              <Body>
                <Text>Rahul Verma</Text>
                <Text note numberOfLines={1}>Self employment . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View Profile</Text>
                </Button>
              </Right>
            </ListItem>
          </List>



          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../pics/dish5.jpg')} />
              </Left>
              <Body>
                <Text>Rohit Singh</Text>
                <Text note numberOfLines={1}>Mechanical Engineer.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View Profile</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../pics/dish4.jpg')} />
              </Left>
              <Body>
                <Text>Poonam Kaith</Text>
                <Text note numberOfLines={1}>Computer Science Engineer</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View Profile</Text>
                </Button>
              </Right>
            </ListItem>
          </List>




        </Content>
      </Container>
    
    );
  }
}