import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { white } from '../../utils/colors'
import VideoList from './VideoList'

export class Content extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VideoList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    justifyContent: 'center',
    padding: 20,
  },
})

export default Content
