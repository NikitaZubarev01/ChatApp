import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StatusBar, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onRegisterPressed = (data) => {
        console.warn("onRegisterPressed");

        navigation.navigate('ComfirmEmail');
    }

    const onForgotPasswordPress= () => {
        console.warn("onForgotPasswordPress");
    }

    const onSingUpPress = () => {
        console.warn("onSingUpPress");

        navigation.navigate('SignIn')
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>

            <CustomInput 
              name="username"
              control={control}
              placeholder="Username" 
              rules={{
                required: 'Username is required',
                minLength:{value:4, message:'Username should be minimum 4 characters'},
                maxLength:{value:12, message:'Username should be max 12 characters'}
              }}
            />
            <CustomInput 
              name="email"
              control={control}
              placeholder="Email"
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message:'Email is invalid'},
              }}
            />
            <CustomInput 
              name="password"
              control={control}
              placeholder="Password" 
              secureTextEntry
              rules={{
                required: 'Password is required', 
                minLength:{value:8, message:'Password should be minimum 8 characters '}}}
            />
            <CustomInput 
              name="repeat-password"
              control={control}
              placeholder="Repeat Password" 
              secureTextEntry
              rules={{
                validate: value => 
                value == pwd || 'Password do not match',
              }}
            />

            <CustomButton
                text="Register"
                onPress={handleSubmit(onRegisterPressed)}
            />
             <CustomButton
                text="Have an account? Sign in"
                onPress={onSingUpPress}
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

export default SignUpScreen