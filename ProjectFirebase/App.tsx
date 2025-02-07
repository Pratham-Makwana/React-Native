import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './src/navigation/RootNavigator';

function App(): JSX.Element {
  return <RootNavigator />;
}

const styles = StyleSheet.create({});

export default App;
