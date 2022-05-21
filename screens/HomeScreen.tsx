import React from 'react';
import { Platform, StatusBar, StyleSheet, View, FlatList } from 'react-native';

import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummy-data/ChatsRoom';

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];
const chatRoom3 = chatRoomsData[2];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
      <View style={styles.page}>
        <FlatList 
          data={chatRoomsData}
          renderItem={({ item }) => <ChatRoomItem chatRoom={item}/> }
          showsVerticalScrollIndicator={false}
        />
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