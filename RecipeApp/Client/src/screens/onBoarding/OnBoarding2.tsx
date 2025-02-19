import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamsList} from '../../navigation/RootNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type OnBoarding2NavigationStackProps = NativeStackNavigationProp<
  RootStackParamsList,
  'OnBoarding2'
>;

interface OnBoarding2Props {
  navigation: OnBoarding2NavigationStackProps;
}
const OnBoarding2: React.FC<OnBoarding2Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>OnBoarding2</Text>
      <Button title="Next" onPress={
        () => navigation.navigate('OnBoarding3')
      }/>
    </View>
  );
};

export default OnBoarding2;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
