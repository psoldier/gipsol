import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class RenderQuestion extends Component {
  _onPressButton(val){
    Alert.alert("Seleccionaste la opcion " + val)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <Text style={styles.titleText}>{this.props.question}</Text>
        </View>
        <TouchableHighlight style={[styles.answerdContainer,styles.answerdContainerA]} onPress={()=>this._onPressButton(this.props.answerdA)} underlayColor="slateblue">
          <Text>{this.props.answerdA}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.answerdContainer,styles.answerdContainerB]} onPress={()=>this._onPressButton(this.props.answerdB)} underlayColor="slateblue">
          <Text>{this.props.answerdB}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.answerdContainer,styles.answerdContainerC]} onPress={()=>this._onPressButton(this.props.answerdC)} underlayColor="slateblue">
          <Text>{this.props.answerdC}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.answerdContainer,styles.answerdContainerD]} onPress={()=>this._onPressButton(this.props.answerdD)} underlayColor="slateblue">
          <Text>{this.props.answerdD}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class Question extends Component {
  render() {
    return (
      <RenderQuestion question='¿Cuál de las siguientes fuentes de energía no es renovable?' 
        answerdA='HIDRÁULICA' 
        answerdB='SOLAR' 
        answerdC='EÓLICA' 
        answerdD='NUCLEAR'/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  answerdContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerdContainerA: {
    backgroundColor: '#2682a4',
  },
  answerdContainerB: {
    backgroundColor: '#2682b4',
  },
  answerdContainerC: {
    backgroundColor: '#2682c4',
  },
  answerdContainerD: {
    backgroundColor: '#2682d4',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});