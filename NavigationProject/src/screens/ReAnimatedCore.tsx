import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReAnimatedCore = () => {
  // It is similar to Animated.value where we pass initial value
  const offset = useSharedValue(0);
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);

  // object with current property which contains instance of current component
  const animatedRef = useAnimatedRef<Animated.View>();

  //   useDerivedValue create another value that depend on the other animated value
  const opacity = useDerivedValue(() => {
    return Math.sin((rotate.value * Math.PI) / 180) / 2  + 0.5;;
  });
  //  useAnimatedStyle that create style which can be animated using shared values (base on the animated value ).

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
        {
          rotate: `${rotate.value}deg`,
        },
        {
          scale: scale.value,
        },
      ],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: 1 / scale.value,
        },
      ],
    };
  });
  const handleStartAnimation = () => {
    offset.value = withSpring(Math.random() * 200 - 100);
    rotate.value = withRepeat(
      withTiming(360, {duration: 2000, easing: Easing.linear}),
      -1,
      false,
    );
    scale.value = withRepeat(withTiming(1.5, {duration: 2000}), -1, true);
  };
  const handleStopAnimation = () => {
    cancelAnimation(offset);
    cancelAnimation(rotate);
    cancelAnimation(scale);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ReAnimated Core Example</Text>

      <Animated.View
        style={[styles.box, boxStyle, {opacity: opacity}]}
        ref={animatedRef}>
        <Animated.Text style={[styles.boxText, textStyle]}>
          Animated Box
        </Animated.Text>
      </Animated.View>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={handleStartAnimation}>
          <Text style={styles.btnText}> Start Animation</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleStopAnimation}>
          <Text style={styles.btnText}> Stop Animation</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReAnimatedCore;

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
    width: 150,
    height: 150,
    justifyContent: 'center',
    backgroundColor: '#122499',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  btnContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#23821d',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
