import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';
import PostScreen from './components/PostScreen';
import CreatePost from './components/CreatePost';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Screen',

            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
