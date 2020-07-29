import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { blue, darkGrey } from '../../utils/colors'
import { Video, PlayVideo } from './PlayVideo'

const title = 'video small'

function Card() {
  return (
    <View style={styles.container}>
      <PlayVideo/>
      <View style={styles.desc}>
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
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Text>
        </View>
        <View style={styles.descBottom}>
          <Text>Kewal Shah</Text>
        </View>
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
