import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabScreen1 from './TabScreen1'
import TabScreen2 from './TabScreen2'

type BottomTabParamList = {
    TabScreen1 : undefined
    TabScreen2 : undefined
}

const BottomTab  = createBottomTabNavigator<BottomTabParamList>()

const TabNavigationDemo = () => {
  return (
   <BottomTab.Navigator>
    <BottomTab.Screen  name='TabScreen1' component={TabScreen1}/>
    <BottomTab.Screen name='TabScreen2' component={TabScreen2}/>
   </BottomTab.Navigator>
  )
}

export default TabNavigationDemo

