import React, { Component } from "react";
import { Platform, StyleSheet, View, Text,Image, TouchableOpacity, Alert } from 'react-native';  
import AppNavigation from '../Navigation/AppNavigation'

export default class RootContainer extends Component{ 
    render()  
    {  
        return(
            
                <AppNavigation/>
           
        );
    }
}