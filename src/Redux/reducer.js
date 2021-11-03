import {tambahCounter, kurangCounter} from './action';
import {KURANG, RESET, TAMBAH} from './type';

const initData = {
  counter: 0,
};

//TEMPAT FUNCTION
export const reducerCounter = (state = initData, action) => {
  switch (action.type) {
    case TAMBAH:
      console.log('CEK TAMBAH COUNTER');
      return {...state, counter: action.data + 1};
    case KURANG:
      console.log('CEK KURANG COUNTER');
      return {...state, counter: action.data == 0 ? 0 : action.data - 1};
    case RESET:
      console.log('RESET COUNTER');
      return {...state, counter: (action.data = 0)};
    default:
      return state;
  }
};
