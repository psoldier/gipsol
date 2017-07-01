import React, { Component } from 'react';
import { Alert, StyleSheet, Dimensions, Platform, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  _onPressButton(val){
    Alert.alert(val + " se encuentra en desarrollo")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} key={'Category'} onPress={()=>Actions.Category({ title: "Seleccione Categoría" })} underlayColor="slateblue">
          <Text style={styles.titleText}>| JUGAR | </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={()=>this._onPressButton("Trucoteca")} underlayColor="slateblue">
          <Text>Trucoteca</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={()=>this._onPressButton("Aportar Ideas")} underlayColor="slateblue">
          <Text>Aportar Ideas</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2682a4',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});