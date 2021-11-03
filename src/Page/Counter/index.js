import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import Operan from '../Operan';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nilai: 0,
    };
  }

  tambahNilai() {
    this.setState({
      nilai: this.state.nilai + 1,
    });
  }

  kurangNilai() {
    this.setState({
      nilai: this.state.nilai == 0 ? 0 : this.state.nilai - 1,
    });
  }

  reset() {
    this.setState({
      nilai: (this.setState.nilai = 0),
    });
  }

  render() {
    const {nilai} = this.state;
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => this.tambahNilai()}>
          <Text style={styles.textCounter}>Tambah</Text>
        </TouchableOpacity>
        <Text style={styles.number}>{nilai}</Text>
        <TouchableOpacity onPress={() => this.kurangNilai()}>
          <Text style={styles.textCounter}>Kurang</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => this.reset()}>
            <Text style={styles.textReset}>Reset</Text>
          </TouchableOpacity>
        </View>

        <Operan nilai={nilai} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textCounter: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
  },
  number: {
    textAlign: 'center',
    fontSize: 55,
    color: 'red',
  },
  textReset: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
  },
});
