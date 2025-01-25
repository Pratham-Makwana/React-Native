import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const PostScreen = ({route}) => {
  const navigation = useNavigation();

  useEffect(() => {
    
  }, [route.params?.post]);
  return (
    <View style={styles.container}>
      <Button
        title="CreatePost"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={styles.postText}>Post:{route.params?.post}</Text>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postText: {
    fontSize: 24,
    marginTop: 10,
  },
});
