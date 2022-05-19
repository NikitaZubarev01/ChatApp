import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image } from 'react-native';

import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummy-data/ChatsRoom';

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.page}>
        <ChatRoomItem chatRoom={chatRoom1}/>
        <ChatRoomItem chatRoom={chatRoom2}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer:{
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  page:{
    backgroundColor: 'white',
  },
})