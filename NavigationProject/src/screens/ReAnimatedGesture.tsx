import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type ContextType = {
  startX: number;
  startY: number;
};
const ReAnimatedGesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    //    when we click on box or object
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    // when we start moving the object and box
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
        translateY.value = context.startY + event.translationY
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        <Text style={styles.headerText}>ReAnimated Gesture</Text>
        <Text>Drag the below box and release </Text>
      </View>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default ReAnimatedGesture;

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
    borderRadius: 10,
    backgroundColor: 'blue',
    marginTop: 10,
  },
});
