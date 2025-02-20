import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/RootNavigation';
import {RouteProp} from '@react-navigation/native';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {API_URL} from '../context/AuthContext';
import Toast from 'react-native-toast-message';

type ResetPasswordNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'ResetPassword'
>;

type ResetPasswordRouteProp = RouteProp<RootStackParamsList, 'ResetPassword'>;

interface FResetPasswordProps {
  navigation: ResetPasswordNavigationProp;
  route: ResetPasswordRouteProp;
}

const ResetPassword: React.FC<FResetPasswordProps> = ({navigation, route}) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const {email} = route.params;
  // console.log("==> email", email);
  // console.log("==> code", code);
  // console.log("==> newPassword", newPassword);

  const handleResetPassword = async () => {
    console.log('==> called');

    try {
      const response = await axios.post(`${API_URL}/api/auth/reset-password`, {
        email,
        code,
        newPassword,
      });
      console.log('==> Reset ', response.data.message);
      Toast.show({
        type: 'success',
        text1: response.data.message,
        position: 'top',
      });
      if (response.data.success) {
        setMessage(response.data.message);
        navigation.replace('Login');
      } else {
        Toast.show({
          type: 'error',
          text1: response.data.message,
          position: 'top',
        });
      }
    } catch (error) {
      console.log('==> ResetPassword E', error);
    }
  };
  const toasttest = async () => {
    Toast.show({
      type: 'success',
      text1: 'demo',

      position: 'top',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}> Reset Password</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter reset code"
        value={code}
        onChangeText={setCode}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Enter New Password"
        placeholderTextColor="#2e2e2e"
        autoCapitalize="none"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TouchableOpacity style={styles.btn} onPress={handleResetPassword}>
        <Text style={styles.btnText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={toasttest}>
        <Text style={styles.btnText}>demo Password</Text>
      </TouchableOpacity>
      {message && <Text>{message}</Text>}
      <Toast />
    </View>
  );
};

export default ResetPassword;

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
    marginTop: 15,
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
