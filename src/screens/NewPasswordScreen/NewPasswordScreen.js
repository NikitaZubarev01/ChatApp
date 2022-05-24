import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StatusBar, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const NewPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();
    
    const onSubmitPressed = (data) => {
        console.warn("onSendPressed");

        navigation.navigate('Home')
    }

    const onResendPress = () => {
        console.warn("onResendPress");
    }

    const onSingInPress = () => {
      console.warn("onSingInPress");

      navigation.navigate('SignIn')
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>

            <CustomInput 
              name="code"
              control={control}
              placeholder="Code" 
              rules={{
                  required:'Code is required'
              }}
            />
            <CustomInput 
              name="password"
              control={control}
              secureTextEntry
              placeholder="Enter your new password"
              rules={{
                required: 'Password is required', 
                minLength:{value:8, message:'Password should be minimum 8 characters '}
            }}
            />

            <CustomButton
                text="Submit"
                onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen