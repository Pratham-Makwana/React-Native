import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screen/auth/SignUp';
import SignIn from '../screen/auth/SignIn';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="signIn" component={SignIn} />
    </Stack.Navigator>
  );
}
export default AppStack;

const styles = StyleSheet.create({});
