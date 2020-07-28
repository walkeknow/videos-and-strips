import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Content from './Content'

export class VideoView extends Component {
  render() {
    return (
      <View>
        <Header />
        <Content />
      </View>
    )
  }
}

export default VideoView
