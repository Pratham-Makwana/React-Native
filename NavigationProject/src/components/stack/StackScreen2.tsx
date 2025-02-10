import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackParamList} from './StackNavigationDemo';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type StackScreen2NavigationProps = StackNavigationProp<
  StackParamList,
  'StackScreen2'
>;

type StackScreen2RouteProps = RouteProp<StackParamList, 'StackScreen2'>;

const StackScreen2 = () => {
  const navigation = useNavigation<StackScreen2NavigationProps>();
  const route = useRoute<StackScreen2RouteProps>();
 
  
  return (
    <View>
      <Text>StackScreen2</Text>
      <Text>Item ID : {route.params.itemId}</Text>
      <Button  title='Go Back To Stack Screen 1' onPress={() => navigation.goBack()}/>
    </View>
  );
};

export default StackScreen2;

const styles = StyleSheet.create({});
