import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      
      <TouchableOpacity style={styles.markBtn} onPress={() => navigation.navigate('Selfie') }>
        <Text style={styles.btnText}>Mark Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.markBtn} onPress={() => navigation.navigate('UserLocation') }>
        <Text style={styles.btnText}>Get Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 20
  },
  markBtn : {
    backgroundColor : '#000',
    padding : 10,
    width : '100%',
    borderRadius : 10,
    marginBottom : 10
   
  },
  btnText : {
    color : '#fff',
    textAlign : 'center'
  }
});
