import {
  Alert,
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/RootNavigation';
import CreateRecipeForm from '../components/CreateRecipeForm';

type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProps;
}
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancle',
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: async () => {
          await signOut();
          navigation.replace('Login');
        },
      },
    ]);
  };

  return (
    <SafeAreaView >
      <View >
        <View style={styles.header}>
          <TextInput style={styles.inputSearch} placeholder="Search Recipe..." />
          <TouchableOpacity style={styles.iconBtn} onPress={() => setShowModal(true)}>
            <Text style={styles.iconBtnTxt}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutBtnTxt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Render List of Recipe */}

      <Modal
      visible={showModal}
      transparent={true}
      animationType='slide'
      onRequestClose={() => setShowModal(false)}

      >
      
         <CreateRecipeForm onCancle={() => setShowModal(false)}/>
        {/* <View style={styles.modalConatiner}>
          <View style={styles.modalContent}>
           
          </View>
          </View> */}
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#f5f5f5',
    margin : 16
  },
  header: {
    flexDirection: 'row',
    backgroundColor : '#363946',
    padding : 16,
    alignItems : 'center'
  },
  inputSearch: {
    flex :1,
    height : 45,
    backgroundColor : '#ffffff',
    borderRadius : 20,
    marginRight : 15,
    paddingHorizontal : 16
  },
  iconBtn :{
    height : 30,
    width : 30,
    backgroundColor : '#fff',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    
  },
  iconBtnTxt : {
    fontSize : 16,
    fontWeight : '500'
  },
  logoutBtn : {
    backgroundColor : '#fff',
    marginLeft : 12,
    padding : 10,
    borderRadius : 12
  },
  logoutBtnTxt: {
    fontSize : 14,
    fontWeight : '600'
  },
  modalConatiner : {
    flex : 1,
    backgroundColor : 'rgba(0,0,0,0.5)',
    justifyContent : 'center',
    alignItems : 'center'
  },
  modalContent: {
    backgroundColor : '#ffffff',
    width : '90%',
    maxWidth : 400
  },
});
