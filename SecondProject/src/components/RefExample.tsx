import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';

const RefExample = () => {
  const inputRef = useRef<TextInput | null>(null);

  const updateRef = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <View style={styles.main}>
      <TextInput ref={inputRef} style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <Button title="Chnage Ref" onPress={updateRef} />
    </View>
  );
};

export default RefExample;

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },

  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
});
