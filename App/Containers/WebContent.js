import React, { Component } from 'react';
import { WebView} from 'react-native-webview'
import Header from './Header.js';



// Notch handling
import GlobalProps from '../Config/GlobalProps'
import Platform from '../Config/Platform'
import Orientation from 'react-native-orientation-locker';


export default class WebContent extends Component {
    

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: 'WebContent'
            // title: params ? params.otherParam : 'Home',
            /* These values are used instead of the shared configuration! */
        };
    };

    
	render() {
        console.log("i'm in WebContent render");

        

        return (
        <WebView
            source={{
                uri: 'https://docs.google.com/document/d/1KJkDmGjLHr8aT6ed64ZA7X84sXQS5Svt-4MC8aEAbfw/edit'
                }}
                style={{ marginTop: 20 }}
            />
                
         
        )
    }

   
}

 

    




