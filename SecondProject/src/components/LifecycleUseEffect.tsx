import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import commanStyle from '../styles/styles';
import {RouteProp} from '@react-navigation/native';
import {LifeCyclenavigationProps, RootStackParamList} from '../types/types';

type LifeCycleRouteProps = RouteProp<RootStackParamList, 'LifeCycle'>;

type Props = {
  route: LifeCycleRouteProps;
  navigation: LifeCyclenavigationProps;
};

const LifecycleUseEffect = ({route, navigation}: Props) => {
  const [count, setCount] = useState(0);
  const {name} = route.params;
  console.warn(name);

  useEffect(() => {}, [count]);
  return (
    <View style={{marginTop: 10, paddingHorizontal: 10}}>
      <Text style={commanStyle.headingText}>LifecycleUseEffect</Text>
      <Button title="Update" onPress={() => setCount(count + 1)} />
      <Text style={{marginBottom: 5, textAlign: 'center', fontSize: 18}}>
        Value is: {count}
      </Text>

      {name && (
        <View style={styles.dataContainer}>
          <Text>Name is {name}</Text>
        </View>
      )}
    </View>
  );
};

export default LifecycleUseEffect;

const styles = StyleSheet.create({
  dataContainer: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    margin: 20,
    borderRadius: 10,
    padding: 10,
  },
});
