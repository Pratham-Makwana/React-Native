import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
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

export type RootStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  RecipeDetails: {recipeId: string};
  ImageUpload: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;

const RootNavigation = () => {
  const navigation = useNavigation<NavigationProps>();
  const {isLoading, isAuthenticated} = useContext(AuthContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    if (!isLoading) {
      navigation.reset({
        index: 0,
        routes: [{name: isAuthenticated ? 'Home' : 'Login'}],
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
    <Stack.Navigator initialRouteName="Login">
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
