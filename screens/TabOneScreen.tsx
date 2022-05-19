import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.maincontainer}>
    <View style={styles.container}>
      <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image} />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Hola Hola coca cola</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer:{
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container:{
    flexDirection: 'row',
    padding: 10,
  },
  image:{
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer:{
    backgroundColor: '#3872E9',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
  },
  badgeText:{
    color: 'white',
    fontSize: 12,
  },
  rightContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  row:{
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  name:{
    fontWeight:'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  text:{
    color: 'gray',
  }, 
})