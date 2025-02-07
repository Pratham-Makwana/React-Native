import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import InputText from '../../components/common/InputText';
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { firebaseAuth } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';



const SignUp = () => {
const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp =async () => {
    if(email && password){
      try{
        await createUserWithEmailAndPassword(firebaseAuth, email,password);
      }catch(error){
        console.log('==> ErrorSignUp', error)
      }
    }
  }


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign Up</Text>
      <InputText
        placeholder="Enter Name"
        value={username}
        onChangeText={setUsername}
      />
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
      <TouchableOpacity style={styles.signBtn} onPress={handleSignUp} >
        <Text style={styles.signUpText}>SignUp</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Already have an account?
        <Text style={styles.link} onPress={() => navigation.goBack('Login') }>
          LogIn
        </Text>
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
