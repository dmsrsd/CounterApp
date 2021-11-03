import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

export default function CounterNumberHook() {
  const [nilai, rubahNilai] = useState(0);
  const [state, setstate] = useState(initialState);
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => rubahNilai(nilai + 1)}>
        <Text style={styles.textCounter}>Tambah</Text>
      </TouchableOpacity>
      <Text style={styles.number}>{nilai}</Text>
      <TouchableOpacity onPress={() => rubahNilai(nilai - 1)}>
        <Text style={styles.textCounter}>Kurang</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textCounter: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },
  number: {
    fontSize: 55,
    color: 'red',
    textAlign: 'center',
  },
});
