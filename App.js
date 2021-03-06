import React, { Component } from 'react'
import App from './src/app'
import ListStore from './store'

import {
  AppRegistry,
  Navigator
} from 'react-native'

class ReactNativeMobX extends Component {
  renderScene (route, navigator) {
    return <route.component {...route.passProps} navigator={navigator} />
  }
  configureScene (route, routeStack) {
    if (route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
  }
  render () {
    return (
      <Navigator
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: App,
          passProps: {
            store: ListStore
          }
        }} />
    )
  }
}

AppRegistry.registerComponent('mobx2', () => ReactNativeMobX)