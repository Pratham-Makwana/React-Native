import {View, Button, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home Screen</Text>
      <View style={styles.detailsBtn}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          title="Post Show"
          onPress={() => navigation.navigate('PostScreen')}
        />
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  detailsBtn: {
    marginBottom: 10,
  },
  btnContainer: {
    gap: 10,
  },
});

export default Home;
