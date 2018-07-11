import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

export default class app7 extends Component {
  render(){
    return(
      <Text>BAnanan</Text>
    );
  }
}

AppRegistry.registerComponent('simpleCalculator', () => app7);
