import React, { Component } from 'react';
import { Alert, AsyncStorage, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class RenderQuestion extends Component {
  render() {
    return (
      <View style={styles.questionContainer}>
        <Text style={styles.titleText}>{this.props.question}</Text>
      </View>
    );
  }
}

class RenderAnswerd extends Component {
  render() {
    return (
      <TouchableHighlight style={[styles.answerdContainer,{backgroundColor: this.props.bgcolor}]} onPress={this.props._onPressButton} underlayColor="slateblue">
        <Text>{this.props.answerd}</Text>
      </TouchableHighlight>
    );
  }
}

export default class Question extends Component {
  state = {
    modalVisible: false,
    backgroudColor: '#41D01D',
    text: ''
  }

  /*_addPoint(){
    try {
      total = this._getPoints() + 1;
      AsyncStorage.setItem('@Categorias:renovables', total);
    } catch (error) {
      // Error saving data
    }
  }*/

  _getPoints(){
    return 12;
  }
    /*try {
      const value = AsyncStorage.getItem('@Categorias:renovables');
      if (value !== null){
        return value;
      }else{
        return 0;
      }
    } catch (error) {
      // Error retrieving data
    }*/

  _hideModalVisible(){
  //Si todavia tiene vidas =>Reload de la siguiente pregunta
  //Si se quedó sin vidas => volver a Categorías poniendo el puntaje historico
    this.setState({modalVisible: false});
  }

 _onPressButton(result){
    this.setState({
      modalVisible: true,
      backgroudColor: (result) ? '#41D01D' : '#F80A0A',
      text: (result) ? 'Correcto!' : 'Incorrecto!'
    });
  }

  render() {
    //incluir arriba la cantidad de vidas
    return (
      <View style={styles.container}>
        <Modal animationType={"slide"} transparent={false} visible={this.state.modalVisible}>
          <View style={[styles.modalContainer,{backgroundColor: this.state.backgroudColor}]}>
            <Text style={styles.titleText}>
              {this.state.text}
            </Text>
            <TouchableHighlight onPress={()=>this._hideModalVisible()}>
              <Text>Siguiente</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <RenderQuestion question='¿Cuál de las siguientes fuentes de energías no es renovable?'/> 
        <RenderAnswerd answerd='HIDRÁULICA' bgcolor='#2682a4' _onPressButton={()=>this._onPressButton(false)}/> 
        <RenderAnswerd answerd='SOLAR' bgcolor='#2682b4' _onPressButton={()=>this._onPressButton(false)}/>
        <RenderAnswerd answerd='EÓLICA' bgcolor='#2682c4' _onPressButton={()=>this._onPressButton(false)}/> 
        <RenderAnswerd answerd='NUCLEAR' bgcolor='#2682d4' _onPressButton={()=>this._onPressButton(true)}/> 
        <View>
          <Text>{this._getPoints()} PUNTOS</Text>
        </View>
      </View>
    );
    //incluir abajo el puntaje total
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  questionContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  answerdContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});