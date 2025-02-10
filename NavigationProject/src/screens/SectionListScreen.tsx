import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SECTION_DATA = [
  {
    title: 'Men',
    data: ['Men Tshirt ', 'Men Shirt ', 'Men Jeans'],
  },
  {
    title: 'Women',
    data: ['Women Tshirt ', 'Women Shirt ', 'Women Jeans'],
  },
  {
    title: 'Kids',
    data: ['Kids Tshirt ', 'Kids Shirt ', 'Kids Jeans'],
  },
];
const SectionListScreen = () => {
  const handleRenderItem = ({item}: {item: string}) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );
  const handleSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => (
    <View >
      <Text>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SectionList Example</Text>
      <SectionList
        sections={SECTION_DATA}
        renderItem={handleRenderItem}
        renderSectionHeader={handleSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
