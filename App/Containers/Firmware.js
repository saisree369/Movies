import React, { Component } from 'react';
import { Dimensions, Text, View,StyleSheet,LogBox  } from 'react-native'

import PropTypes from "prop-types";
import { NavigationActions } from 'react-navigation';
import Header from './Header.js';




export default class Firmware extends Component {
  
  
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: 'Firmware'
            // title: params ? params.otherParam : 'Favorites',
            /* These values are used instead of the shared configuration! */
        };
    };

    constructor(props) {
    super(props);
    
    this.state = {
        isLoading: true,
        firmwareData:[],
      };
}

componentDidMount() {
  
    return fetch(
      "https://nakw2is0i9.execute-api.us-east-2.amazonaws.com/truffle-dev/device/ota_update?device=Boonta%20Eve&hardwareRev=1.0.1&fw_version=9.9.99",
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        
        this.setState({
          isLoading: false,
          firmwareData: responseJson
        }, function () {
          console.log(this.state.firmwareData);
            });
      })
      .catch(error => {
        console.log(error);
      });
  }

   render() {
     console.disableYellowBox = true;
        console.log("i'm in Firmware render");
        //console.log("i'm in Favorites render state count: " + JSON.stringify(this.state.count));
        //console.log("i'm in Favorites render and here is state: " + JSON.stringify(this.state));
  


        return (
			<View style={styles.container}>
      </View>
             
            
        )
      }
    }


const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',

    },  
     container: {
    flex: 1,
    backgroundColor: "#2c2a2a",
    alignItems: "center",
    justifyContent: "center",

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
    