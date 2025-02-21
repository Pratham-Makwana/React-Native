import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      CartPrice: 0,
      FavoriteList: [],
      CartList: [],
      OrderHistoryList: [],
      addToCart: (cartItem: any) =>
        set(
          produce(state => {
            let found = false;
            for (let i = 0; i < state.CartList.length; i++) {
              // if item is present in the CartList
              if (state.CartList[i].id == cartItem.id) {
                found = true;
                let size = false;
                // item found loop througth that cart item price array
                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                  if (
                    state.CartList[i].prices[j].size == cartItem.prices[0].size
                  ) {
                    size = true;
                    state.CartList[i].prices[j].quantity++;
                    break;
                  }
                }
                // new size to that cart item
                if (size == false) {
                  state.CartList.prices.push(cartItem.prices[0]);
                }

                state.CartList[i].prices.sort((a: any, b: any) => {
                  // in case of charctor s > m > l
                  // base on size l is biggest m is middle and s is small
                  if (a.size > b.size) {
                    // here indicate that s is smaller one that why return -1
                    return -1;
                  }

                  if (a.size < b.size) {
                    return 1;
                  }

                  return 0;
                });
                break;
              } else {
              }
            }
            if (found == false) {
              // if CartList is Empty or Item is not Preset In CartList
              state.CartList.push(cartItem);
            }
          }),
        ),
      calculateCartPrice: () =>
        set(
          produce(state => {
            let totalPrice = 0;
            for (let i = 0; i < state.CartList.length; i++) {
              let tempPrice = 0;
              for (let j = 0; j < state.CartList[i].prices.length; j++) {
                tempPrice =
                  parseFloat(state.CartList[i].prices[j].price) *
                  state.CartList[i].prices[j].quantity;
              }
              state.CartList[i].ItemPrice = tempPrice.toFixed(2).toString();
              totalPrice = totalPrice + tempPrice;
            }
            state.CartPrice = totalPrice.toFixed(2).toString();
          }),
        ),

      addToFavoriteList: (type: string, id: string) =>
        set(
          produce(state => {
            if (type == 'Coffee') {
              for (let i = 0; i < state.CoffeeList.length; i++) {
                if (state.CoffeeList[i].id == id) {
                  if (state.CoffeeList[i].favourite == false) {
                    state.CoffeeList[i].favourite = true;
                    state.FavoriteList.unshift(state.CoffeeList[i]);
                  }
                  break;
                }
              }
            } else if (type == 'Beans') {
              for (let i = 0; i < state.BeansList.length; i++) {
                if (state.BeansList[i].id == id) {
                  if (state.BeansList[i].favourite == false) {
                    state.BeansList[i].favourite = true;
                    state.FavoriteList.unshift(state.BeansList[i]);
                  }
                  break;
                }
              }
            }
          }),
        ),

      deleteFromFavoriteList: (type: string, id: string) =>
        set(
          produce(state => {
            if (type == 'Coffee') {
              for (let i = 0; i < state.CoffeeList.length; i++) {
                if (state.CoffeeList[i].id == id) {
                  if (state.CoffeeList[i].favourite == true) {
                    state.CoffeeList[i].favourite = false;
                  }
                  break;
                }
              }
            } else if (type == 'Beans') {
              for (let i = 0; i < state.BeansList.length; i++) {
                if (state.BeansList[i].id == id) {
                  if (state.BeansList[i].favourite == true) {
                    state.BeansList[i].favourite = false;
                    state.FavoriteList.unshift(state.BeansList[i]);
                  }
                  break;
                }
              }
            }
            let spliceIndex = -1;
            for (let i = 0; i < state.FavoriteList.length; i++) {
              if (state.FavoriteList[i].id == id) {
                spliceIndex = i;
                break;
              }
            }
            state.FavoriteList.splice(spliceIndex, 1);
          }),
        ),
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
