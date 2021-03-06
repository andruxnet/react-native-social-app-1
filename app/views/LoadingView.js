'use strict'

import React from 'react'
import {
  Component,
  View,
  StyleSheet,
  Text,
  Proptypes,
  ActivityIndicatorIOS
} from 'react-native'

import StyleVars from 'Social/app/StyleVars';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: StyleVars.Colors.mediumBackground
  },
  text: {
    fontFamily: StyleVars.Fonts.general,
    color: StyleVars.Colors.primary,
    textAlign: "center",
    marginTop: 12
  }
});

export default class LoadingView extends Component {
  render() {
    if (this.props.backgroundColor) {
      var containerStyle = { backgroundColor: this.props.backgroundColor };
    }

    return (
      <View style={[styles.container, containerStyle]}>
        <ActivityIndicatorIOS color={StyleVars.Colors.primary} />
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  }
}
