import React, { Component } from 'react';
import { Text, SectionList, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { PLACE } from '../config/config';
import SectionItem from './SectionItem';

@inject('mermenStore')
@observer
export default class MermanList extends Component {
  /*
  sections = [];
  convert = (mermen) => {
    PLACE.forEach((place, i) =>{
      let section = {
        id: '',
        title: '',
        data: [],
      };
      section.id = i;
      section.title = place;
      section.data = mermen.filter(each => each.location === place);
      this.sections.push(section);
    });
  };
  */
  extractKey = ({id}) => id;
/*
  renderItem = ({item}) => {
    return(
      <Text style={styles.row}>
        {item.name}
      </Text>
    );
  };
*/
  renderItem = ({item}) => {
    return(
      <SectionItem id={item.key}/>
    );
  };

  renderSectionHeader = ({section}) => {
    return(
      <Text style={styles.header}>
        {section.title}
      </Text>
    );
  };

  render() {
    debugger;
    // this.convert(this.props.mermenStore.sortedMermenResult);
    // this.convert(this.props.mermenStore.mermenResult);
    return(
      <SectionList
        style={styles.container}
        sections={this.props.mermenStore.mermenSectionList}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={this.extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
});
