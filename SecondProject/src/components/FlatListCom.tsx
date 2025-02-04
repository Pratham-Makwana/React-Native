import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import commanStyle from '../styles/styles';
import MapList from './MapList';
import HeaderComponent from './HeaderComponent';

const FlatListCom = () => {
  const UserInfo = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
  ];

  return (
    <View style={[styles.container]}>
      <Text style={commanStyle.headingText}>FlatList Component</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={UserInfo}
        // ListHeaderComponent={<HeaderComponent />}
        // ListFooterComponent={<MapList />}
        renderItem={({item}) => (
          <View key={item.id}>
            <View style={styles.data}>
              <Text style={styles.dataText}>Username : {item.username}</Text>
              <Text style={styles.dataText}>Name : {item.name}</Text>
              <Text style={styles.dataText}>Email : {item.email}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default FlatListCom;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  data: {
    backgroundColor: '#cccccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  dataText: {
    marginBottom: 2,
  },
});
