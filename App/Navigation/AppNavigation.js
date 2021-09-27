import React,{Component}from "react";
import { Text, Animated, Easing, View, Image } from 'react-native'
import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';  

import LoginScreen from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import NavigationDrawer from "./NavigationDrawer";
import Home from "../Containers/Home";
import Favorites from "../Containers/Favorites";
import WebContent from "../Containers/WebContent";
import Search from "../Containers/Search";
import Search_category from "../Containers/Search_category";
import HomeMiddleComponent from "../Containers/HomeMiddleComponent";
import MovieDetails from "../Containers/MovieDetails";
import Header from "../Containers/Header";
import MovieDetails_Sub from "../Containers/MovieDetails_Sub";


export default class AppNavigation extends Component {
  render() {
    return(
		  <AppContainer />
    );
  }
}






const AppTabBottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: 
    { screen: Home,
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarColor: "#000",
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'home'}/>  
                    </View>),  
            }  
      },  
  Favorites: {
     screen: Favorites,
              navigationOptions:{  
                  tabBarLabel:'Favorites',  
                  tabBarColor: "#000",
                  tabBarIcon: ({ tintColor }) => (  
                      <View>  
                          <Icon style={[{color: tintColor}]} size={25} name={'gamepad'}/>  
                      </View>),  
              }  
        },  
    },
    {
      shifting: true
    }
);


const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabBottomNavigator},
    Favorites:{screen:Favorites},
    WebContent: { screen: WebContent },
    NavigationDrawer: { screen: NavigationDrawer },
  },
  {
    contentComponent: NavigationDrawer 
  }
);


const PrimaryNav = createStackNavigator(
	{
		// top level
		LoginScreen: { screen: LoginScreen },
		LaunchScreen: { screen: LaunchScreen },
		Home: { screen: AppDrawerNavigator},
    MovieDetails:{screen:MovieDetails},
    Search:{screen:Search},
    Search_category:{screen:Search_category},
    MovieDetails_Sub:{screen:MovieDetails_Sub}

	},
	{
       headerMode: 'none',
       navigationOptions: {
         headerVisible: false,
  },
  },
  {
		  initialRouteName: "LoginScreen",
	}	
);



const AppContainer = createAppContainer(PrimaryNav);
