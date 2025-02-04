import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import commanStyle from '../styles/styles';

const Loader = () => {
  const [loader, setLoader] = useState(false);

  const displayLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };
  return (
    <View style={{marginTop: 10, paddingHorizontal: 10}}>
      <Text style={commanStyle.headingText}>Loader</Text>
      <ActivityIndicator size="large" animating={loader} />
      <Button title="Show Loader" onPress={displayLoader} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
