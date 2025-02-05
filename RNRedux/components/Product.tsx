import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './redux/acttion';

export type ProductItems = {
  id: number;
  name: string;
  color: string;
  price: number;
  imageUrl: string;
};

export type Props = {
  item: ProductItems;
};
const Product = ({item}: Props) => {
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (item: ProductItems) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item: ProductItems) => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productColor}>{item.color}</Text>
          <Text style={styles.productPrice}>{item.price.toFixed(2)}</Text>
          {isAdded ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleRemoveFromCart(item)}>
              <Text style={styles.buttonText}>Remove From Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart(item)}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  descriptionContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productColor: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007BFF', // Bootstrap primary color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
