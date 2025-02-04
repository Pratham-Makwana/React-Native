import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const FetchData = () => {
  const [data, setData] = useState<any>([]);

  const getData = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    res = await res.json();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {data.length
        ? data.map((item: any) => (
            <View key={item.id} style={styles.dataContainer}>
              <Text>ID : {item.id}</Text>
              <Text>Title : {item.title}</Text>
              <Text>Body : {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default FetchData;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  dataContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});
