import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {tambahCounter, kurangCounter, resetCounter} from '../../Redux/action';

const CountWithRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector(data => data.counter);
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonMinus}
          onPress={() => dispatch(kurangCounter(counter))}>
          <Text style={styles.minus}>-</Text>
        </TouchableOpacity>
        <Text style={styles.isi}>{counter}</Text>
        <TouchableOpacity
          style={styles.buttonPlus}
          onPress={() => dispatch(tambahCounter(counter))}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonReset}
          onPress={() => dispatch(resetCounter(counter))}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountWithRedux;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 70,
    padding: 30,
  },
  isi: {
    marginTop: 10,
    fontSize: 50,
    color: 'black',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonPlus: {
    backgroundColor: 'skyblue',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  plus: {
    fontSize: 40,
    color: 'black',
  },
  buttonMinus: {
    backgroundColor: 'red',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  minus: {
    fontSize: 40,
    color: 'black',
  },

  reset: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
