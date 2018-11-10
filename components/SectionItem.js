import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('mermenStore')
@observer
export default class SectionItem extends Component {
  render() {
    const { mermenStore, id } = this.props;
    const itemData = mermenStore.itemData.get(id);
    console.log('SectionItem id:', id);
    debugger;
    return(
      <Text style={styles.row}>{itemData.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});
