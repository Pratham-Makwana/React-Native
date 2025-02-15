import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/RootNavigation';
import {AuthContext} from '../context/AuthContext';

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
      if(result){
        navigation.navigate('Home')
      }else {
        Alert.alert('Login Failed', 'Please check your credentials and try again')
      }
    }
  };
  return (
    <View style={styles.conainer}>
      <Text style={styles.headerText}>Log In</Text>
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
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.textContent}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

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
