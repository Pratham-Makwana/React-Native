import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from './redux/acttion';
const CartPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.reducer);
  console.log(userData);
  //   console.warn(userData.length);

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {userData.length ? userData.map(item => <Text>{item.id}</Text>) : null}
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({});
