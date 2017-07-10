import React, { Component } from 'react';
import { Alert, AsyncStorage, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import { actionCreators } from '../reducer/reducer'

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

class BoardCounter extends Component {
  render() {
    return(
      <View>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{this.props.score}</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{this.props.lifes}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.filter(function(category) { return category.id == ownProps.id })[0],
})
class Question extends Component {
  state = {
    modalVisible: false,
    backgroudColor: '#41D01D',
    text: '',
  }

  _hideModalVisible(){
  //Si todavia tiene vidas =>Reload de la siguiente pregunta
  //Si se quedó sin vidas => volver a Categorías poniendo el puntaje historico
    this.setState({modalVisible: false});
  }

 _onPressButton(result){
    const {dispatch} = this.props

    if(result){
      dispatch(actionCreators.add(this.props.category));
    }else{
      dispatch(actionCreators.remove(this.props.category));
    }
    this.setState({
      modalVisible: true,
      backgroudColor: (result) ? '#42e2a8' : '#c83652',
      text: (result) ? 'Correcto!' : 'Incorrecto!',
    });
  }

  render() {
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
        <BoardCounter score={this.props.category.score} lifes={this.props.category.lifes}/>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Question)

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
  counterContainer: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.5
  },
  counterText: {
    fontSize: 20,
    width: 70,
    textAlign: 'center',
    color: '#ffffff'
  }
});