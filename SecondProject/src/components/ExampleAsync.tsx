import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExampleAsync = () => {
  const [user, setUser] = useState<string | null>('');
  const storeData = async () => {
    await AsyncStorage.setItem('user', 'Pratham');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    setUser(name);
    console.warn(name);
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('user');
  };
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 10, fontSize: 20}}>
        User Is {user}
      </Text>
      <Button title="Set Data" onPress={storeData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
    </View>
  );
};

export default ExampleAsync;

const styles = StyleSheet.create({});
