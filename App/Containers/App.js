import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text,Image, TouchableOpacity, Alert,SafeAreaView } from 'react-native'; 
import Orientation from 'react-native-orientation-locker';
import GlobalProps from '../Config/GlobalProps';
import RootContainer from './RootContainer'
import LoginScreen from "./LoginScreen";
import LaunchScreen from "./LaunchScreen";

export default class App extends React.Component{ 
  constructor()
  { 
    super();  
    this.state=
    {  
      isVisible : true,  
      isConnected: true
    }  
  }  

  Hide_Splash_Screen=()=>{  
  this.setState({   
    isVisible : false   
  });  
  }  


  componentWillMount() {
    console.log("App.js componentWillMount");

    // set initial device orientation
    GlobalProps.orientation = Orientation.getInitialOrientation();
    Orientation.addDeviceOrientationListener(this._orientationChanged);

	
  }

  _orientationChanged = (orientation) => {
    console.log("App.js _orientationChanged: " + orientation);

    if (orientation === 'UNKNOWN') return;
    
    GlobalProps.orientation = orientation;
  }

   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
  }  
   
    render()  
    {  
      let Splash_Screen = (  
        <View style={styles.SplashScreen_RootView}>  
            <View style={styles.SplashScreen_ChildView}>  
                  <Image source={{uri:'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/80_s-black-for-dribbble3.gif?auto=format&q=60&fit=max&w=930'}}  
              style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
          </View>  
        </View>
       )  
        return(  
         <View style = {{ flexGrow:1 }}>
           <RootContainer/> 
            {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
            } 
          </View>  
          );  
    }  

    componentWillUnmount() {
    console.log("App.js componentWillUnmount");

    Orientation.removeDeviceOrientationListener(this._orientationChanged);
    
  }
}  


const styles = StyleSheet.create(  
{  
   SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
});  

