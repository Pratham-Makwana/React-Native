import {ProductItems} from '../Product';
import {AddToCart, RemoveFromCart, UserList} from './constant';

export function addToCart(item: ProductItems) {
  return {
    type: AddToCart,
    data: item,
  };
}

export function removeFromCart(item) {
  return {
    type: RemoveFromCart,
    data: item,
  };
}

export function getUserList() {
  return {
    type: UserList,
  };
}
