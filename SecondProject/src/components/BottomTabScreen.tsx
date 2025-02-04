import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Screen 1',
          headerTitle: 'Screen 1',
          headerStyle: {
            backgroundColor: '#B2BEB5',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Screen 2',
          headerTitle: 'Screen 2',
          headerStyle: {
            backgroundColor: '#B2BEB5',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Tab1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab Screen 1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab Screen 2</Text>
    </View>
  );
};
export default BottomTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
