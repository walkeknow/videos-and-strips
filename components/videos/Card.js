import React, { Component } from 'react'
import { Share, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { blue, darkGrey, white } from '../../utils/colors'
import { Video, PlayVideo } from './PlayVideo'

function Card({ item }) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: item.video_url,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          share(message)
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Sharing dismissed')
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View style={styles.container}>
      <PlayVideo url={item.video_url} />
      <View style={styles.desc}>
        <TouchableOpacity onLongPress={onShare}>
          <View style={styles.descTop}>
            <View style={styles.status}>
              <Text style={{ color: blue, fontWeight: '600' }}>New</Text>
            </View>
            <View style={styles.time}>
              <Text style={{ color: darkGrey }}>1 hr ago</Text>
            </View>
          </View>
          <View style={styles.descTitle}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </Text>
          </View>
          <View style={styles.descBottom}>
            <Text>Kewal Shah</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: white,
  },
  video: {
    backgroundColor: 'grey',
    height: 160,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  desc: {
    position: 'absolute',
    top: 150,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    justifyContent: 'space-between',
  },
  descTop: {
    flexDirection: 'row',
  },
  status: {
    flex: 1,
  },
})

export default Card
