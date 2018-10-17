import React from 'react';
import { ScrollView, ActivityIndicator, ListView, StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
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
    this.state = {
      isLoading: true,
    }
  }

  //fetch('')
  componentDidMount() {
    return fetch('https://api.unsplash.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleBoxPress = () => {
    Alert.alert("You pressed a box!")
  }
/*
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
   
          height: .5,
          width: "100%",
          backgroundColor: "#000",
   
        }}
      />
    );
  }*/

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <View style={styles.horizonContainer}>
            <ScrollView
              horizontal = { true }
              showsHorizontalScrollIndicator = { false }
              endFillColor = { '#010'} >
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
        <View style={styles.boxContainer}>
          <ListView
            style={styles.listView}
            dataSource = {this.state.dataSource}
            renderRow = {
              (rowData) => <Text>Title: {rowData.width}, Release: {rowData.height}</Text>
            }
          />
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
    padding: 5
  },
  horizonBox:{
    backgroundColor:'#738ea0',
    width:150,
    height:150,
    borderRadius: 5,
    elevation:5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
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

  listView: {
    padding: 12,
  }
});
