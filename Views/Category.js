import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform, Text, TouchableHighlight, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  categories: state.categories,
})

class Category extends Component {
  render () {
    const {categories} = this.props
    const slides = categories.map((category) => {
      return (
        <TouchableHighlight key={`category-${category.id}`} style={styles.carousel} onPress={()=>Actions.Question(category)} underlayColor="slateblue">
          <Image source={{uri: `${category.source_name}`}} style={styles.container}>
            <View style={styles.categoryDescription}>
              <View style={{flex: 9}}></View>
              <View style={{flex: 1}}>
                <Text style={styles.categoryTitle}>
                  { category.title }
                </Text>
              </View>
              <View style={styles.stadistics}>
                <View style={styles.stadistics} >
                  <Text style={styles.categoryStadistics}>Puntaje: { category.score }</Text>
                </View>
                <View style={styles.stadistics} >
                  <Text style={styles.categoryStadistics}>Vidas: { category.lifes }</Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.categoryHistory}>
                  Maximo Historico: { category.maxScore }
                </Text>
              </View>
            </View>
          </Image>
        </TouchableHighlight>
      );
    });
    return (
      <Carousel sliderWidth={viewportWidth} itemWidth={viewportWidth} slideStyle={{ width: viewportWidth }} 
      inactiveSlideOpacity={1} inactiveSlideScale={1}>
        { slides }
      </Carousel>
    );
  }
}
export default connect(mapStateToProps)(Category)

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  categoryDescription:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle:{
    color: 'white',
    fontSize: 30
  },
  stadistics:{
    flex: 0.7,
    flexDirection: 'row'
  },
  categoryStadistics:{
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  categoryHistory:{
    color: 'white',
    fontSize: 20
  }
});