import React, {Component} from "react";
import PropTypes from "prop-types";
import { View,SafeAreaView, ScrollView, Text, TextInput,StyleSheet, TouchableOpacity, Image, Keyboard, LayoutAnimation,Button } from "react-native";
import { Images, Metrics } from "../Themes";
import { createStackNavigator } from "react-navigation-stack";
import Styles from "./Styles/LoginScreenStyles";

export default class LoginScreen extends Component {
  static propTypes = {
		fetching: PropTypes.bool,
	};
  static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('Title', 'LoginScreen'),
    //Heading style
    
  };
};

constructor(props) {
  super(props);
  this.state = {
    username: "reactnative@infinite.red",
    password: "password",
    visibleHeight: Metrics.screenHeight,
    topLogo: { width: Metrics.screenWidth - 40 },
  };
}

handleChangeUsername = text => {
		this.setState({ username: text });
};

handleChangePassword = text => {
  this.setState({ password: text });
};

  render() {
  console.disableYellowBox = true;
  const { username, password } = this.state;
  const { fetching } = this.props;
  const editable = !fetching;
    return (
    <ScrollView
      contentContainerStyle={{ justifyContent: "center",flex:1 }}
      style={[styles.container, { height: this.state.visibleHeight }]}
      keyboardShouldPersistTaps="always"
    >
      <Image source={Images.logo} style={[styles.topLogo, this.state.topLogo]} />
      <View style={styles.MainContainer}>
          <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder={this.username}
            editable={this.editable}
            keyboardType="default"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#003f5c"
            onChangeText={this.handleChangeUsername}
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.password._root.focus()}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            editable={this.editable}
            keyboardType="default"
            returnKeyType="go"
            autoCapitalize="none"
            placeholder={this.password}
            secureTextEntry
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={this.handleChangePassword}
            underlineColorAndroid="transparent"/>
          </View>
          <TouchableOpacity style={styles.loginBtn}
            onPress={() => { this.props.navigation.navigate("LaunchScreen");}}>
                <Text style={{fontSize:18,color:"#fff"}}>Login</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
    );
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
  },
    

    topLogo: {
      alignSelf: 'center',
      resizeMode: 'contain',
      marginTop:80
      
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