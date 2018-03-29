import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import ButtonSideMenu from './sidemenu/ButtonSideMenu';

class Notifications extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        title: 'Notifications',
        headerStyle: {
            height: 50,
        },
        headerTitleStyle: {
            fontSize: 18,
            marginLeft:  0,
        },
        headerLeft: <ButtonSideMenu navigation={navigation}/>,
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
       <Image
         source={require('../../imgs/icon/notifcation.png')}
         style={[styles.icon, {tintColor: tintColor}]}
       />
     ),
    });
    render(){
        return(
            <View>
                 <Image source={require('../../imgs/hot-girl-4.png')} style={{width:400}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
    },
});
export default Notifications;