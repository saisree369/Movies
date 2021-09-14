import React, { Component } from 'react';
import { Dimensions, Text, View,StyleSheet,LogBox  } from 'react-native'

import PropTypes from "prop-types";
import { NavigationActions } from 'react-navigation';
import Header from './Header.js';




export default class Favorites extends Component {
  
  constructor() {
    super();

    /**
    * Returns true if the screen is in portrait mode
    */
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape'
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });

  }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: 'Favorites'
            // title: params ? params.otherParam : 'Favorites',
            /* These values are used instead of the shared configuration! */
        };
    };

   render() {
     console.disableYellowBox = true;
        console.log("i'm in Favorites render");
        //console.log("i'm in Favorites render state count: " + JSON.stringify(this.state.count));
        //console.log("i'm in Favorites render and here is state: " + JSON.stringify(this.state));
  

if (this.state.orientation === 'portrait') {
  return (
    <View style={styles.container}>
      <Header {...this.props}/>
      <View style={styles.MainContainer}>
          <Text style ={{fontSize:20,color:"#fff",alignItems:"center"}}>Favourites</Text>
      </View>
    </View>
  )
}else{
   return (
    <View style={styles.container}>
      <Header {...this.props}/>
      <View style={styles.MainContainer}>
          <Text style ={{fontSize:20,color:"#fff",alignItems:"center"}}>Favourites</Text>
      </View>
    </View>
  )
}
}
}


const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',   
        backgroundColor: "#2c2a2a",
    },  
     container: {
    flex: 1,
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#808080",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#B22222",
  },
   });  
    