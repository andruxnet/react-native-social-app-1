'use strict'

import React from 'react'
import { Component, View, StyleSheet, Text } from 'react-native'

import Button from 'Social/app/views/Button'
import LoadingView from 'Social/app/views/LoadingView'
import StyleVars from 'Social/app/StyleVars'
import SharedStyles from 'Social/app/SharedStyles'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 96,
    alignItems: "center"
  },
  reloadText: {
    textAlign: "center",
    marginVertical: 20
  },
  button: { width: 256 }
})

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      failed: true
    }
  }

  render() {
    if (this.state.failed) {
      return (
        <View style={[SharedStyles.screenContainer, styles.buttonContainer]}>
          <Text style={[SharedStyles.headingText, styles.reloadText]}>
            Could not fetch posts.
          </Text>
          <Button onPress={() => this._retryFetch()} style={styles.button}>
            Retry Now
          </Button>
        </View>
      )
    } else if (this.state.loaded) {
      return <View style={ SharedStyles.screenContainer } />
    } else {
      return (
        <LoadingView backgroundColor={StyleVars.Colors.mediumBackground}>
          Loading...
        </LoadingView>
      )
    }
  }

  _retryFetch() {

  }
}
