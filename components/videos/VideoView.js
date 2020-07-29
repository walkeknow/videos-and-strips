import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Content from './Content'
import { connect } from 'react-redux'
import { handleData } from '../../actions/shared'

export class VideoView extends Component {
  componentDidMount() {
    this.props.dispatch(handleData())
  }
  render() {
    return (
      <View>
        <Header />
        <Content />
      </View>
    )
  }
}

export default connect()(VideoView)
