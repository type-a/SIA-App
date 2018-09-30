// React native and others libraries imports
import React, { Component } from 'react';
import { Alert, AsyncStorage,Image,StyleSheet } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import Colors from '../Colors';
import Timeline from 'react-native-timeline-listview'

export default class TrackOrder extends Component {
  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Order Processed', description: 'Your order has been processed in Krisshop'},
      {time: '10:45', title: 'Check In', description: 'Your order has been checked in the cargo area'},
      {time: '12:00', title: 'Inflight', description: 'Your order is safe and secured in the flight'},
      {time: '14:00', title: 'Arrival', description: 'Your order has arrived in your destination airport'},
      {time: '15:00', title: 'Order Arrived ', description: 'Your order has arrived in the seat belt'}
    ]
  }
  render()
  {
    var m=(String)(Math.floor((Math.random() * 100) + 1));
    var url="http://identicon-1132.appspot.com/ran";
    url=url+m;
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
        <View style={{flex: 1}}>
                    <Text>Hello your orders are here</Text>

                    <Image
          style={{width: 100, height: 100 , align: 'center', alignSelf:'center'}}
          source={{uri: url}}
         
        />
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'dot'}
        />
        <View>
        
        </View>
                </View>
          </Container>
      );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		paddingTop:65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});