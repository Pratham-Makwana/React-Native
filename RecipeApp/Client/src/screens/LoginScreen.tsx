import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Pressable,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/RootNavigation';
import {AuthContext} from '../context/AuthContext';
import Toast from 'react-native-toast-message';

type LoginNavigationStackProps = NativeStackNavigationProp<
  RootStackParamsList,
  'Login'
>;

interface LoginScreenProps {
  navigation: LoginNavigationStackProps;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  const handleLogin = async () => {
    if (email && password) {
      const result = await signIn(email, password);

      if (result) {
        setTimeout(() => {
          navigation.navigate('Home');
        }, 30000);
      } else {
        Alert.alert(
          'Login Failed',
          'Please check your credentials and try again',
        );
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please Enter Email And Password',
        position: 'top',
        visibilityTime: 3000,
      });
    }
  };
  return (
    <View style={styles.conainer}>
      <Text style={styles.headerText}>Log In</Text>
      <View style={styles.inputContainer}>
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
          style={[styles.inputBox, {marginBottom: 10}]}
          placeholder="Password here"
          placeholderTextColor="#2e2e2e"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          style={styles.forgetBox}
          onPress={() => navigation.navigate('ForgetPassword')}>
          <Text>Forget Password ?</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.textContent}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {},
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
    marginTop: 20,
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
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004e98',
  },
  forgetBox: {
    position: 'absolute',

    right: 10,
    bottom: -12,
  },
});
