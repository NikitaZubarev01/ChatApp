import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Message from "../components/Message";
import ChatRoomData from '../assets/dummy-data/Chats';
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {

    const route = useRoute();
    return(
        <View style={styles.page}>
            <FlatList 
                data={ChatRoomData.messages}
                renderItem={({item}) => <Message message={item} />}
                inverted
            />
            <MessageInput/>
        </View>
    );
};

const styles= StyleSheet.create ({
    page:{
        backgroundColor:'white',
        flex: 1,
    },
    
})