import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { white } from '../../utils/colors'

export class Content extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
  },
})

export default Content
