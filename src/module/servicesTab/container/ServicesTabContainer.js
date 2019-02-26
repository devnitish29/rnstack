import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ServiceTabComponent from '../components/ServiceTabComponent'

class ServicesTabContainer extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ServiceTabComponent />
      </View>
    )
  }
}

export default ServicesTabContainer
