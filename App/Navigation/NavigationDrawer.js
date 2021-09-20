import React,{Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';  
export default class NavigationDrawer extends Component{
  constructor()
  { 
    super();  
    this.state=
    {  
      isVisible : true
    }  
  }  
  static navigationOptions = ({ navigation }) => {
		return {
		//Heading/title of the header
		//title: navigation.getParam('Title', 'NavigationDrawer'),
		//Heading style
		
	  };
	};

  
  render(){


  
    return (
      <SafeAreaView style={{ flex: 1 }}>
    
      <View style={{flexDirection:'column',flexGrow:1,marginBottom:98}}>
        <View style={{flexDirection:'row',marginTop:15,marginBottom:5}}>
          <TouchableOpacity  onPress={() => {
            //this.change()
            this.props.navigation.navigate("Home");}}>
              <Text style={{color:'black',fontSize:16,marginHorizontal:12,marginTop:15}}>Home</Text>
          </TouchableOpacity>
          </View>
          <View style={{borderWidth: 0.5,
                  borderColor:'black',
                marginTop:15}}/>
          <View style={{flexDirection:'row',marginVertical:5}}>
        <TouchableOpacity  onPress={() => {
            //this.change()
            this.props.navigation.navigate("Favorites");}}>
                <Text style={{color:'black',fontSize:16,marginHorizontal:12,marginTop:10}}>Favorites</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderWidth: 0.5,
          borderColor:'black',
          marginTop:15}}/>
           <View style={{flexDirection:'row',marginVertical:5}}>
              <TouchableOpacity  onPress={() => {
                              //this.change()
                              this.props.navigation.navigate("WebContent");}}>
                <Text style={{color:'black',fontSize:16,marginHorizontal:12,marginTop:10}}>FAQ</Text>
              </TouchableOpacity>
            </View>
            <View style={{borderWidth: 0.5,
              borderColor:'black',
              marginTop:15}}/>
                <View style={{flexDirection:'row',marginVertical:5}}>
                    <TouchableOpacity  onPress={() => {
                      //this.change()
                      this.props.navigation.navigate("WebContent");}}>
                          <Text style={{color:'black',fontSize:16,marginHorizontal:12,marginTop:10}}>Terms</Text>
                      </TouchableOpacity>
                </View>
                <View style={{borderWidth: 0.5,
                  borderColor:'black',
                  marginTop:15}}/>
                    <View style={{flexDirection:'row',marginVertical:5}}>
                      <TouchableOpacity  onPress={() => {
                        //this.change()
                        this.props.navigation.navigate("WebContent");}}>
                         <Text style={{color:'black',fontSize:16,marginHorizontal:12,marginTop:10}}>Privacy</Text>
                       </TouchableOpacity>
                  </View>
                <View style={{borderWidth: 0.5,borderColor:'black',marginTop:15}}/>  
              
        </View>
      </SafeAreaView>
    );
  }
}





