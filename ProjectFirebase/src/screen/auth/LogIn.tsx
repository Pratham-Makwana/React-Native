import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import InputText from '../../components/common/InputText';
import {useNavigation} from '@react-navigation/native';
import auth, {signInWithEmailAndPassword} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebaseAuth} from '../../config/firebase';

const LogIn = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
        console.log('===> ErrorLogin', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
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

      <TouchableOpacity style={styles.signBtn} onPress={handleLogin}>
        <Text style={styles.signInText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
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
  signInText: {
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
