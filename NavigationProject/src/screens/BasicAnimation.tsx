import {
  Animated,
  Button,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';

const BasicAnimation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const springAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  const handleFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handleFadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handleTranslate = () => {
    Animated.sequence([
      Animated.timing(translateAnim, {
        toValue: 100,
        useNativeDriver: true,
        easing: Easing.bezier(0.25, 0.5, 0.75, 1),
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        useNativeDriver: true,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    ]).start();
  };

  const handleScale = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleRotate = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
    });
  };

  // ERROR  Invariant Violation: Transform with key of "rotate" must be a string: {"rotate":0}
  // To Solve this we use interpolate
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleSpring = () => {
    Animated.spring(springAnim, {
      toValue: 100,
      tension: 40,
      friction: 5,
      useNativeDriver: true,
    }).start(() => {
      springAnim.setValue(0);
    });
  };
  const handleBounce = () => {
    Animated.sequence([
      Animated.spring(bounceAnim, {toValue: -50, useNativeDriver: true}),
      Animated.spring(bounceAnim, {toValue: 0, useNativeDriver: true}),
    ]).start();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Basic Animation Demo</Text>
      {/* Fade Animation Demo */}
      <Text style={styles.headerText}>Fade In & Fade Out Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.fadeBox,
            {opacity: fadeAnim},
          ]}></Animated.View>
        <View style={styles.buttonContainer}>
          <Button title="Fade In" onPress={handleFadeIn} />
          <Button title="Fade Out" onPress={handleFadeOut} />
        </View>
      </View>
      {/* Translate Animation Demo */}
      <Text style={styles.headerText}> Translate Animation Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.translateBox,
            {
              transform: [
                {
                  translateX: translateAnim,
                },
              ],
            },
          ]}></Animated.View>
        <Button title="Translate" onPress={handleTranslate} />
      </View>
      {/* Scale Animation Demo */}
      <Text style={styles.headerText}> Scale Animation Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.scaleBox,
            {
              transform: [
                {
                  scale: scaleAnim,
                },
              ],
            },
          ]}></Animated.View>
        <Button title="Scale" onPress={handleScale} />
      </View>
      {/* Rotete Animation Demo */}
      <Text style={styles.headerText}> Rotate Animation Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.rotateBox,
            {
              transform: [
                {
                  rotate: spin,
                },
              ],
            },
          ]}></Animated.View>
        <Button title="Rotate" onPress={handleRotate} />
      </View>
      {/* Spring Animation Demo */}
      <Text style={styles.headerText}> Spring Animation Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.springBox,
            {
              transform: [
                {
                  translateX: springAnim,
                },
              ],
            },
          ]}></Animated.View>
        <Button title="Spring" onPress={handleSpring} />
      </View>
      {/* Bounce Animation Demo */}
      <Text style={styles.headerText}> Bounce Animation Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.bounceBox,
            {
              transform: [
                {
                  translateY: bounceAnim,
                },
              ],
            },
          ]}></Animated.View>
        <Button title="Bounce" onPress={handleBounce} />
      </View>
    </ScrollView>
  );
};

export default BasicAnimation;

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
  demoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
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
  fadeBox: {
    backgroundColor: '#3498db',
  },
  translateBox: {
    backgroundColor: '#3498db',
  },
  scaleBox: {
    backgroundColor: '#32a852',
  },
  rotateBox: {
    backgroundColor: '#a84a32',
  },
  springBox: {
    backgroundColor: '#a83263',
  },
  bounceBox: {
    backgroundColor: '#3e32a8',
  },
});
