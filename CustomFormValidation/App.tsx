import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleSubmit = () => {
    let tempErr: {[key: string]: string} = {};
    let isValid = true;

    if (!name) {
      tempErr.name = 'name is required';
      isValid = false;
    }

    if (!email) {
      tempErr.email = 'email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErr.email = 'Email is not valid';
      isValid = false;
    }

    if (!password) {
      tempErr.password = 'password is required';
    } else if (password.length < 6) {
      tempErr.password = 'password must be at least length of 6';
    }

    if (Object.keys(tempErr).length > 0) {
      setErrors(tempErr);
    } else {
      // Handle successful submission
      console.log('Form submitted successfully:', {name, email, password});
      // Clear the form
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="name"
        value={name}
        onChangeText={text => setName(text)}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
