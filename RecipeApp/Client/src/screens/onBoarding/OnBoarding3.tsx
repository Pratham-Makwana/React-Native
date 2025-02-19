import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {RootStackParamsList} from '../../navigation/RootNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type OnBoarding3NavigationStackProps = NativeStackNavigationProp<
  RootStackParamsList,
  'OnBoarding3'
>;

interface OnBoarding3Props {
  navigation: OnBoarding3NavigationStackProps;
}
const OnBoarding3: React.FC<OnBoarding3Props> = ({navigation}) => {
  const handleNavigaton = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>OnBoarding3</Text>
      <Button title="Login" onPress={handleNavigaton} />
    </View>
  );
};

export default OnBoarding3;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
