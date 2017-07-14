import React, { Component } from 'react';
import { Alert, StyleSheet, Dimensions, Platform, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { actionCreators } from '../reducer/reducer'

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories,
})
class Home extends Component {
  _onPressButton(val){
    Alert.alert(val + " se encuentra en desarrollo")
  }

  _onPressButtonCategory(){
    console.log("LISTAOD DE CATEGORIAS CUANDO SE TOCA 'JUGAR'");
    console.log(this.props.categories);

    const {dispatch} = this.props
    if(this.props.categories.length == 0){
      fetch('http://10.0.3.2:9292/api/categories')
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(actionCreators.addCategories(responseJson.categories));
      })
      .catch((error) => {
        console.error(error);
      });
    }

    Actions.Category({ title: "Seleccione Categoría" });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} key={'Category'} onPress={()=>this._onPressButtonCategory()} underlayColor="slateblue">
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
export default connect(mapStateToProps)(Home)

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