import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/RootNavigation';
import axios from 'axios';
import {API_URL} from '../context/AuthContext';
import Toast from 'react-native-toast-message';

type ForgetPasswordNavigationStackProps = NativeStackNavigationProp<
  RootStackParamsList,
  'ForgetPassword'
>;

interface ForgetPasswordProps {
  navigation: ForgetPasswordNavigationStackProps;
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async () => {
   
    try {
      const response = await axios.post(`${API_URL}/api/auth/forget-password`, {
        email,
      });
      Toast.show({
        type: 'success',
        text1: 'Password reset code sent to your email.',
        position: 'top',
      });
      console.log('Success', response.data.message);
      console.log('Success', response.data.success);
      if (response.data.success) {
        setMessage(response.data.message);
        navigation.navigate('ResetPassword', {email});
      }
    } catch (e) {
      console.log('==> ForgetPassword Err', e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}> Enter Email For Reset Password</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Email here"
        placeholderTextColor="#2e2e2e"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
      {message && <Text>{message}</Text>}
      <Toast />
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    paddingHorizontal: 20,
  },
  inputBox: {
    borderWidth: 1.5,
    borderColor: '#718096',
    width: '100%',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 10,
    // marginBottom: 15,
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
  headerTxt: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
