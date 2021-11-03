import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Counter from './Counter';
import CountWithRedux from './CounterWithRedux';
import StateProps from './StateProps';
import {Provider} from 'react-redux';
import storeState from './Redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={storeState}>
        <SafeAreaView>
          {/* <StateProps /> */}
          {/* <Counter /> */}
          <CountWithRedux />
        </SafeAreaView>
      </Provider>
    );
  }
}
