import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReAnimationType = () => {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          scale: scale.value,
        },
        {
          rotate: `${rotation.value}deg`,
        },
      ],
      borderRadius: rotation.value / 2,
    };
  });

  //   timing Animation
  const handleTimingAnimation = () => {
    translateX.value = withTiming(120, {
      duration: 1500,
      easing: Easing.out(Easing.exp),
    });
  };

  //   spring animation
  const handleSpringAnimation = () => {
    scale.value = withSpring(1.5, {
      damping: 10,
      stiffness: 100,
    });
  };

  //   Decay Animation
  const handleDecayAnimation = () => {
    translateX.value = withDecay({
      velocity: 200,
      clamp: [-300, 300],
    });
  };

  //   Sequence Animation
  const handleSequenceAnimation = () => {
    rotation.value = withSequence(
      withTiming(180, {duration: 1000}),
      withTiming(0, {duration: 2000}),
    );
  };
  // Delay Animation
  const handleDelayAnimation = () => {
    translateX.value = withDelay(1000, withSpring(200));
  };

  //   Repeat Animation
  const handleRepeatAnimation = () => {
    scale.value = withRepeat(withTiming(1.2), 5, true);
  };
  //   reset Animation
  const handleResetAnimation = () => {
    translateX.value = withTiming(0);
    scale.value = withTiming(1);
    rotation.value = withTiming(0)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ReAnimationType Demo</Text>
      <Animated.View style={[styles.box, boxStyle]} />

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={handleTimingAnimation}>
          <Text style={styles.btnText}> Timing </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleSpringAnimation}>
          <Text style={styles.btnText}> Spring </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleDecayAnimation}>
          <Text style={styles.btnText}> Decay </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleSequenceAnimation}>
          <Text style={styles.btnText}> Sequence </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleRepeatAnimation}>
          <Text style={styles.btnText}> Repeat </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleDelayAnimation}>
          <Text style={styles.btnText}> Delay </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleResetAnimation}>
          <Text style={styles.btnText}> Reset </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReAnimationType;

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
  btnContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  box: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    backgroundColor: '#122499',
    alignItems: 'center',
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
