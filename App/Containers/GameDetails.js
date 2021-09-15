import React, { Component } from 'react';
 
import { ActivityIndicator, Alert,Dimensions,TouchableOpacity, FlatList, ScrollView,SafeAreaView,ImageBackground,Text, StyleSheet, View, TextInput } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome'; 
 import GameDetail_Header from './GameDetail_Header.js';
export default class Search extends Component {
static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: 'GameDetails'
            // title: params ? params.otherParam : 'Home',
            /* These values are used instead of the shared configuration! */
        };
    };
constructor(props) {
super(props);

      /**
          * Returns true if the screen is in portrait mode
          */
          const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
          };
        this.state = {
          isLoading: true,
          appDataSource:[],
          orientation: isPortrait() ? 'portrait' : 'landscape'
        };
          

          // Event Listener for orientation changes
          Dimensions.addEventListener('change', () => {
            this.setState({
              orientation: isPortrait() ? 'portrait' : 'landscape'
            });
          });

}
  numFormatter = (num) => {
     if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'k'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'm'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
  };


renderElement=(contain) => {
   if(contain >= 8.0 && contain <= 10.0){
      return (
        <View style={{width:70,height:25,borderRadius:6,backgroundColor:"#9ACD32",marginTop:115,marginLeft:6,flex:0}}> 
           <Text style ={{fontSize:13,color:"#fff",marginLeft:10,marginTop:2,fontWeight:"bold"}}>{contain.toFixed(1)}</Text>
        </View>
      );
   }
   else if(contain >= 3.0 && contain < 8.0){
     return (
        <View style={{width:70,height:25,borderRadius:6,backgroundColor:"#ffd700",marginTop:115,marginLeft:6}}> 
          <Text style ={{fontSize:13,color:"#fff",marginLeft:10,marginTop:2,fontWeight:"bold"}}>{contain.toFixed(1)}</Text>
        </View>
      );
   }

   else if(contain == 0.0 && contain < 3.0 ){
     return (
        <View style={{width:70,height:25,borderRadius:6,backgroundColor:"#fff",marginTop:115,marginLeft:6,opacity:0.5}}> 
          <Text style ={{fontSize:13,color:"#fff",marginLeft:10,marginTop:2,fontWeight:"bold"}}>{contain.toFixed(1)}</Text>
        </View>
      );
   }

    else if(contain == null ){
     return (
        <View style={{width:70,height:25,borderRadius:6,backgroundColor:"#fff",marginTop:115,marginLeft:6,opacity:0.5}}> 
          <Text style ={{fontSize:13,color:"#fff",marginLeft:10,marginTop:2,fontWeight:"bold"}}>N/A</Text>
        </View>
      );
   }
}




 componentDidMount() {
    let data = {
        method: 'GET',
       
    }
    fetch('https://api.themoviedb.org/3/search/movie?api_key=xxx' + this.props.navigation.state.params.app_id, data)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                isLoading: false,
                error: false,
                appDataSource: responseJson,
            }, function () {
                console.log(this.state.appDataSource)
            });
        })
        .catch(error => {
            this.setState({
                isLoading: false,
                error: true
            })
            console.error(error);
        });
  }
 

