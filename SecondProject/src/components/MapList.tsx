import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commanStyle from '../styles/styles';
import SectionCom from './SectionCom';
import LifecycleUseEffect from './LifecycleUseEffect';
import Loader from './Loader';
import ModalCom from './ModalCom';
import PressableCompo from './PressableCompo';

const MapList = () => {
  const UserInfo = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
  ];
  return (
    <View>
      <Text style={commanStyle.headingText}>MapList</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {UserInfo.map((data, index) => (
          <View key={index} style={styles.data}>
            <Text style={styles.dataText}>{data.username}</Text>
            <Text style={styles.dataText}>{data.name}</Text>
            <Text style={styles.dataText}>{data.email}</Text>
          </View>
        ))}

        {/* Grid View */}
        <Text style={commanStyle.headingText}>GridList</Text>
        <View style={styles.gridStyle}>
          {UserInfo.map(item => (
            <View key={item.id} style={styles.gridBox}>
              <Text style={styles.gridText}>{item.username}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
  
    </View>
  );
};

export default MapList;

const styles = StyleSheet.create({
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
  gridStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  gridBox: {
    height: 100,
    width: 100,
    backgroundColor: '#338cff',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gridText: {
    fontSize: 20,
    color: '#fff',
  },
});
