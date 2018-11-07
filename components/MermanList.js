import React, { Component } from 'react';
import { Text, SectionList, StyleSheet } from 'react-native';
import { PLACE } from '../config/config';

export default class MermanList extends Component {
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
  extractKey = ({id}) => id;

  renderItem = ({item}) => {
    return(
      <Text style={styles.row}>
        {item.name}
      </Text>
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
    this.convert(this.props.mermen);
    return(
      <SectionList
        style={styles.container}
        sections={this.sections}
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
