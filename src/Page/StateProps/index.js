import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Operan from '../Operan';

export default class StateProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nilai: 0,
      sekolah: 'Xmen Academy',
    };
  }

  gantiState() {
    this.setState({
      sekolah: 'Peyek',
    });
  }

  render() {
    const {sekolah} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.isi}>Ini Adalah State : {sekolah}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.trigger}
            onPress={() => this.gantiState()}>
            <Text>Ganti State</Text>
          </TouchableOpacity>
          <Operan sekolah={sekolah} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  isi: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
  },
  trigger: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 10,
  },
});
