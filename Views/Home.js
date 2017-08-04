import React, { Component } from 'react';
import { Alert, StyleSheet, Dimensions, Platform, Text, TouchableHighlight, View, Image } from 'react-native';
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
    const {dispatch} = this.props
    if(this.props.categories.length == 0){
      fetch('http://ec2-54-213-101-179.us-west-2.compute.amazonaws.com/api/categories')
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
      <Image source={require('./img/home.jpg')} style={styles.containerImage}>
        <TouchableHighlight style={styles.button} key={'Category'} onPress={()=>this._onPressButtonCategory()} underlayColor="slateblue">
          <View style={{flex: 1}}>
            <View style={{flex: 9}}></View>
            <View style={{flex: 1}}>
              <Text style={styles.titleText}>GIPSOL</Text>
            </View>
          </View>
        </TouchableHighlight>
      </Image>
    );
  }
}
export default connect(mapStateToProps)(Home)


/*        
  <TouchableHighlight style={styles.button} onPress={()=>this._onPressButton("Trucoteca")} underlayColor="slateblue">
    <Text>Trucoteca</Text>
  </TouchableHighlight>
  <TouchableHighlight style={styles.button} onPress={()=>this._onPressButton("Aportar Ideas")} underlayColor="slateblue">
    <Text>Aportar Ideas</Text>
  </TouchableHighlight>
*/
const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2682a4',
  },
  titleText: {
    fontSize: 35,
    color: 'white'
  }
});