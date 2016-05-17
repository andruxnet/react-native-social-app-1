'use strict';

import React from 'react'
import {
  Component,
  TouchableOpacity,
  Text,
} from 'react-native'

export default class PostButton extends React.Component {
  render() {
    let style = { marginRight: 10, color: "white" };

    return (
      <TouchableOpacity
        style={this.props.style}
        activeOpacity={0.5}
        onPress={() => this.onPress()}
      >
        <Text style={style}>Post</Text>
      </TouchableOpacity>
    );
  }

  onPress() {
    //log user out
  }
}
