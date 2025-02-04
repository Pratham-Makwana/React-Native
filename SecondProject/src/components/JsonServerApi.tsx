import {
  Button,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const JsonServerApi = () => {
  const [data, setData] = useState<any>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<any>({});
  const [SelectedUser, setSelectedUser] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  // Fetch Data
  const getData = async () => {
    let res = await fetch('http://192.168.200.145:3000/users');
    // let res = await fetch('http://10.0.2.2:3000/users');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    res = await res.json();
    setData(res);
  };
  useEffect(() => {
    getData();
  }, [data]);

  const validateForm = () => {
    let formErr: any = {};
    if (!name) {
      formErr.name = 'name is required';
    }

    if (!username) {
      formErr.username = 'username is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      formErr.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      formErr.email = 'Invalid Formate';
    }

    setError(formErr);

    return Object.keys(formErr).length === 0;
  };

  //Save Data
  const saveAPIData = async () => {
    if (validateForm()) {
      const url = 'http://192.168.200.145:3000/users';
      let result = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, username, email}),
      });
      result = await result.json();
      setName('');
      setUsername('');
      setEmail('');
    } else {
      console.log('Form has errors. Please correct them.');
    }

    // const data = {
    //   //   id: 8,
    //   name: 'dev Shah',
    //   username: 'dev',
    //   email: 'dev@yesenia.net',
    // };
  };

  //   ----------- Delete User ----------------

  const deleteUser = async (id: any) => {
    const url = 'http://192.168.200.145:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'Delete',
    });
    result = await result.json();
    if (result) {
      console.warn('User Deleted');
    }
  };

  const updateUser = async (data: any) => {
    setShowModal(true);
    setSelectedUser(data);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
        value={username}
        onChangeText={setUsername}
        placeholder="Enter Username"
      />
      {error.username && <Text style={styles.errText}>{error.username}</Text>}
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
      />
      {error.email && <Text style={styles.errText}>{error.email}</Text>}
      <Button title="SaveData" onPress={saveAPIData} />
      <View style={styles.container}>
        {data.length
          ? data.map((item: any) => (
              <View key={item.id} style={styles.dataContainer}>
                <Text style={{padding: 2}}>Name: {item.name}</Text>
                <Text style={{padding: 2}}>Username: {item.username}</Text>
                <Text style={{padding: 2}}>Email :{item.email}</Text>

                <View style={styles.btnContainer}>
                  <Pressable
                    style={styles.btnUpdate}
                    onPress={() => updateUser(item)}>
                    <Text style={styles.btnText}>Update</Text>
                  </Pressable>
                  <Pressable
                    style={styles.btnDelete}
                    onPress={() => deleteUser(item.id)}>
                    <Text style={styles.btnText}>Delete</Text>
                  </Pressable>
                </View>
              </View>
            ))
          : null}
      </View>

      <Modal visible={showModal} transparent={true}>
        <UserModal
          setShowModal={setShowModal}
          SelectedUser={SelectedUser}
          getData={getData}
        />
      </Modal>
    </ScrollView>
  );
};

type User = {
  id: string; // or string, depending on your ID type
  name: string;
  username: string;
  email: string;
};

type UserModalProps = {
  SelectedUser: User | undefined; // Allow SelectedUser  to be undefined
  setShowModal: (value: boolean) => void; // Function to set modal visibility
  getData: () => void; // Function to fetch data
};

const UserModal = ({SelectedUser, setShowModal, getData}: UserModalProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    if (SelectedUser) {
      setName(SelectedUser.name);
      setEmail(SelectedUser.email);
      setUsername(SelectedUser.username);
    }
  }, [SelectedUser]);

  const updateUser = async () => {
    if (SelectedUser) {
      const url = 'http://192.168.200.145:3000/users';
      const id = SelectedUser.id;
      let result = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, username, email}),
      });
      result = await result.json();
      if (result) {
        setShowModal(false);
        getData();
      }
    }
  };

  return (
    <View style={styles.centerView}>
      <View style={[styles.ModalContainer, {}]}>
        <Text style={styles.headingText}>Form Details </Text>
        <TextInput
          style={styles.inputBox}
          value={name}
          onChangeText={(text: any) => setName(text)}
        />

        <TextInput
          style={styles.inputBox}
          value={username}
          onChangeText={(text: any) => setUsername(text)}
        />
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={(text: any) => setEmail(text)}
        />
        <View style={{marginBottom: 5}}>
          <Button title="Update" onPress={updateUser} />
        </View>
        <Button title="Close" onPress={() => setShowModal(false)} />
      </View>
    </View>
  );
};

export default JsonServerApi;

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
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  dataContainer: {
    flex: 1,
    paddingHorizontal: 10,

    backgroundColor: '#ccc',
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    // padding: 10,
    margin: 5,
    justifyContent: 'space-around',
  },
  btnUpdate: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 10,
  },
  btnDelete: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
  },
  btnText: {
    color: '#ccc',
    fontWeight: 'bold',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },
});
