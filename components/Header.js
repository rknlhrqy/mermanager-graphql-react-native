import React, { Component } from 'react';
import { Header } from 'react-native-elements';

class MyHeader extends Component {
  /*
  renderContent() {
    return <p style={{ margin: '0 10px'}}>Kening Ren</p>;
  }
  */

  render() {
    return(
      <Header
        centerComponent={{text: 'MerManager', style: {color: '#fff'}}}
      />
    );
  }
}

export default MyHeader;
