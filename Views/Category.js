import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';

export default class Category extends Component {
  render () {
    const slides = [{title: 'Energía Renovable'},{title: 'Transporte'}].map((entry, index) => {
      return (
        <TouchableHighlight key={`entry-${index}`} style={styles.carousel} onPress={Actions.Question} underlayColor="slateblue">
          <Text>{ entry.title }</Text>
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