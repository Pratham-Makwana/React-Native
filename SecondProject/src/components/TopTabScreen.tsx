import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();
const TopTabScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: 'white'},
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIndicatorStyle: {backgroundColor: 'blue'},
        }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignIn" component={SignIn} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  );
};
export default TopTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes full height
    justifyContent: 'center',
    alignItems: 'center',
  },
});
