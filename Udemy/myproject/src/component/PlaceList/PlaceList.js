import React from 'react';
import {View, StyleSheet} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place}/>
      ));
      return(
        <View style={styles.listContainter}>
            {placesOutput}
        </View>
      )
}; 

const styles = StyleSheet.create({

    listContainter: {  
      width: "100%"
    }
  
});

export default placeList;