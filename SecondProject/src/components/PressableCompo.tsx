import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commanStyle from '../styles/styles';

const PressableCompo = () => {
  return (
    <View style={styles.main}>
      <Text style={commanStyle.headingText}>Pressable Component:</Text>
      <View>
        <Pressable
          //   onPress={() => console.warn('Normal Press')}
          //   onLongPress={() => console.warn('Long Press')}
          onPressIn={() => console.warn('Press In')}
          onPressOut={() => console.warn('Press Out')}>
          <View style={styles.pressableBtn}>
            <Text style={styles.btnText}>Press Me</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default PressableCompo;

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  pressableBtn: {
    backgroundColor: '#424242',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#010101',
    elevation: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});
