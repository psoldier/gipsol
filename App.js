import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Views/Home';
import Category from './Views/Category';
import Question from './Views/Question';

export default class GipsolApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" hideNavBar={true} component={Home} initial={true}/>
          <Scene key="Category" hideNavBar={false} component={Category} />
          <Scene key="Question" hideNavBar={false} component={Question} />
        </Scene>
      </Router>
    )
  }
}

console.ignoredYellowBox = ['Warning: BackAndroid']