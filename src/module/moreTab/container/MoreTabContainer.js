import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MoreTabComponent from '../components/MoreTabComponent';

export class MoreTabContainer extends Component {

  onServicesClicked = () =>{
    this.props.navigation.navigate('Feedback');
  }

  render() {
    return (
      < MoreTabComponent onNavigate={this.onServicesClicked} />
    )
  }
}

export default MoreTabContainer
