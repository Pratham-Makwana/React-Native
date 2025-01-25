import {StyleSheet, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CreatePost = () => {
  const navigation = useNavigation();
  const [postText, setPostText] = useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder="whats in your mind"
        style={{height: 200, margin: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.popTo('PostScreen', {
            post: postText,
          });
        }}
      />
    </>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
