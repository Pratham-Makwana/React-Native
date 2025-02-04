import {StyleSheet, Text, View, Button, Modal, FlatList} from 'react-native';
import React, {useState} from 'react';
import commanStyle from '../styles/styles';

const ModalCom = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{marginTop: 10, paddingHorizontal: 10}}>
      <Text style={commanStyle.headingText}>Modal Component</Text>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do You Want to Continue ?</Text>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <Button title="Show modal" onPress={() => setShowModal(true)} />
    </View>
  );
};

export default ModalCom;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#1D1D1D',
    padding: 25,
    borderRadius: 10,
    shadowColor: '#B2BEB5',
    elevation: 5,
  },
  modalText: {
    color: '#fff',
    marginBottom: 5,
  },
});
