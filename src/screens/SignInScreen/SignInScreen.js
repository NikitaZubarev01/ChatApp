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
    ScrollView,
    Alert,
    TextInput, 
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useForm, Controller } from 'react-hook-form';

const SignInScreen = () => {
    const[loading, setLoading] = useState(false);

    const {height} = useWindowDimensions();
    
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors},} = useForm();

    
    const onSingInPressed = (data) => {
       {/* if (loading) {
            return;
        }

        setLoading(true);

        try{
        const response = await Auth.singIn(data.username, data.password);
        console.log(response);
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);
    */}
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
              name="username" 
              placeholder="Username" 
              control={control}
              rules={{
                  required: 'Username is required', 
                  minLength:{value:4, message:'Username should be minimum 4 characters'},
                  maxLength:{value:12, message:'Username should be max 12 characters'}
                }}
            />
            <CustomInput 
              name="password"
              placeholder="Password"
              secureTextEntry
              control={control}
              rules={{required: 'Password is required', minLength:{value:8, message:'Password should be minimum 8 characters '}}}
            /> 
            <CustomButton
                text={loading ? "Loading..." : "Sing in"}
                onPress={handleSubmit(onSingInPressed)}
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