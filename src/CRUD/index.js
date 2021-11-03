import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class MyCrud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      data: [],
      index: 0,
      editMode: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  create = text => {
    let data = this.state.data;

    data.push({item: text});

    this.setState({data: data});
    console.log('data', data);

    this.saveData(data);
  };

  //Save Data ke AsyncStorage
  saveData = async data => {
    try {
      await AsyncStorage.setItem('@database', JSON.stringify(data));
    } catch (error) {
      console.log('SAVE ERROR', error);
    }
    this.setState({});
  };

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('@database');
      value = JSON.parse(value);

      if (value !== null) {
        this.setState({data: value});
        console.log('VALUE', value);
      }
    } catch (error) {
      console.log('GET ERROR', error);
    }
  };

  editData = () => {
    let data = this.state.data;

    data[this.state.index].item = this.state.text;
    this.setState({data, editMode: false, text: ''});

    this.saveData(data);
  };

  deleteData = () => {
    let data = this.state.data;

    data.splice(this.state.index, 1);

    this.setState({data});

    this.saveData(data);
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          placeholder="Masukan Data"
        />

        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() =>
            this.state.editMode ? this.editData() : this.create(this.state.text)
          }>
          <Text style={styles.textAdd}> Add New Data</Text>
        </TouchableOpacity>

        <FlatList
          style={styles.listData}
          data={this.state.data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.textList}
              onPress={() =>
                this.setState({text: item.item, index: index, editMode: true})
              }>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textItem}>{item.item}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({index}, () => this.deleteData())
                    }>
                    <Text style={styles.deleteButton}>X Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
          //   keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 70,
    borderWidth: 2,
    color: 'black',
    fontWeight: 'bold',
    borderColor: 'grey',
    fontSize: 20,
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  textAdd: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  textList: {
    marginVertical: 10,
    backgroundColor: 'skyblue',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  listData: {
    marginTop: 10,
    padding: 10,
  },
  textItem: {
    fontSize: 25,
    color: 'black',
    flex: 1,
  },
  deleteButton: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
