import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Operan extends Component {
  render() {
    const {nilai, sekolah} = this.props;
    return (
      <View>
        <View>
          <Text style={styles.isi}>Ini Adalah Props : {nilai} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  isi: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
});
