import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/AppStack';

function App(): JSX.Element {
  return <AppStack />;
}

const styles = StyleSheet.create({});

export default App;
