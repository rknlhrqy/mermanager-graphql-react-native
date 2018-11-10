import React, { Component } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Mutation } from 'react-apollo';
import { ADD_MERMAN } from '../graphql/graphql';
// import axios from 'axios';
import { PLACE } from '../config/config';


@inject('mermenStore')
@observer
class AddMerman extends Component {
    initState = {
      name: '',
      location: '',
      mermanLocation: PLACE[0],
    };

  constructor(props) {
    super(props);
    this.state = this.initState;
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleMermanLocationChange = this.handleMermanLocationChange.bind(this);
  }

/*
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.submitNew(event, this.props);
    this.clearInput();
  }

  async submitNew(e, props) {
    e.preventDefault();
    const name = e.target.name.value;
    const location = e.target.location.value;
    try {
      const response = await axios.post('/srv/new', {name, location});
      if (response.status >= 200 && response.status < 300) {
        props.mermenStore.AddMerman(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  clearInput() {
    this.setState(this.initState);
  }
  handleMermanLocationChange(event) {
    this.setState({
      mermanLocation: event.target.value,
    });

  }
  */
  clearInput = () => {
    this.setState(this.initState);
  };
  updateLocation = (location) => {
    if (location !== 'None') {
      this.setState({location});
    }
  };
/*
  handlePress = () => {
    this.handleSubmit(this.props);
    this.clearInput();
    addMerman({
      variables: { name: this.state.name, location: this.state.location, },
    });
  };
 */
  handleSubmit = (props, data) => {
    debugger;
    if (data) props.mermenStore.AddMerman({
      id: data.addMerman.id,
      createdAt: data.addMerman.createdAt,
      name: data.addMerman.name,
      location: data.addMerman.location,
    });
  };
  render() {
    return(
        <View style={styles.container}>
          <Text>Name: {this.state.name}</Text>
          <TextInput
            style={{height: 20}}
            placeholder="Type your name"
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
          />
          <Text>Location: {this.state.location}</Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue = {this.state.location}
            onValueChange = {this.updateLocation}>
            <Picker.Item label = "Place select a location" value = "None" />
            <Picker.Item label = "Castle" value = "Castle" />
            <Picker.Item label = "Cave" value = "Cave" />
            <Picker.Item label = "Coral Reef" value = "Coral Reef" />
          </Picker>
          <Mutation mutation={ADD_MERMAN}>
            {(addMerman, { loading, error, data }) => (
              <View>
              <Button
                onPress = {() => {
                  // this.handleSubmit(this.props, data);
                  this.clearInput();
                  addMerman({
                    variables: {
                      name: this.state.name,
                      location: this.state.location
                    }
                  });
                }}
                title = "Add"
                color = "steelblue"
              />
              {console.log('#1', data)}
              {this.handleSubmit(this.props, data)}
              </View>
            )}
          </Mutation>
        </View>
    );
  }
}

export default AddMerman;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
   alignItems: 'center',
   padding: 5,
   backgroundColor: 'white',
 },
 picker: {
   width: 200,
   backgroundColor: '#FFF0E0',
   borderColor: 'black',
   borderWidth: 1,
 },
 pickerItem: {
   fontSize: 20,
   color: 'darkblue'
 },
});
