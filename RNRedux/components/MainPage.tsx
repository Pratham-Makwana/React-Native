import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Product from './Product';
import Header from './Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MainPage'>;

function MainPage({navigation}: Props): JSX.Element {
  const products = [
    {
      id: 1,
      name: 'Smasung S24',
      color: 'white',
      price: 54000,
      imageUrl:
        'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-sm-s921blbcins-539572327?$684_547_JPG$',
    },
    {
      id: 2,
      name: 'Iphone 16',
      color: 'Black',
      price: 65000,
      imageUrl:
        'https://www.imagineonline.store/cdn/shop/files/iPhone_16_Black_PDP_Image_Position_1__en-IN_d4f6e552-2388-4c83-9dfb-0c77c3a269f9.jpg?v=1727247638&width=823',
    },
    {
      id: 3,
      name: 'OnePlus 13',
      color: 'Grey',
      price: 60000,
      imageUrl:
        'https://oasis.opstatics.com/content/dam/oasis/page/2024/global/phones/13r/specs/13R-Trail.png',
    },
  ];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header navigation={navigation} />
        <ScrollView>
          {products.map(item => (
            <Product key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default MainPage;
