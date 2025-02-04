import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import UserData from './UserData';
import commanStyle from '../styles/styles';
import Form from './Form';
import {HeadenavigationProps, RootStackParamList} from '../types/types';
import {RouteProp} from '@react-navigation/native';

type HeaderRouteProp = RouteProp<RootStackParamList, 'Header'>;

type Props = {
  route: HeaderRouteProp;
  navigation: HeadenavigationProps;
};

const HeaderComponent = ({route, navigation}: Props) => {
  const [name, setName] = useState<string>('');
  const {studentName, age} = route.params;

  const handleSubmit = () => {
    setName(name);
    navigation.navigate('LifeCycle', {name});
  };

  return (
    <>
      <View style={styles.container}>
        <UserData name={name} />
        <TextInput
          placeholder="Type Something here"
          style={styles.inputBox}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button onPress={handleSubmit} title="Go To LifeCyclePage" />
        <Button
          onPress={() => setName('')}
          title="Clear Text"
          color="#841584"
        />
      </View>
      <Form />

      <View style={styles.dataContainer}>
        <Text>Name is {studentName}</Text>
        <Text>Age is {age}</Text>
      </View>
    </>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputBox: {
    borderColor: '#cccccc',
    borderWidth: 1,
    height: 30,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  dataContainer: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    margin: 20,
    borderRadius: 10,
    gap: 5,
  },
});
