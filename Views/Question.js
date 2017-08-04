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

class ViewCounter extends Component {
          //<Text style={styles.pointText}>Puntaje: { this.props.score }</Text>
          //<Text style={styles.lifeText}>Vidas: { this.props.lifes }</Text>
  render() {
    return(
      <View style={styles.counter}>
        <View style={styles.stadistics} >
          <Text style={styles.pointText}>Puntaje: { this.props.score }</Text>
        </View>
        <View style={styles.stadistics} >
          <Text style={styles.lifeText}>Vidas: { this.props.lifes }</Text>
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
    backgroundColor: '#41D01D',
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
      if(this.props.category.lifes == 0)
        Actions.pop();
      dispatch(actionCreators.remove(this.props.category));
    }
    this.setState({
      modalVisible: true,
      backgroundColor: (result) ? '#42e2a8' : '#c83652',
      text: (result) ? 'Correcto!' : 'Incorrecto!',
    });
  }

  render() {
    const options = this.props.category.questions.find(q => q.id == this.props.category.question_id).options.map((option) => {
      return (
        <RenderAnswerd key={`answerd-${option.id}`} answerd={ option.text } bgcolor='#2682a4' _onPressButton={()=>this._onPressButton(option.value)}/> 
      )
    });
    const questionText = this.props.category.questions.find(q => q.id == this.props.category.question_id).question;
    return (
      <View style={styles.container}>
        <Modal animationType={"slide"} transparent={false} visible={this.state.modalVisible}>
          <TouchableHighlight onPress={()=>this._hideModalVisible()} style={[styles.modalContainer,{backgroundColor: this.state.backgroundColor}]}>
            <Text style={styles.titleText}>
              {this.state.text}
            </Text>
          </TouchableHighlight>
        </Modal>
        <RenderQuestion question={ questionText } />
        { options }
        <ViewCounter score={this.props.category.score} lifes={this.props.category.lifes}/>
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
  counter:{
    flex: 0.3,
    flexDirection: 'row'
  },
  stadistics:{
    flex: 1,
    flexDirection: 'row'
  },
  pointText:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2682a4',
    textAlign: 'left',
    fontSize: 18
  },
  lifeText:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2682a4',
    textAlign: 'right',
    fontSize: 18
  }
});