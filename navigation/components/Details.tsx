import {useNavigation} from '@react-navigation/native';
import {Button, View, StyleSheet, Text} from 'react-native';

function Details({route}) {
  const navigation = useNavigation();
  const {itemId, otherParam} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details Screen</Text>

      <Text style={styles.heading}>{itemId}</Text>
      <Text style={styles.heading}>{otherParam}</Text>
      <View style={styles.btnContainer}>
        <Button
          title="Go to Details Again"
          onPress={() => navigation.push('Details')}
        />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        <Button title="Go To Home" onPress={() => navigation.popTo('Home')} />
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
  btnContainer: {
    marginTop: 10,
    gap: 10,
  },
});

export default Details;
