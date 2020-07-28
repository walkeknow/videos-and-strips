import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoView from './components/videos/VideoView'
import StripView from './components/strips/StripView'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

const Tab = createBottomTabNavigator()

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Videos') {
                if (Platform.OS === 'ios')
                  iconName = focused ? 'ios-play-circle' : 'ios-play'
                else iconName = focused ? 'md-play-circle' : 'md-play'
              } else if (route.name === 'Chemicals') {
                if (Platform.OS === 'ios') iconName = 'ios-flask'
                else iconName = 'md-flask'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name='Videos' component={VideoView} />
          <Tab.Screen name='Chemicals' component={StripView} />
        </Tab.Navigator>
        <StatusBar style='auto' />
      </NavigationContainer>
    )
  }
}

export default App
