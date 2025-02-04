import React from 'react';
import FlatListCom from './src/components/FlatListCom';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/components/HomePage';
import HeaderComponent from './src/components/HeaderComponent';
import MapList from './src/components/MapList';
import LifecycleUseEffect from './src/components/LifecycleUseEffect';
import Loader from './src/components/Loader';
import ModalCom from './src/components/ModalCom';
import PressableCompo from './src/components/PressableCompo';
import {Button} from 'react-native';
import {RootStackParamList} from './src/types/types';
import BottomTabScreen from './src/components/BottomTabScreen';
import TopTabScreen from './src/components/TopTabScreen';
import FetchData from './src/components/FetchData';
import JsonServerApi from './src/components/JsonServerApi';
import SearchWithAPI from './src/components/SearchWithAPI';
import RefExample from './src/components/RefExample';
import ExampleAsync from './src/components/ExampleAsync';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#050505',
            backgroundColor: '#B2BEB5',
          },
          // headerTintColor: '#ccc',
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: 'Home Page',
            headerLeft: () => <Button title="Left" />,
            headerRight: () => <Button title="Right" />,
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
        <Stack.Screen name="FlatList" component={FlatListCom} />
        <Stack.Screen name="Header" component={HeaderComponent} />
        <Stack.Screen name="MapList" component={MapList} />
        <Stack.Screen name="LifeCycle" component={LifecycleUseEffect} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="Modal" component={ModalCom} />
        <Stack.Screen name="Pressable" component={PressableCompo} />
        <Stack.Screen
          name="BottomTabScreen"
          component={BottomTabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopTabScreen"
          component={TopTabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="FetchData" component={FetchData} />
        <Stack.Screen name="JsonServerApi" component={JsonServerApi} />
        <Stack.Screen name="SearchWithAPI" component={SearchWithAPI} />
        <Stack.Screen name="RefExample" component={RefExample} />
        <Stack.Screen name="AsyncExample" component={ExampleAsync} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
