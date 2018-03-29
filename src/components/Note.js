import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

 
class Note extends PureComponent {

    render(){
       
       
     
        const { note,notetText,noteDelete,noteViewIcon,image,imageView } = styles;

        

        return(
            <TouchableOpacity key={this.props.keyval} onPress={()=> this.props.navigation.navigate('DetailsStack',{val: this.props.val })} style={note}>
                <View style={imageView}> 
                <Image style={image}  source={this.props.val.img} />
                </View>
                
                <View style={styles.checkbox}>
                </View>
                <View  style={{ marginLeft: 20, flex: 1, width: 350}}> 
                    <Text style={notetText}>{this.props.val.date}</Text>
                    <Text style={notetText}>{this.props.val.note}</Text>
                    <View style={{ position: 'absolute', paddingLeft:137,paddingTop: 4}}>  
                    <Image style={{ width: 12, height:12}}  source={require('../../imgs/icon/map.png')} />
                    </View>
                    <View style={{ position: 'absolute', paddingLeft:150}}>  
                    <Text >{this.props.val.location}</Text>
                    </View>
                  
                   
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    note: {
        position: 'relative',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        padding: 20,
        paddingLeft: 50,
        paddingRight: 100,
        borderRadius:5,
        elevation: 1,

    },
    imageView:{
        position: 'absolute',
        marginLeft: 10,
        left: 0,
        top: 10,
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
     },
     image:{
        
        width: 50,
        height: 50,
        borderRadius: 25,
      
     },
    checkbox:{
       position: 'absolute',
       marginLeft: 5,
       left: 0,
       top: 10,
       bottom: 10,
       justifyContent: 'center',
       alignItems: 'center',
    },
    noteText: {
        paddingLeft: 10,
        borderLeftWidth: 10,
        borderBottomColor: '#E91E63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 20,
    },
    noteViewIcon: {
        width: 15,
        height: 15,
    }
  });
export default Note;