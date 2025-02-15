import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/RootNavigation';
import {AuthContext} from '../context/AuthContext';

type SignUpNavigationStackProps = NativeStackNavigationProp<
  RootStackParamsList,
  'SignUp'
>;

interface SignUpScreenProps {
  navigation: SignUpNavigationStackProps;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp} = useContext(AuthContext);

  const handleSignUp = async () => {
    if (email && password) {
      const success = await signUp(email, password);
      if (success) {
        // do something
        Alert.alert('Success', 'Account created successfully! Please Log In')
        navigation.navigate('Login')
      } else {
        Alert.alert('Sign up Failed', 'Please try again later');
      }
    } else {
      Alert.alert('Invalid Input', 'Please enter both email and password ');
    }
  };
  return (
    <View style={styles.conainer}>
      <Text style={styles.headerText}>Sign Up</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Email here"
        placeholderTextColor="#2e2e2e"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password here"
        placeholderTextColor="#2e2e2e"
        autoCapitalize="none"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.textContent}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>LogIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputBox: {
    borderWidth: 1.5,
    borderColor: '#718096',
    width: '100%',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  btn: {
    width: '100%',
    height: 40,
    backgroundColor: '#004e98',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004e98',
  },
});
