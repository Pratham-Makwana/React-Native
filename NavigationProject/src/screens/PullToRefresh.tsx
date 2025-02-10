import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const INITIAL_DATA = Array.from({length: 20}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.item}>
      <Text style={styles.itemTxt}>{item.title}</Text>
    </View>
  );

  const loadMoreItems = () => {
    if (!loading) {
      setLoading(true);

      setTimeout(() => {
        const newItems = Array.from({length: 10}, (_, index) => ({
          id: (data.length + index).toString(),
          title: `Item ${data.length + index + 1}`,
        }));
        setData([...data, ...newItems]);
        setLoading(false);
      }, 1000);
    }
  };
  const handleOnRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(INITIAL_DATA);
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PullToRefresh</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
        onEndReached={loadMoreItems}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              size={'large'}
              style={styles.loader}
            //   color={'#0000FF'}
            />
          ) : null
        }
      />
    </View>
  );
};

export default PullToRefresh;

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
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemTxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loader: {
    marginVertical: 10,
  },
});
