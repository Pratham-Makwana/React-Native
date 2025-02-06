import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import InputText from '../../components/common/InputText';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        Alert.alert('User Created');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign Up</Text>
      <InputText
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <InputText
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        keyboardType="visible-password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.signBtn} onPress={signIn}>
        <Text style={styles.signUpText}>SignIn</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Don't have an account? <Text style={styles.link}>Sign In</Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  signBtn: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
  },
});
