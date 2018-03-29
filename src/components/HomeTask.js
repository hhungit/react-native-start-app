import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';

import ButtonSideMenu from './sidemenu/ButtonSideMenu';
import Note from './Note';

class HomeTask extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            noteArray : [
                {
                    img: require('../../imgs/avatar.png'),
                    note: 'Ngọc Trinh',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../../imgs/hot-girl-1.png'),
                    note: 'Thanh Hằng',
                    date: '27/03/2018',
                    location: 'Sài Gòn',
                },
                {
                    img: require('../../imgs/hot-girl-2.png'),
                    note: 'Võ Hoàng Yến',
                    date: '27/03/2018',
                    location: 'Đà Nẵng',
                },
                {
                    img: require('../../imgs/hot-girl-3.png'),
                    note: 'Angela Phương Trinh',
                    date: '27/03/2018',
                    location: 'Cần Thơ',
                },
                {
                    img: require('../../imgs/hot-girl-4.png'),
                    note: 'Vũ Hà Anh',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../../imgs/hot-girl-5.png'),
                    note: 'Phạm Hương',
                    date: '27/03/2018',
                    location: 'Hà Nội',
                },
                {
                    img: require('../../imgs/hot-girl-6.png'),
                    note: 'Kha Mỹ Vân',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../../imgs/hot-girl-7.png'),
                    note: 'Mai Phương Thúy',
                    date: '27/03/2018',
                    location: 'Cao Bằng',
                },
                {
                    img: require('../../imgs/hot-girl-8.png'),
                    note: 'Elly Trần',
                    date: '27/03/2018',
                    location: 'Sơn La',
                },
                {
                    img: require('../../imgs/hot-girl-9.png'),
                    note: 'Midu',
                    date: '27/03/2018',
                    location: 'Quảng Trị',
                },
        
                {
                    img: require('../../imgs/hot-girl-10.png'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
            ]
        }
    }
    static navigationOptions = ({navigation}) => ({
        title: 'Home',
        headerStyle: {
            height: 50,
        },
        headerTitleStyle: {
            fontSize: 18,
            marginLeft:  0,
        },
        headerLeft: <ButtonSideMenu navigation={navigation}/>,
        drawerLabel: 'Home',
        
       drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../imgs/icon/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    });
    render(){
        let notes = this.state.noteArray.map((val,key)=>{
            return <Note key={key} keyval={key} val ={val} navigation={this.props.navigation}/>
        })
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
            <View style={styles.header}>
          <Text style={styles.headerText}> Total of <Text style={{ fontWeight: 'bold'}}>20</Text> Items </Text>
            </View>
               <ScrollView  style={styles.scrollContainer}>
                {notes}
{/* <Image source={require('../../imgs/hot-girl-3.png')} /> */}
                </ScrollView>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
    }, 
    header: {
        height: 30,
        marginBottom: 5,
        justifyContent: "center",
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
      },
      headerText: {
        marginLeft:10,  
      },
    scrollContainer: {
        flex:1,
        marginBottom: 30,
      },
  });
export default HomeTask;