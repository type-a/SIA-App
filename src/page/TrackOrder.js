// React native and others libraries imports
import React, { Component } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import Colors from '../Colors';


export default class TrackOrder extends Component {
  render()
  {
    var left = (
        <Left style={{flex:1}}>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name="ios-close" size={38} style={{fontSize: 38}} />
          </Button>
        </Left>
      );
      return(
        <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} title="TRACK ORDER" />
                <View>
                    <Text>Hello your orders are here</Text>
                </View>
          </Container>
      );

  }
}