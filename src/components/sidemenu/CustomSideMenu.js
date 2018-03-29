import React, { PureComponent } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

import { DrawerItems, SafeAreaView,NavigationActions } from 'react-navigation';

const CustomSideMenu = (props) => (
    <View style={{flex:1}}>
    <View style={{height: 70,backgroundColor:'#87CEFF',shadowColor:'#87CEFF'}}> 
         <Image source = {require('../../../imgs/avatar.png')} style={{ position: 'absolute',
     justifyContent: 'center',
     alignItems:'center', padding: 10,
     top: 10,
     bottom: 5, left: 10,borderRadius:25, width: 45, height: 45,}}/>
     <Text style={{ fontSize: 16, paddingLeft: 60,marginTop:20}}> Grokhoang </Text>
    </View>
  <ScrollView >
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} 
        onItemPress = {
            ({ route, focused }) =>       
            {  
             
              props.navigation.navigate(route);
            }
            }
      />
    </SafeAreaView>
  </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CustomSideMenu;