import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Ellipse extends Component {
  render() {
    return (
      <View style={styles.ellipse} />
    );
  }
}

const styles = StyleSheet.create({
  ellipse: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 100,  // Makes the View round. Adjust as needed.
    backgroundColor: 'rgba(176, 170, 209, 0.13)',
  },
});

export default Ellipse;
