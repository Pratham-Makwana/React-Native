import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import ImageUpload from '../screens/ImageUpload';
import OnBoarding1 from '../screens/onBoarding/OnBoarding1';
import OnBoarding2 from '../screens/onBoarding/OnBoarding2';
import OnBoarding3 from '../screens/onBoarding/OnBoarding3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgetPassword from '../screens/ForgetPassword';
import {Linking} from 'react-native';
import ResetPassword from '../screens/ResetPassword';

export type RootStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  RecipeDetails: {recipeId: string};
  ImageUpload: undefined;
  OnBoarding1: undefined;
  OnBoarding2: undefined;
  OnBoarding3: undefined;
  ForgetPassword: undefined;
  ResetPassword: { email: string };  
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;

const RootNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(true);
  const navigation = useNavigation<NavigationProps>();
  const {isLoading, isAuthenticated} = useContext(AuthContext);

  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem('hasSeenOnboarding');
    onboarded && setIsFirstLaunch(false);
  };

  useEffect(() => {
    SplashScreen.hide();
    getStorage();
  }, []);
  useEffect(() => {
    if (!isLoading) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: isAuthenticated
              ? 'Home'
              : isFirstLaunch
              ? 'OnBoarding1'
              : 'Login',
          },
        ],
      });
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        size="large"
        color="#0000ff"
      />
    );
  }

  return (
    <Stack.Navigator initialRouteName="OnBoarding1">
      <Stack.Screen
        name="OnBoarding1"
        component={OnBoarding1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding2"
        component={OnBoarding2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding3"
        component={OnBoarding3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
      <Stack.Screen name="ImageUpload" component={ImageUpload} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
