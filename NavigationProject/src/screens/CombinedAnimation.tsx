import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const CombinedAnimation = () => {
  const moveAndRoteteAnim = useRef(new Animated.Value(0)).current;
  const pluseAnim = useRef(new Animated.Value(1)).current;

  const combinedAnimation = () => {
    moveAndRoteteAnim.setValue(0);

    Animated.timing(moveAndRoteteAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false, // Because we using background color
    }).start();
  };
  const moveX = moveAndRoteteAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const moveY = moveAndRoteteAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const rotate = moveAndRoteteAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const backgroundColor = moveAndRoteteAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#3e32a8', '#3281a8', '#32a846'],
  });

  const plusAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pluseAnim, {
          toValue: 1.3,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pluseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Combined Animation</Text>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateX: moveX,
              },
              {
                translateY: moveY,
              },
              {
                rotate: rotate,
              },
              {
                scale: pluseAnim,
              },
            ],
            backgroundColor
          },
        ]}></Animated.View>
        <View style={styles.btnContainer}>
            <Button title='Move , rotate & change color' onPress={combinedAnimation}/>
            <Button title='Pluse' onPress={plusAnimation}/>
        </View>
    </View>
  );
};

export default CombinedAnimation;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  btnContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  }
});
