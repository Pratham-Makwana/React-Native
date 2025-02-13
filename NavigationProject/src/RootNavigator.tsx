import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import StackNavigationDemo from './components/stack/StackNavigationDemo'
import TabNavigationDemo from './components/tab/TabNavigationDemo'
import DrawerNavigationDemo from './components/drawer/DrawerNavigationDemo'
import FlatListScreen from './screens/FlatListScreen'
import SectionListScreen from './screens/SectionListScreen'
import PullToRefresh from './screens/PullToRefresh'
import DataFetching from './screens/DataFetching'
import AxiosScreen from './screens/AxiosScreen'
import ThemeDemo from './screens/ThemeDemo'
import BasicAnimation from './screens/BasicAnimation'
import InterpolationDemo from './screens/InterpolationDemo'
import CombinedAnimation from './screens/CombinedAnimation'
import GestureAnimation from './screens/GestureAnimation'
import ReAnimatedCore from './screens/ReAnimatedCore'
import ReAnimationType from './screens/ReAnimationType'
import ReAnimatedGesture from './screens/ReAnimatedGesture'
import ReAnimatedFormValidation from './screens/ReAnimatedFormValidation'

export type RootStackParamList = {
  Home : undefined,
  StackDemo: undefined,
  TabDemo : undefined
  DrawerDemo : undefined
  FlatListDemo : undefined
  SectionListDemo : undefined
  PullToRefresh : undefined
  DataFetching : undefined
  AxiosDemo : undefined
  ThemeDemo : undefined
  BasicAnimation : undefined
  InterpolationDemo : undefined
  CombinedAnimation : undefined
  GestureAnimation : undefined
  ReAnimatedCore : undefined
  ReAnimationType : undefined
  ReAnimatedGesture : undefined
  ReAnimatedFormValidation: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator : React.FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen  name='Home' component={HomeScreen}/>
        <Stack.Screen name='FlatListDemo' component={FlatListScreen}/>
        <Stack.Screen name='SectionListDemo' component={SectionListScreen}/>
        <Stack.Screen name='PullToRefresh' component={PullToRefresh}/>
        <Stack.Screen name='DataFetching' component={DataFetching}/>
        <Stack.Screen name='AxiosDemo' component={AxiosScreen}/>
        <Stack.Screen name='ThemeDemo' component={ThemeDemo}/>
        <Stack.Screen name='BasicAnimation' component={BasicAnimation}/>
        <Stack.Screen name='InterpolationDemo' component={InterpolationDemo}/>
        <Stack.Screen name='CombinedAnimation' component={CombinedAnimation}/>
        <Stack.Screen name='GestureAnimation' component={GestureAnimation}/>
        <Stack.Screen name='ReAnimatedCore' component={ReAnimatedCore}/>
        <Stack.Screen name='ReAnimationType' component={ReAnimationType}/>
        <Stack.Screen name='ReAnimatedGesture' component={ReAnimatedGesture}/>
        <Stack.Screen name='ReAnimatedFormValidation' component={ReAnimatedFormValidation}/>
        <Stack.Screen options={{headerShown : false}} name='StackDemo' component={StackNavigationDemo}/>
        <Stack.Screen options={{headerShown : false}} name='TabDemo' component={TabNavigationDemo}/>
        <Stack.Screen options={{headerShown : false}}  name='DrawerDemo' component={DrawerNavigationDemo}/>
    </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})