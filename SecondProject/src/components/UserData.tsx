import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type UserDataProps = {
  name: string;
};

const UserData = ({name}: UserDataProps) => {
  return (
    <View style={styles.container}>
      <Text>Hello, {name}</Text>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
