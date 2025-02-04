import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commanStyle from '../styles/styles';

interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  data: string[];
}

type UserinfoProps = {
  userData: UserInfo[];
};

const SectionCom = ({userData}: UserinfoProps) => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={commanStyle.headingText}>Section List</Text>
      <SectionList
        sections={userData}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={styles.itemHeading}>{name}</Text>
        )}
      />
    </View>
  );
};

export default SectionCom;

const styles = StyleSheet.create({
  itemHeading: {
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 5,
  },
});
