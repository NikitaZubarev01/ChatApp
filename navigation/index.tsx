import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, View, Image, useWindowDimensions } from 'react-native';

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
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={ HomeScreen }
        //options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen}
        options={{ headerTitle: ChatRoomHeader, headerBackTitleVisible: false }}
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen}  
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
      />
      <Stack.Screen 
        name="ComfirmEmail" 
        component={ComfirmEmailScreen} 
      />
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen} 
      />
      <Stack.Screen 
        name="NewPassword" 
        component={NewPasswordScreen} 
      />
      <Stack.Screen 
        name="NotFound" 
        component={NotFoundScreen} 
        options={{ title: 'Oops!' }} 
      />
    </Stack.Navigator>
  );
}

const ChatRoomHeader = (props) => {

  const { width } = useWindowDimensions();

  return(
    <View style={{flexDirection:'row', justifyContent:'space-between', width: width - 50, marginLeft:'auto', padding: 10, alignItems:'center'}}>
      <Image 
        source={{uri: 'https://sun9-23.userapi.com/s/v1/ig2/vNrqVq2PwEsuhrMbODZn-RH5LbmG226bNumzeXSwzNPoRmBH9WtZ9u67kJfB6nF-AsrgcZwXC8WUhGUDFe9VDhbi.jpg?size=1437x2160&quality=96&type=album'}} 
        style={{ width:30, height:30, borderRadius: 30}}
      />
      <Text style={{flex:1,textAlign:'center',marginLeft: 10, fontWeight:'bold', }} >{props.children}</Text>
      <Feather name="camera" size={24} color="black" style={{marginHorizontal: 10,}} />
      <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10,}} />
    </View>
  )
} 
