import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform, Text, TouchableHighlight, View } from 'react-native';
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
          <Text>
            { category.title } || Puntaje: { category.score } || Vidas: { category.lifes } || Maximo Historico: { category.maxScore }
          </Text>
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
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
});