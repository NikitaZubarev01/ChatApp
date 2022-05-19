import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { 
    Platform, 
    StatusBar, 
    Text, 
    View, 
    Image, 
    StyleSheet, 
    useWindowDimensions, 
    ScrollView 
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    
    const navigation = useNavigation();
    
    const onSingInPressed = () => {
        //console.warn("Sing in");
        // Validate user
        
        navigation.navigate('Home');
    }

    const onForgotPasswordPress= () => {
        //console.warn("onForgotPasswordPress");

        navigation.navigate('ForgotPassword');
    }

    const onSingUpPress = () => {
        console.warn("onSingUpPress");

        navigation.navigate('SignUp');
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
              source ={Logo} 
              style={[styles.logo, {height: height * 0.3}]} 
              resizeMode="contain"
              />

            <CustomInput 
              placeholder="Username" 
              value={username} 
              setValue={setUsername}
              />
            <CustomInput 
              placeholder="Password" 
              value={password} 
              setValue={setPassword}
              secureTextEntry
              />

            <CustomButton
                text="Sing in"
                onPress={onSingInPressed}
            />
            <CustomButton
                text="Forgot password?"
                onPress={onForgotPasswordPress}
                type="TERTIARY"
            />  
             <CustomButton
                text="Dont have an account? Create one"
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
})

export default SignInScreen