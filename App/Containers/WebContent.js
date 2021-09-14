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
                uri: 'https://gamevice.com/pages/faq-app'
                }}
                style={{ marginTop: 20 }}
            />
                
         
        )
    }

   
}

 

    




