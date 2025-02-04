import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<any>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    let formErr: any = {};
    if (!name) {
      formErr.name = 'name is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      formErr.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      formErr.email = 'Invalid Formate';
    }

    if (!password) {
      formErr.password = 'password is required';
    } else if (password.length < 6) {
      formErr.password = 'password must be atleasr 6 digit';
    }

    setError(formErr);

    return Object.keys(formErr).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.warn('Form submitted successfully!', name, email, password);
      setName('');
      setEmail('');
      setPassword('');
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.headingText}>Form Details </Text>
      <TextInput
        style={styles.inputBox}
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
      />
      {error.name && <Text style={styles.errText}>{error.name}</Text>}
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
      />
      {error.email && <Text style={styles.errText}>{error.email}</Text>}
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        secureTextEntry={true}
      />
      {error.password && <Text style={styles.errText}>{error.password}</Text>}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  inputBox: {
    height: 35,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 15,
    paddingHorizontal: 10,
  },
  errText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    paddingHorizontal: 5,
  },
});
