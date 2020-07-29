import React, { Component } from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoView from './components/videos/VideoView'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import middleware from './middleware'

const store = createStore(reducer, middleware)
const Tab = createBottomTabNavigator()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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

            {/* Todo: Implement Chemicals View */}
            <Tab.Screen name='Chemicals' component={VideoView} />
          </Tab.Navigator>
          <StatusBar style='auto' />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
