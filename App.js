import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Category from './Views/Category';
import Question from './Views/Question';

export default class GipsolApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Category" hideNavBar={true} component={Category} initial={true}/>
          <Scene key="Question" hideNavBar={false} component={Question} title="Energía Renovable" />
        </Scene>
      </Router>
    )
  }
}