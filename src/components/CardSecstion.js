import React from 'react';
import { View } from 'react-native';

const CardSecstion = (props) => {
    return (
        <View style={styles.container}>
         {props.children}
        </View>
    );
};

let styles = {
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSecstion;