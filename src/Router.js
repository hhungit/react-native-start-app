import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

import { StackNavigator, TabNavigator, DrawerNavigator,TabBarBottom } from 'react-navigation';

import HomeTask from './components/HomeTask';
import Notifications from './components/Notifications';
import DetailTask from './components/DetailTask';
import AddGirl from './components/AddGirl';
import CustomSideMenu from './components/sidemenu/CustomSideMenu';

const HomeStack = StackNavigator({
  HomeStack: {screen: HomeTask},
  DetailsStack: {screen: DetailTask},
});

const NotificationStack = StackNavigator({
  NotificationStack : {screen: Notifications},
  DetailsStack: {screen: DetailTask},
});
const AddGirlStack = StackNavigator({
  AddGirlStack : {screen: AddGirl}, 
});
const TabApp = TabNavigator({
  HomeTab: {screen: HomeStack},
  NotifcationTab: {screen: NotificationStack},
},{
 // order: ["Home","Notifcation"],
  navigationOptions: ({navigation }) => ({
    tabBarIcon: ({focused,tintColor}) => {
        const { routeName } = navigation.state;
        let urlImage;
        console.log('t'+urlImage);
        if(routeName==='Home'){
          urlImage = require('../imgs/icon/home.png');
        }else if(routeName==='Notifcation'){
          urlImage = require('../imgs/icon/notifcation.png');
        }
        return <Image source={urlImage} style={{width:20,height:20}}/>
    }
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel : false,
    style:  { height: 30  },
    activeBackgroundColor: '#B0E2FF',
    inactiveTintColor: 'gray',
  }
});

const TabApp2 = TabNavigator({
  Notifcation: {screen: NotificationStack},
 
},{
 // order: ["Home","Notifcation"],
  navigationOptions: ({navigation }) => ({
    tabBarIcon: ({focused,tintColor}) => {
        const { routeName } = navigation.state;
        let urlImage;
        console.log('t'+urlImage);
        if(routeName==='Home'){
          urlImage = require('../imgs/icon/home.png');
        }else if(routeName==='Notifcation'){
          urlImage = require('../imgs/icon/notifcation.png');
        }
        return <Image source={urlImage} style={{width:20,height:20}}/>
    }
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel : false,
    style:  { height: 30  },
    activeBackgroundColor: '#B0E2FF',
    inactiveTintColor: 'gray',
  }
});

 
 
const Router = DrawerNavigator({
  Home: {
    screen: TabApp 
   },
  Notifcation: {screen: TabApp2,
    navigationOptions: {
      drawerLabel: 'Notifications', drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../imgs/icon/notifcation.png')}
          style={{width: 20,height: 20, tintColor: tintColor}}
        />
      )
    }
  },
  MyAddGirl: {screen:AddGirlStack}
},{
  contentComponent: props=> <CustomSideMenu {...props} />,
  contentOptions: {
    labelStyle: {
      fontSize:15,
      marginLeft: 0,
    },
    itemStyle: {
      height:50,
      borderBottomWidth: 0.5,
    },
  }
});

export default Router;