import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StatusBar, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[passwordRepeat, setPasswordRepeat] = useState('');
    
    const navigation = useNavigation();

    const onRegisterPressed = () => {
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
              placeholder="Username" 
              value={username} 
              setValue={setUsername}
            />
            <CustomInput 
              placeholder="Email" 
              value={email} 
              setValue={setEmail}
            />
            <CustomInput 
              placeholder="Password" 
              value={password} 
              setValue={setPassword}
              secureTextEntry
            />
            <CustomInput 
              placeholder="Repeat Password" 
              value={passwordRepeat} 
              setValue={setPasswordRepeat}
              secureTextEntry
            />

            <CustomButton
                text="Register"
                onPress={onRegisterPressed}
            />
            <CustomButton
                text="Forgot password?"
                onPress={onForgotPasswordPress}
                type="TERTIARY"
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