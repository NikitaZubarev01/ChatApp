import React from 'react';
import { Platform, StatusBar,View, Text } from 'react-native';

const HomeScreen = () => {
    return(
        <View style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,}}>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, Sweet home</Text>
        </View>
    )
}

export default HomeScreen;