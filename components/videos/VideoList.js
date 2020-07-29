import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { VIDEO_DATA } from '../../utils/VIDEO_DATA'
import Card from './Card'

export class VideoList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={VIDEO_DATA.videos}
          renderItem={Card}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

export default VideoList
