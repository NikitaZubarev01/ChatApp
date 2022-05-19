import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StatusBar, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
    const[code, setCode] = useState('');

    const navigation = useNavigation();
    
    const onConfirmPressed = () => {
        console.warn("onConfirmPressed");

        navigation.navigate('Home');
    }

    const onForgotPasswordPress= () => {
        console.warn("onForgotPasswordPress");
    }

    const onResendPress = () => {
        console.warn("onResendPress");
    }

    const onSingInPress = () => {
      console.warn("onSingInPress");

      navigation.navigate('SignIn');
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>

            <CustomInput 
              placeholder="Enter your confimation code" 
              value={code} 
              setValue={setCode}
            />

            <CustomButton
                text="Confirm"
                onPress={onConfirmPressed}
            />
            <CustomButton
                text="Resend code"
                onPress={onResendPress}
                type="SECONDARY"
            />
            <CustomButton
                text="Back to Sing in"
                onPress={onSingInPress}
                type="TERTIARY"
            />

        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems:"center",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 20,
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#051C60',
        margin: 10,
    },
})

export default ConfirmEmailScreen