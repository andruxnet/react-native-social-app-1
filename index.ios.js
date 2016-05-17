import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import RootNavigator from 'Social/app/views/RootNavigator'

console.disableYellowBox = true

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

class Social extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <RootNavigator ref="rootNavigator" />
      </View>
    )
  }
}

AppRegistry.registerComponent('Social', () => Social);