render() {
   if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } 
    else {

 var menu=this.state.appDataSource.results.map((val,key)=>{
        return <View key={key} style={styles.item}>
    
        <View style={{flexDirection:'row'}}>
          <ImageBackground source= {{uri:'https://image.tmdb.org/t/p/w185/' + val.backdrop_path}} style={{width:90 , height:90,marginLeft:10,marginTop:30,borderRadius: 16, overflow: 'hidden'}}/>
            <View style={{flexDirection:'column',marginTop:30,marginLeft:10}}>
              <Text style={{fontSize:14,color:"#fff",marginLeft:5}} numberOfLines={1}>{val.original_title}</Text>
              <Text style={{fontSize:14,color:"#808080",margin:5,marginTop:2}}>{val.title}</Text>
            
          <View style={{flexDirection:'row'}}>
          <View style={{height:40,width:185,flexDirection:'row',backgroundColor:"#525252",opacity:0.9,marginTop:10,borderRadius:5}}>
            <Text style={{fontSize:10,color:"#fff",marginLeft:5,marginTop:10}}>AppStore Rating</Text>
            <Text style={{fontSize:16,color:"#fff",marginLeft:2,marginTop:5}}>|</Text>
            <Text style={{fontSize:12,color:"#fff",marginLeft:2,marginTop:10,fontWeight:"bold"}}>{val.vote_average}</Text>
              <View style={{flexDirection:'column',position:"absolute",marginLeft:125}}>
                    <View style={{flexDirection:'row',marginTop:4}}>
                      <Icon name="star" size={8}  color="#ffd700"
                        style={{ marginTop: 5,marginLeft:6 }}/>
                        <Icon name="star" size={8}  color="#ffd700"
                        style={{ marginTop: 5,marginLeft:2 }}/>
                        <Icon name="star" size={8}  color="#ffd700"
                        style={{ marginTop: 5,marginLeft:2 }}/>
                        <Icon name="star" size={8}  color="#ffd700"
                        style={{ marginTop: 5,marginLeft:2 }}/>
                        <Icon name="star" size={8}  color="#ffd700"
                        style={{ marginTop: 5,marginLeft:2 }}/>
                    </View>   
                <Text style={{fontSize:7,color:"#fff",marginLeft:4,marginTop:1}}>{this.numFormatter(val.vote_count)} Ratings</Text>
              </View>
        </View>
         <View style={{height:40,width:90,flexDirection:'row',backgroundColor:"#000000",opacity:0.9,marginTop:10,borderRadius:5,borderColor:"#fff",borderWidth:0.8,marginLeft:5}}>
             <View style={{flexDirection:'row',marginTop:4}}>
                      <Icon name="apple" size={20}  color="#ffffff"
                        style={{ marginTop: 5,marginLeft:5   }}/>
                      <View style={{flexDirection:'column'}}>
                          <Text style={{fontSize:8,color:"#fff",marginLeft:5}}>Download on</Text>
                          <Text style={{fontSize:12,color:"#fff",marginLeft:2}}>App Store</Text>
                      </View>
            </View>   
         </View>
         </View>
       </View>
</View>

<View style={{height:550,width:380,marginLeft:6,marginRight:80,backgroundColor:"#525252",marginTop:30}}>
  <Text style={{fontSize:16,color:"#fff",marginLeft:10,marginTop:2,textDecorationLine:"underline"}}>DESCRIPTION</Text>
  <ScrollView>
  <View>
  <Text style={{fontSize:14,color:"#fff",marginLeft:10,marginTop:10}}>{val.overview}</Text>
  </View>
  </ScrollView>
</View>

           
     
       </View>
       });

    }
  
               
if (this.state.orientation === 'portrait') {

 return (
    
      <View style={styles.MainContainer}>
        <GameDetail_Header {...this.props}/>
       
          {menu}
         </View> 
      )
  }
     else {
      return (
          
      <View style={styles.MainContainer}>
        <GameDetail_Header {...this.props}/>

        <ScrollView>
           {menu}
</ScrollView>
 </View>
      );
    }
    }
    
  }
 
const styles = StyleSheet.create({
 
  MainContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor:"#2c2a2a"
 
  },
 
  row: {
    fontSize: 18,
    padding: 12
  },
 
  textInput: {
 
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"
 
  },
   searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 5,
    marginTop:9,
    marginLeft:5,
},
input: {
    paddingTop: 12,
    paddingRight: 200,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: '#fff',
    color: '#2c2a2a'
},
  activity_container: {
    backgroundColor: '#2c2a2a',
    height: Dimensions.get('window').height,
    padding: 15,
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 50
  }
});
