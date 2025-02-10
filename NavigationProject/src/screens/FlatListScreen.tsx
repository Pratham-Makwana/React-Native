import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FLAT_DATA = Array.from({length: 50}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));
const FlatListScreen = () => {
    const handleRenderItem = ({item} : {item : {id : string; title : string}}) => (
        <View style={styles.item}>
            <Text>{item.title}</Text>
        </View>
    )
  return (
    <View style={styles.container}>
      <Text style={styles.header}>FlatList Example </Text>
      <FlatList
      ListHeaderComponent={<Text style={styles.flatListHeader}>List Header</Text>}
      keyExtractor={item => item.id}
      data={FLAT_DATA}
      renderItem={handleRenderItem}
      showsVerticalScrollIndicator={false} 
      ListFooterComponent={<Text style={styles.flatListFooter}>List Footer</Text>}
      />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20
    },
    header : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    item : {
        padding : 10,
        borderBottomColor : '#ccc',
        borderBottomWidth : 1
    },
    flatListHeader:{
        fontSize : 20,
        fontWeight : 'bold'
    },
    flatListFooter : {
        fontSize : 20,
        fontWeight : 'bold'
    }
});
