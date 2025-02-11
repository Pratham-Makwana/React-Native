import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../components/context/ThemeContext';
import {Switch} from 'react-native-gesture-handler';

const ThemeDemo = () => {
  const {theme, toggleTheme} = useTheme();

  const isDarkMode = theme === 'dark';
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000' : '#fff'},
      ]}>
      <Text style={[styles.header, {color: isDarkMode ? '#fff' : '#000'}]}>
        ThemeDemo
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
};

export default ThemeDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    justifyContent : 'center',
    alignItems : 'center'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
