import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    headerTintColor: '#809eb2',
    headerStyle:{ 
      backgroundColor: '#fff',
      elevation: 0,
      shadowOpacity: 0,
    },
  };

  constructor(props) {
    super(props);
  }

  handleBoxPress = () => {
    Alert.alert("You pressed a box!")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <View style={styles.horizonContainer}>
            <ScrollView
              horizontal = { true }
              showsHorizontalScrollIndicator = { false }
              endFillColor = { '#000'} >
              <TouchableHighlight style={styles.horizonBox} onPress = {this.handleBoxPress} >

                <Text>Box</Text>
              </TouchableHighlight>
              <TouchableOpacity style={styles.horizonBox}>
                <Text>Box</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.horizonBox}>
                <Text>Box</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.horizonBox}>
                <Text>Box</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <Text>Big Box</Text>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  boxContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  horizonContainer:{
    flexDirection: 'row',
  },
  horizonBox:{
    backgroundColor:'#738ea0',
    width:150,
    height:150,
    borderRadius: 5,
    elevation:5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  boxOne: {
    backgroundColor: '#bfced8',
    flex:2,
    marginBottom: 0,
  },
  boxTwo: {
    backgroundColor: '#809eb2',
    flex:4,
  },
});
