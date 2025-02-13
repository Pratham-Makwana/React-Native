import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReAnimatedFormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  //   Animation

  const emailShake = useSharedValue(0);
  const passwordShake = useSharedValue(0);
  const emailCheckMark = useSharedValue(0);
  const passwordCheckMark = useSharedValue(0);
  const emailErrorHeight = useSharedValue(0);
  const passwordErrorHeight = useSharedValue(0);

  const validateEmail = (text: string) => {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!text) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(text)) {
      setEmailError('Invalid Email');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (text: string) => {
    if (!text) {
      setPasswordError('Password is required');
      return false;
    } else if (text.length < 6) {
      setPasswordError('Password must be at least length of 6');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);

    const isValidEmail = validateEmail(text);

    

    emailCheckMark.value = withSpring(isValidEmail ? 1 : 0);

    if (!isValidEmail) {
      emailShake.value = withSequence(
        withTiming(-10, {duration: 100}),
        withTiming(10, {duration: 200}),
        withTiming(0, {duration: 100}),
      );

      emailErrorHeight.value = withSpring(20);
    }
    {
      emailErrorHeight.value = withSpring(0);
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);

    const isValidPassword = validatePassword(text);
    passwordCheckMark.value = withSpring(isValidPassword ? 1 : 0);

    if (!isValidPassword) {
      passwordShake.value = withSequence(
        withTiming(-10, {duration: 100}),
        withTiming(10, {duration: 200}),
        withTiming(0, {duration: 100}),
      );

      passwordErrorHeight.value = withSpring(20);
    } else {
      passwordErrorHeight.value = withSpring(0);
    }
  };

  const onSubmit = (email: string, password: string) => {};

  const handleSubmit = () => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validateEmail(password);

    if (isValidEmail && isValidPassword) {
      onSubmit(email, password);
    } else {
      if (!isValidEmail) {
        emailShake.value = withSequence(
          withTiming(-10, {duration: 50}),
          withTiming(10, {duration: 100}),
          withTiming(0, {duration: 50}),
        );

        emailErrorHeight.value = withSpring(20);
      }

      if (!isValidPassword) {
        passwordShake.value = withSequence(
          withTiming(-10, {duration: 50}),
          withTiming(10, {duration: 100}),
          withTiming(0, {duration: 50}),
        );

        passwordErrorHeight.value = withSpring(20);
      }
    }
  };

  const emailAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: emailShake.value,
      },
    ],
  }));
  const passwordAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: passwordShake.value,
      },
    ],
  }));

  const emailCheckmarkStyle = useAnimatedStyle(() => ({
    opacity: emailCheckMark.value,
    transform: [
      {
        scale: emailCheckMark.value,
      },
      {
        rotate: `${emailCheckMark.value * 360}deg`,
      },
    ],
  }));

  const passwordCheckmarkStyle = useAnimatedStyle(() => ({
    opacity: passwordCheckMark.value,
    transform: [
      {
        scale: passwordCheckMark.value,
      },
      {
        rotate: `${passwordCheckMark.value * 360}deg`,
      },
    ],
  }));

  const emailErrorStyle = useAnimatedStyle(() => ({
    height: emailErrorHeight.value,
    opacity: emailErrorHeight.value === 0 ? 0 : 1,
    transform: [
      {
        translateY: withSpring(emailErrorHeight.value / 2),
      },
    ],
  }));

  const passwordErrorStyle = useAnimatedStyle(() => ({
    height: passwordErrorHeight.value,
    opacity: passwordErrorHeight.value === 0 ? 0 : 1,
    transform: [
      {
        translateY: withSpring(passwordErrorHeight.value / 2),
      },
    ],
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer, emailAnimationStyle]}>
        <TextInput
          style={styles.inputComp}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />
        <Animated.View style={[styles.checkmark, emailCheckmarkStyle]}>
          <Text style={styles.checkmarkText}></Text>
        </Animated.View>
      </Animated.View>
      <Animated.Text style={[styles.errorText, emailErrorStyle]}>
        {emailError}
      </Animated.Text>
      <Animated.View style={[styles.inputContainer, passwordAnimationStyle]}>
        <TextInput
          style={styles.inputComp}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
        <Animated.View style={[styles.checkmark, passwordCheckmarkStyle]}>
          <Text style={styles.checkmarkText}></Text>
        </Animated.View>
      </Animated.View>
      <Animated.Text style={[styles.errorText, passwordErrorStyle]}>
        {passwordError}
      </Animated.Text>
      <Pressable style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitBtnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default ReAnimatedFormValidation;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  inputComp: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  checkmark: {
    position: 'absolute',
    height: 20,
    width: 20,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    backgroundColor: '#40ad44',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff5255',
    fontSize: 12,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  submitBtn: {
    backgroundColor: '#2196f3',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 10,
  },
  submitBtnTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
