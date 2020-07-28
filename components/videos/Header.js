import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { darkGrey } from '../../utils/colors'
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'

class Header extends Component {
  state = {
    image: null,
  }
  componentDidMount() {
    if (Constants.platform.ios) {
      ImagePicker.requestCameraRollPermissionsAsync().then(({ status }) => {
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      })
      ImagePicker.requestCameraPermissionsAsync().then(({ status }) => {
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      })
    }
  }
  imagePickerAlert = () =>
    Alert.alert('Select Image From', '', [
      {
        text: 'Gallery',
        onPress: () => this.getImageFromGallery(),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Camera', onPress: () => this.getImageFromCamera() },
    ])
  getImageFromGallery = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 1],
    }).then((result) => {
      if (result.cancelled) {
        return
      }

      return this.setState(() => ({ image: result.uri }))
    })
  }
  getImageFromCamera = () => {
    ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 1],
    }).then((result) => {
      if (result.cancelled) {
        return
      }

      return this.setState(() => ({ image: result.uri }))
    })
  }
  render() {
    const { image } = this.state
    return (
      <View>
        <View style={{ height: Constants.statusBarHeight }}></View>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View style={styles.date}>
              <Text style={{ color: darkGrey, fontWeight: 'bold' }}>TODAY</Text>
            </View>
            <View style={styles.title}>
              <Text style={{ fontSize: 35, fontWeight: 'bold' }}>My Feed</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={this.imagePickerAlert}>
              <Image
                style={styles.profilePic}
                source={
                  this.state.image === null
                    ? require('../../images/user.png')
                    : { uri: image }
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 92,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    borderBottomColor: darkGrey,
    padding: 20,
  },
  textContainer: {
    flex: 3,
  },
  imageContainer: {
    flex: 1,
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  profilePic: {
    height: 35,
    width: 35,
    borderRadius: 35,
  },
  date: {
    height: 20,
  },
  title: {
    justifyContent: 'flex-end',
    height: 40,
  },
})

export default Header
