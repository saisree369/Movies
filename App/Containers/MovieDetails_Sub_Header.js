import React,{Component} from 'react';

import {Text,View,Image,TouchableHighlight,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import {DrawerActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';  
import Search from "./Search.js"


export default class MovieDetail_Sub_Header extends Component {
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
    render() {
        console.disableYellowBox = true;
     
    const HeaderComponent = ({ navigation }) => (<MovieDetail_Sub_Header navigation={navigation}/>);
       if (this.state.orientation === 'portrait') {
        return(
            <View style={styles.container}>
                <View style={{height:50,width:420,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#8080'}}>
                 <TouchableOpacity  onPress={() => {
                //this.change()
                this.props.navigation.navigate("Home");}}>
                    <Icon
                    name="arrow-left"
                    size={20}
                    style={{ marginLeft: 20 }}
                    color="#fff"/>
                </TouchableOpacity>
                <View style ={{width:100,marginLeft:120}}>
                <Text style = {{color:'#fff',fontSize:15}}>MovieDetail</Text>
                </View>
               
                </View>
             </View>
        )
       }
        else {
        return (
             <View style={styles.container}>
                <View style={{height:50,width:420,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#8080'}}>
                 <TouchableOpacity  onPress={() => {
                //this.change()
                this.props.navigation.navigate("Home");}}>
                    <Icon
                    name="arrow-left"
                    size={20}
                    style={{ marginLeft: 20 }}
                    color="#fff"/>
                </TouchableOpacity>
                <View style ={{width:100,marginLeft:270}}>
                <Text style = {{color:'#fff',fontSize:15}}>MovieDetail</Text>
                </View>
               
                </View>
             </View>
        );
        }
    }
}



const styles = StyleSheet.create({

    container: {
      backgroundColor:'black',
      
      alignItems:'flex-start',
      justifyContent:'flex-start'
   }
    
 })