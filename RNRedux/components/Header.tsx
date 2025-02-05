import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/types';

type HeaderProps = {
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'MainPage'
  >['navigation'];
};

const Header = ({navigation}: HeaderProps) => {
  const [cartitems, setCartItem] = useState(0);

  const cartData = useSelector(state => state.reducer);
  // console.warn(cartData);

  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>My Shop</Text>
      <TouchableOpacity
        style={styles.cartIconContainer}
        onPress={() => navigation.navigate('CartPage')}>
        <Text style={styles.cartCount}>{cartitems}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    elevation: 2, // For Android shadow
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCount: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
