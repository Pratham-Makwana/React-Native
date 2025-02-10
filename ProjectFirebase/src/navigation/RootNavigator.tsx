import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screen/auth/LogIn';
import SignUp from '../screen/auth/SignUp';
import Home from '../screen/Home';
import userAuth from '../hook/userAuth';
import {NavigationContainer} from '@react-navigation/native';
import {signOut} from '@react-native-firebase/auth';
import {firebaseAuth} from '../config/firebase';
import Selfie from '../screen/Selfie';
import UserLocation from '../screen/UserLocation';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {currentUser} = userAuth();
  console.log('===> currentUser', currentUser);

  const logOut = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (err) {
      console.log('==> LogoutError', err);
    }
  };
  
  const LogOutComponent = () => {
    return (
   
        <TouchableOpacity onPress={logOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
   
    )
  }

  if (currentUser) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => <LogOutComponent/>
            }}
          />
            <Stack.Screen
            name="Selfie"
            component={Selfie}
          
          />
          <Stack.Screen name='UserLocation' component={UserLocation}/>
        </Stack.Navigator>
        
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default RootNavigator;

const styles = StyleSheet.create({});
