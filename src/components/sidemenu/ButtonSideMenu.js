import React, { PureComponent } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

import { DrawerItems, SafeAreaView } from 'react-navigation';

const ButtonSideMenu = (props) => (
    <TouchableOpacity  style={{marginLeft:15}} onPress={()=>props.navigation.navigate('DrawerOpen')}>
        <Image source = {require('../../../imgs/icon/menu.png')} style={{ width: 20, height: 20,}}/>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ButtonSideMenu;