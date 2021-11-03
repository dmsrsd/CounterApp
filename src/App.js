import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import CountWithRedux from './Page/CounterWithRedux';
import {Provider} from 'react-redux';
import storeState from './Redux/store';
import MyCrud from './CRUD';

export default class App extends Component {
  render() {
    return (
      <Provider store={storeState}>
        <SafeAreaView>
          {/* <CountWithRedux /> */}
          <MyCrud />
        </SafeAreaView>
      </Provider>
    );
  }
}
