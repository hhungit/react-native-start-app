import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    Image,
} from 'react-native';
import Card from './Card';
import CardSecstion from './CardSecstion';

class DetailTask extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        headerStyle: {
            height: 50,
        },
        headerTitleStyle: {
            fontSize: 10,
            marginLeft:  0,
        },
    
    }); 
    render(){
        const { 
            headerContentStyle, 
            thumbnailStyle, 
            thumbnailContainerStyle, 
            headerTextStyle, 
            imageStyle 
        } = styles;
        const { params } = this.props.navigation.state;
        return(
            <Card >
              <CardSecstion>
                    <View style={thumbnailContainerStyle}>
                       <Image 
                         style={thumbnailStyle}
                         source={ params.val.img} 
                         />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{params.val.note}</Text>
                        <Text style={headerTextStyle}>{params.val.location}</Text>
                    </View>
            </CardSecstion>
            <CardSecstion>
                <Image  
                    style={ imageStyle }
                  source={  params.val.img} />
            </CardSecstion>
            </Card>
        )
    }
}
let styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    }
};
export default DetailTask;