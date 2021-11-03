import {TAMBAH, KURANG, RESET} from './type';

//DEKLRASI Type dan VALUE
export const tambahCounter = counter => ({
  type: TAMBAH,
  data: counter,
});

export const kurangCounter = counter => ({
  type: KURANG,
  data: counter,
});

export const resetCounter = counter => ({
  type: RESET,
  data: counter,
});
