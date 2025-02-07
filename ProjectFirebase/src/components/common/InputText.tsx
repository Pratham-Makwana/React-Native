import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputText = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize='none'
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    borderColor: '#36454F',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
