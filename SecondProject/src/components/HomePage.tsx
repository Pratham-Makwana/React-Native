import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomenavigationProps} from '../types/types';
type Props = {
  navigation: HomenavigationProps;
};

const HomePage = ({navigation}: Props) => {
  return (
    <View style={styles.main}>
      {/* FlatList */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FlatList')}>
        <Text style={styles.btnText}>Go to FlatList</Text>
      </TouchableOpacity>
      {/* Header  */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Header', {studentName: 'pratham', age: 29})
        }>
        <Text style={styles.btnText}>Go to Header</Text>
      </TouchableOpacity>
      {/* Lifecycle */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LifeCycle', {})}>
        <Text style={styles.btnText}>Go to LifeCycle</Text>
      </TouchableOpacity>
      {/* Loader */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Loader')}>
        <Text style={styles.btnText}>Go to Loader</Text>
      </TouchableOpacity>
      {/* Modal */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Modal')}>
        <Text style={styles.btnText}>Go to Modal</Text>
      </TouchableOpacity>
      {/* Pressable */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pressable')}>
        <Text style={styles.btnText}>Go to Pressable</Text>
      </TouchableOpacity>
      {/* BottomTabScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BottomTabScreen')}>
        <Text style={styles.btnText}>Go to Bottom TabScreen</Text>
      </TouchableOpacity>
      {/* TopTabScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TopTabScreen')}>
        <Text style={styles.btnText}>Go to Top TabScreen</Text>
      </TouchableOpacity>
      {/* Fetch Screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FetchData')}>
        <Text style={styles.btnText}>Go to FetchData</Text>
      </TouchableOpacity>
      {/* JsonServerApi */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('JsonServerApi')}>
        <Text style={styles.btnText}>Go to JsonServerApi</Text>
      </TouchableOpacity>
      {/* Search With API */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SearchWithAPI')}>
        <Text style={styles.btnText}>Go to SearchWithAPI</Text>
      </TouchableOpacity>
      {/* useRef Example */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RefExample')}>
        <Text style={styles.btnText}>Go to Ref Example</Text>
      </TouchableOpacity>
      {/* Async Storage Example */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AsyncExample')}>
        <Text style={styles.btnText}>Go to AsyncExample</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#080808',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  btnText: {
    color: '#fff',
  },
});
