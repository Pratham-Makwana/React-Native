import {AddToCart, RemoveFromCart, setUserData} from './constant';

const initialState: any = [];

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AddToCart:
      return [...state, action.data];
    case RemoveFromCart:
      let result = state.filter(item => item.name != action.data);
      return [...result];
    case setUserData:
      return [...state, action.data];
    default:
      return state;
  }
};
