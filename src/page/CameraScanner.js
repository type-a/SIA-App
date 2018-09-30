// React native and others libraries imports
import React, { Component } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import Colors from '../Colors';
import BarcodeScanner from 'react-native-barcode-scanner-google';

export default class CameraScanner extends Component {
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
        <Navbar left={left} title="SCAN IT" />
        <View style={{flex: 1}}>
          <BarcodeScanner
              style={{flex: 1}}
              onBarcodeRead={({data, type}) => {
                  alert("Your check in is successful , your order is checked in  you can check in Track order section for seeing the pattern !");
              }}
          />
      </View>
          </Container>
      );

  }
}