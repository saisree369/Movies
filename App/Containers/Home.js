import React, { Component } from 'react'
import { View, ScrollView, Text, Image, Dimensions, TouchableWithoutFeedback,TouchableOpacity,ActivityIndicator, Linking,StyleSheet } from 'react-native'

import Carousel from 'react-native-snap-carousel'
import { default as styles } from './Styles/ScreenStyles'
import Icon from 'react-native-vector-icons/FontAwesome';  
import Header from './Header.js';
import HomeMiddleComponent from './HomeMiddleComponent.js';
import Platform from '../Config/Platform';
import Orientation from 'react-native-orientation-locker';

import GlobalProps from '../Config/GlobalProps';
import LayoutUtil from '../Utils/ListLayoutUtil'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export default class Home extends Component {
    
    // global navigationOptions are set in AppNavigation.js in the primaryNav
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: 'Home'
            // title: params ? params.otherParam : 'Home',
            /* These values are used instead of the shared configuration! */
        };
    };

constructor(props) {
    super(props);
    this.renderCarouselItem = this.renderCarouselItem.bind(this);

    const isLandscape = !Platform.isPortrait();
    let { gridInitImages, carouselWidth, carouselHeight, carouselImageWidth, carouselImageHeight } = this.getOrientationDimensions();
   
    this.state = {
        isLoading: true,
        heroDataSource:[],
        layoutProvider: LayoutUtil.getLayoutProvider(1, false),
            count: 0,
            isLandscape: isLandscape,
            carouselWidth: carouselWidth,
            carouselHeight: carouselHeight,
            carouselImageWidth: carouselImageWidth,
            carouselImageHeight: carouselImageHeight,
            gridInitImages: gridInitImages,

            isAndroid: Platform.isAndroid(),
            notchLeft: false,
            notchRight: false,
            appsInstalled: [],
      };
}

 getOrientationDimensions() {
        const isLandscape = !Platform.isPortrait();

        let carouselWidth = Dimensions.get("window").width;
        let carouselHeight = Dimensions.get("window").height * 0.15;

        let carouselImageWidth = Dimensions.get('window').width;
        let carouselImageHeight = Dimensions.get('window').height * 0.11;

        let gridInitImages = 4;

        if (isLandscape && !GlobalProps.isAndroid) { // landscape and phone
            // do nothing since we will hide it for landscape phone
            gridInitImages = 8;
        } else if (isLandscape && GlobalProps.isAndroid) {
            carouselHeight = Dimensions.get('window').height * 0.17;
            carouselImageWidth = Dimensions.get('window').width;
            carouselImageHeight = Dimensions.get('window').height * 0.17;
            gridInitImages = 10;
        } else if (!isLandscape && GlobalProps.isAndroid) {
            carouselHeight = Dimensions.get('window').height * 0.17;
            carouselImageWidth = Dimensions.get('window').width*0.2;
            carouselImageHeight = Dimensions.get('window').height * 0.15;
            gridInitImages = 8;
        }

        return { gridInitImages: gridInitImages, carouselWidth: carouselWidth, carouselHeight: carouselHeight, carouselImageWidth: carouselImageWidth, carouselImageHeight: carouselImageHeight };
    }

    _orientationChanged = (orientation) => {
        console.log("Home _orientationChanged: " + orientation);

        if (orientation === 'UNKNOWN') return;
        
        if (this.state.isAndroid) {
            switch (orientation) {
                case 'LANDSCAPE-LEFT':
                    this.setState({
                        notchRight: false,
                        notchLeft: true
                    });
                    break;

                case 'LANDSCAPE-RIGHT':
                    this.setState({
                        notchRight: true,
                        notchLeft: false
                    });
                    break;

                case 'PORTRAIT':
                    this.setState({
                        notchRight: false,
                        notchLeft: false
                    });
                    break;
            }
        }

        let { gridInitImages, carouselWidth, carouselHeight, carouselImageWidth, carouselImageHeight } = this.getOrientationDimensions();

        this.setState({
            isLandscape: !Platform.isPortrait(),
            layoutProvider: LayoutUtil.getLayoutProvider(1, false),
            carouselWidth: carouselWidth,
            carouselHeight: carouselHeight,
            carouselImageWidth: carouselImageWidth,
            carouselImageHeight: carouselImageHeight,
            gridInitImages: gridInitImages
        });

        
	}



UNSAFE_componentWillMount(){
  // set initial device orientation
        this._orientationChanged(GlobalProps.orientation);

        // Event Listener for orientation changes
        Orientation.addDeviceOrientationListener(this._orientationChanged);
}


componentDidMount() {
  
    return fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=xxx",
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          heroDataSource: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });

  }

    renderCarouselItem({ item, index }) {

        if (item) {
           let carouselLink;
          const sourceUri = { uri:'https://image.tmdb.org/t/p/w185/' + item.backdrop_path};
         
            if (item.id) {
              //console.log("renderCarouselItem - sourceUri: " + JSON.stringify(sourceUri));
              carouselLink = () => {
                    this.props.navigation.navigate("GameDetails", { app_id: item.title});
                };
           
            }

            
            else if (item.linkUrl)  {
                
                    carouselLink = () => {

                    Linking.canOpenURL(item.linkUrl).then(supported => {
                        if (supported) {
                            Linking.openURL(item.linkUrl);
                        } else {
                            console.log("Don't know how to open URI: " + item.linkUrl);
                        }
                    });
                    };
            }

             
            return (
                <View style={styles.slide}>
                    <TouchableOpacity 
                      onPress={carouselLink}>
                        <Image
                        resizeMode={'cover'}
                            style={{
                                width:this.state.carouselImageWidth,
                                height:200,
                                alignSelf: 'center',
                                margin:5,
                                borderWidth:0.6,borderColor:"#fff"
                                // height: undefined
                                //paddingHorizontal: itemHorizontalMargin,
                                //paddingBottom: 18 // needed for shadow
                            }}
                            source={sourceUri}
                        />
                    </TouchableOpacity>
                </View>
            );
        }
    }



render() {
  console.log("i'm in Home render");

let notchStyle = [styles.notchPortrait];

        if (this.state.notchLeft) {
            notchStyle.push(styles.notchLeft);
        }

        if (this.state.notchRight) {
            notchStyle.push(styles.notchRight);
        }
        return (  
             
            <View style={styles1.container}>
             <View style={notchStyle} ref={(view) => {this.content = view }}>
              <Header {...this.props}/>

                 <ScrollView>
                
                   <View style={styles1.carouselContainer}>
                   
                        <Carousel
                          data={this.state.heroDataSource.results}
                          renderItem={this.renderCarouselItem}
                          sliderWidth={this.state.carouselWidth}
                          itemWidth={this.state.carouselImageWidth}
                          containerCustomStyle={{height:200}}
                          autoplay={true}
                          useScrollView={true}/>
                    </View>
                 
                        <ScrollView>
                         
                            <HomeMiddleComponent {...this.props}/>
                        </ScrollView>     
                 
                </ScrollView>
                </View>
       </View>
        );
}


}


const styles1 = StyleSheet.create(  
{  
    carouselContainer:  
    {  
        flex: 1,  
        justifyContent: 'flex-start',  
        alignItems: 'flex-start',
        height:"100%",
        backgroundColor: "#2c2a2a"
    },  
    container: {
    flex: 1,
    backgroundColor: "#2c2a2a",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  container1: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image1: {
    width: ITEM_WIDTH,
    height: 300,
  },
  });  

    

