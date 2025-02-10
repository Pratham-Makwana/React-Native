import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from './StackNavigationDemo';

type StackScreen1NavigationProps = StackNavigationProp<
  StackParamList,
  'StackScreen1'
>;
const StackScreen1 = () => {
  const navigation = useNavigation<StackScreen1NavigationProps>();
  return (
    <View>
      <Text>StackScreen1</Text>
      <Button
        title="Go To Stack Screen2"
        onPress={() =>
          navigation.navigate('StackScreen2', {
            itemId: 10,
          })
        }
      />
    </View>
  );
};

export default StackScreen1;

const styles = StyleSheet.create({});
