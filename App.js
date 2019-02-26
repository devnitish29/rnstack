/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppRoute from './src/navigator/AppNavigator';


export default class App extends Component {
  render() {
    return (
      <AppRoute />
    );
  }
}


