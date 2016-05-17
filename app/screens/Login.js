'use strict'

import React from 'react'
import {
  Component,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import Reflux from 'reflux'
import Actions from 'Social/app/Actions'
import Button from 'Social/app/views/Button'
import StyleVars from 'Social/app/StyleVars'

const styles = StyleSheet.create({})

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { isSignup: false }
    this.email = null
    this.password = null
  }

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView
          ref="scrollView"
          keyboardShouldPersistTaps={ false }
          automaticallyAdjustContentInsets={ true }
          alwaysBounceVertical={ false }
          style={ styles.scrollView }>

          <View style={ styles.innerContainer }>
            <Image
              source={require("Social/app/images/logo.png")}
              style={styles.logo} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
