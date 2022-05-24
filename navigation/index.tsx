import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  ColorSchemeName, 
  Pressable, 
  Text, 
  View, 
  Image, 
  useWindowDimensions, 
  StyleSheet, 
  ActivityIndicator, 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Auth, Hub } from 'aws-amplify';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import SignInScreen from '../src/screens/SignInScreen';
import SignUpScreen from '../src/screens/SignUpScreen';
import ComfirmEmailScreen from '../src/screens/ComfirmEmailScreen';
import ForgotPasswordScreen from '../src/screens/ForgotPasswordScreen';
import NewPasswordScreen from '../src/screens/NewPasswordScreen';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [user,setUser] = useState(undefined);
  
  const checkUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
    setUser(authUser);
  }
  
  useEffect(() => {
    checkUser();
  }, []);

  // if (user == undefined){
  //   return(
  //     <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
  //       <ActivityIndicator />
  //     </View>
  //   )
  // }


  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      {user ? (
        <>
        <Stack.Screen 
        name="Home" 
        component={ HomeScreen }
        options={{ 
          headerTitle: props => <HomeHeader/>}}
        />
        <Stack.Screen 
          name="ChatRoom" 
          component={ChatRoomScreen}
          options={{ 
            headerTitle: ChatRoomHeader, 
            headerBackTitleVisible: false,
          }}
        />
      </>
      ) : (
        <>
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen}
          options={{ headerShown:false}} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen}
          options={{ headerShown:false}} 
        />
        <Stack.Screen 
          name="ComfirmEmail" 
          component={ComfirmEmailScreen}
          options={{ headerShown:false}}  
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen}
          options={{ headerShown:false}}  
        />
        <Stack.Screen 
          name="NewPassword" 
          component={NewPasswordScreen} 
          options={{ headerShown:false}} 
        />
        </>
        )}
        
        <Stack.Screen 
          name="NotFound" 
          component={NotFoundScreen} 
          options={{ title: 'Oops!' }} 
        />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {

  const{width} = useWindowDimensions();

  return(
    <View 
      style={{
        flexDirection:'row', 
        justifyContent:'space-between',
        width, 
        right: 5,
        alignItems:'center'}}>
      <Image 
        source={{uri: 'https://sun9-23.userapi.com/s/v1/ig2/vNrqVq2PwEsuhrMbODZn-RH5LbmG226bNumzeXSwzNPoRmBH9WtZ9u67kJfB6nF-AsrgcZwXC8WUhGUDFe9VDhbi.jpg?size=1437x2160&quality=96&type=album' }}
        style={{width:35,height:35,borderRadius:30 }}
      />
      <Text style={{flex: 1, textAlign:'center', marginLeft: 40,fontWeight:'bold'}}>Home</Text>
      <View style={{flexDirection:'row', paddingEnd:15}}>
        <Feather name="camera" size={24} color="black" style={{marginHorizontal: 10,}} />
        <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10,}} />
      </View>
    </View>
  )
} 
const ChatRoomHeader = (props) => {

  const{width} = useWindowDimensions();

  return(
    <View 
      style={{
        flexDirection:'row', 
        justifyContent:'space-between',
        width : width - 30,
        right:30,
        padding: 10,
        alignItems:'center'}}>
      <Image 
        source={{uri: 'https://sun9-23.userapi.com/s/v1/ig2/vNrqVq2PwEsuhrMbODZn-RH5LbmG226bNumzeXSwzNPoRmBH9WtZ9u67kJfB6nF-AsrgcZwXC8WUhGUDFe9VDhbi.jpg?size=1437x2160&quality=96&type=album' }}
        style={{width:35,height:35,borderRadius:30 }}
      />
      <Text style={{flex: 1, marginLeft: 10,fontWeight:'bold'}}>{props.children}</Text>
      <View style={{flexDirection:'row', paddingEnd:10}}>
        <Feather name="camera" size={24} color="black" style={{marginHorizontal: 10,}} />
        <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10,}} />
      </View>
    </View>
  )
} 
