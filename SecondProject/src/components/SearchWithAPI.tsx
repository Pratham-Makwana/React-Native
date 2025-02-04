import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const SearchWithAPI = () => {
  const [data, setData] = useState([]);

  const searchUser = async (text: string) => {
    const url = `http://192.168.200.145:3000/users?q=${text}`;
    let result = await fetch(url);
    const response = await result.json();
    if (response) {
      setData(response);
    }
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{
          borderWidth: 1,
          margin: 20,
          borderRadius: 10,
          padding: 10,
        }}
        placeholder="Search"
        onChangeText={text => searchUser(text)}
      />
      {data.length
        ? data.map((item: any) => (
            <View key={item.id}>
              <Text>{item.name}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default SearchWithAPI;

const styles = StyleSheet.create({});
