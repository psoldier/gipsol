import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { reducer } from './reducer/reducer'
const store = createStore(reducer)

import Home from './Views/Home';
import Category from './Views/Category';
import Question from './Views/Question';

export default class GipsolApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="Home" hideNavBar={true} component={Home} initial={true}/>
            <Scene key="Category" hideNavBar={false} component={Category} />
            <Scene key="Question" hideNavBar={false} component={Question} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

console.ignoredYellowBox = ['Warning: BackAndroid']