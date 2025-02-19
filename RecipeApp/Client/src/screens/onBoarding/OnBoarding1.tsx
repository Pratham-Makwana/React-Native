import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../navigation/RootNavigation';

type OnBoarding1NavigationStackProps = NativeStackNavigationProp<
  RootStackParamsList,
  'OnBoarding1'
>;

interface OnBoarding1Props {
  navigation: OnBoarding1NavigationStackProps;
}

const OnBoarding1: React.FC<OnBoarding1Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>OnBoarding1</Text>
      <Button title="Next" onPress={() => navigation.navigate('OnBoarding2')}/>
    </View>
  );
};

export default OnBoarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
