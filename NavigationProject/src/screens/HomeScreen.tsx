import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../RootNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList} from 'react-native-gesture-handler';
type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

const topics = [
  {
    id: 1,
    title: 'Flat List Demo',
    screen: 'FlatListDemo',
  },
  {
    id: 2,
    title: 'Section List Demo',
    screen: 'SectionListDemo',
  },
  {
    id: 3,
    title: 'PullToRefresh Demo',
    screen: 'PullToRefresh',
  },
  {
    id: 4,
    title: 'Data Fetching',
    screen: 'DataFetching',
  },
  {
    id: 5,
    title: 'Axios ',
    screen: 'AxiosDemo',
  },
  {
    id: 6,
    title: 'Theme Demo ',
    screen: 'ThemeDemo',
  },
  {
    id: 7,
    title: 'Basic Animation Demo ',
    screen: 'BasicAnimation',
  },
  {
    id: 8,
    title: 'Interpolation Demo ',
    screen: 'InterpolationDemo',
  },
  {
    id: 9,
    title: 'Combined Animation Demo ',
    screen: 'CombinedAnimation',
  },
  {
    id: 10,
    title: 'Gesture Animation Demo ',
    screen: 'GestureAnimation',
  },
  {
    id: 11,
    title: 'ReAnimated Core Demo ',
    screen: 'ReAnimatedCore',
  },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<NavigationComponent />}
        data={topics}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.topicBtn}
            onPress={() =>
              navigation.navigate(item.screen as keyof RootStackParamList)
            }>
            <Text style={styles.topicText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const NavigationComponent = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  return (
    <>
      <Text style={styles.text}>Navigation: </Text>
      <View style={styles.btnContainer}>
        <Button
          title="Stack Navigation Demo"
          onPress={() => navigation.navigate('StackDemo')}
        />
        <Button
          title="Tab Navigation Demo"
          onPress={() => navigation.navigate('TabDemo')}
        />
        <Button
          title="Drawer Navigation Demo"
          onPress={() => navigation.navigate('DrawerDemo')}
        />
      </View>
      <Text style={styles.text}>FlatList Demo: </Text>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    padding: 20,
    // marginTop: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnContainer: {
    gap: 5,
    marginBottom: 20,
  },
  topicBtn: {
    backgroundColor: '#e0e0e0',
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
  },
  topicText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
