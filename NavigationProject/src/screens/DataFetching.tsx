import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

interface POST {
  id: string;
  title: string;
}
const DataFetching = () => {
  const [data, setData] = useState<POST[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfPost = async () => {
    try {
        setLoading(true)
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data: POST[] = await response.json();
      if (data) {
        setData(data);
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchListOfPost();
  }, []);
//   console.log('==>', data);

  const renderItem = ({item}: {item: POST}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DataFetching</Text>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default DataFetching;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
