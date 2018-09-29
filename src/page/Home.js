/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Home extends Component {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="KRISSHOP" />
            <Content>
              {this.renderCategories()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for(var i=0; i<categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
      );
    }
    return cat;
  }

}

var categories = [
  {
    id: 1,
    title: 'INFLIGHT',
    image: 'https://dxcgf0a4ch4xd.cloudfront.net/prod/210594_POyovqUCA.jpg'
  },
  {
    id: 2,
    title: 'HOME DELIVERY',
    image: 'https://dxcgf0a4ch4xd.cloudfront.net/prod/164835_ceR8n1Ptg.png'
  },
  {
    id: 3,
    title: 'OFFICIAL STORES',
    image: 'https://dxcgf0a4ch4xd.cloudfront.net/prod/169274_5Dnxgpjbz.jpg'
  },
  {
    id: 4,
    title: 'CONCEPT STORES',
    image: 'https://dxcgf0a4ch4xd.cloudfront.net/prod/155967_rdeWTAdEU.jpg'
  }
];
