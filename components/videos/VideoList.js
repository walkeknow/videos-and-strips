import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import Card from './Card'
import { connect } from 'react-redux'
import { handleData } from '../../actions/shared'

export class VideoList extends Component {
  state = {
    isFetching: false,
  }
  onRefresh = () => {
    console.log('Fetching Again 1')
    this.setState(() => ({
      isFetching: true,
    }))
    this.props.dispatch(handleData()).then(() => {
      this.setState(() => ({
        isFetching: false,
      }))
    })
  }
  render() {
    const { isFetching } = this.state
    return (
      <View>
        {this.props.videos &&
        typeof this.props.videos.length !== 'undefined' ? (
          <FlatList
            refreshing={isFetching}
            onRefresh={() => this.onRefresh()}
            data={this.props.videos}
            renderItem={Card}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <ActivityIndicator size='large' />
        )}
      </View>
    )
  }
}

const mapStateToProps = (store) => {
  if (store && typeof store.videos !== 'undefined') {
    return {
      videos: store.videos,
    }
  } else return {}
}
export default connect(mapStateToProps)(VideoList)
