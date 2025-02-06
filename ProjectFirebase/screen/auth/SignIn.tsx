import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import InputText from '../../components/common/InputText';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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

      <TouchableOpacity style={styles.signBtn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Already have an account? <Text style={styles.link}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default SignIn;

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
