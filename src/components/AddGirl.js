import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import ButtonSideMenu from './sidemenu/ButtonSideMenu';

class AddGirl extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Add Girl',
        headerStyle: {
            height: 50,
        },
        headerTitleStyle: {
            fontSize: 18,
            marginLeft:  0,
        },
        headerLeft: <ButtonSideMenu navigation={navigation}/>,
        drawerLabel: 'Add Girl',
        drawerIcon: ({ tintColor }) => (
       <Image
         source={require('../../imgs/icon/add.png')}
         style={[styles.icon, {tintColor: tintColor}]}
       />
     ),
    });
    render(){
        return(
            <View>
                <Text> Add </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
    },
});
export default AddGirl;