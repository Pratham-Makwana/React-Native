import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigators/TabNavigator';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          options={{animation: 'slide_from_bottom'}}
          component={TabNavigator}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
