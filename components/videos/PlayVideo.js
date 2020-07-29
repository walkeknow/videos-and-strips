import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export class PlayVideo extends Component {
  state = {
    viewWidth: 0,
  }
  getViewWidth = (event) => {
    const { width } = event.nativeEvent.layout
    this.setState(() => ({
      viewWidth: width,
    }))
  }
  render() {
    const { url } = this.props
    return (
      <View style={styles.video} onLayout={(event) => this.getViewWidth(event)}>
        <VideoPlayer
          videoProps={{
            source: { uri: url },
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_COVER,
          }}
          showControlsOnLoad={true}
          showFullscreenButton={false}
          hideControlsTimerDuration={2000}
          videoBackground='transparent'
          height={160}
          width={this.state.viewWidth}
          disableSlider={true}
          textStyle={{ fontSize: 1 }}
        ></VideoPlayer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  video: {
    backgroundColor: 'grey',
    height: 160,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
})

export default Video
