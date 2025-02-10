import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerNavigationProp, DrawerNavigatorProps} from '@react-navigation/drawer';

type DrawerParamList = {
    DrawerScreen1 : undefined;
    DrawerScreen2 : undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigationDemo = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

type DrawerScreen1Props = {
    navigation : DrawerNavigationProp<DrawerParamList , 'DrawerScreen1'>
}


type DrawerScreen2Props = {
    navigation : DrawerNavigationProp<DrawerParamList , 'DrawerScreen2'>
}

const DrawerScreen1 : React.FC<DrawerScreen1Props> = ( {navigation}) => {
  return (
    <View>
      <Text>Drawer Screen 1</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const DrawerScreen2 = () => {
  return (
    <View>
      <Text>Drawer Screen 2</Text>
    </View>
  );
};

export default DrawerNavigationDemo;

const styles = StyleSheet.create({});
