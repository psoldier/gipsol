import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  _onPressButton(val){
    Alert.alert("Seleccionaste la opcion " + val)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          
          <Text style={styles.titleText}>
            ¿Cuál de estos animales es mamifero?
          </Text>
        </View>
        <TouchableHighlight style={styles.answerdContainer} onPress={()=>this._onPressButton('COCODRILO')} underlayColor="slateblue">
          <Text>COCODRILO</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.answerdContainer} onPress={()=>this._onPressButton('HORMIGA')} underlayColor="slateblue">
          <Text>HORMIGA</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.answerdContainer} onPress={()=>this._onPressButton('VÍBORA DE CASCABEL')} underlayColor="slateblue">
          <Text>VÍBORA DE CASCABEL</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.answerdContainer} onPress={()=>this._onPressButton('RINOCERONTE')} underlayColor="slateblue">
          <Text>RINOCERONTE</Text>
        </TouchableHighlight>
      </View>
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
    borderWidth: 1,
  },
  answerdContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
    borderWidth: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});