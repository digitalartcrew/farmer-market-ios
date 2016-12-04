'use strict';

import React, {Component} from 'react';
import {NavigatorIOS, StyleSheet, AppRegistry} from 'react-native';

let SearchPage = require('./SearchPage');

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class FarmersMarketFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'FarmersMarketFinder',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('FarmersMarketFinder', function() { return FarmersMarketFinderApp });
