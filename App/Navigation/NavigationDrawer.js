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
  let label = "Firmware";


  let Firmware = (  
       <View style={{flexDirection:"row"}}>  
					<Text style={{color:'black',fontSize:16,marginHorizontal:12,marginTop:10}}>{label}</Text>
          <Icon name="circle" size={14} color="red" style={{marginTop:18}}/>
				</View>
        );

    let Normal = (  
       <View style={{flexDirection:"row"}}>  
					<Text style={{color:'black',fontSize:16,marginHorizontal:12,marginTop:10}}>{label}</Text>
          <Icon name="" size={14} color="red" style={{margin:10}}/>
				</View>
        );

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
                 <TouchableOpacity  onPress={() => {
                        //this.change()
                        this.props.navigation.navigate("Firmware");}}>
               <View style={{flexDirection:'row',marginVertical:5}}>
                   {  
                      (label == "Firmware") ? Firmware : Normal  
                      
                   }
                
                  </View>
                 </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}





