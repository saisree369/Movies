import React, { Component } from 'react';

import { View, ScrollView, Text,SafeAreaView,Image,TouchableOpacity, Dimensions, ActivityIndicator,ImageBackground, FlatList,StyleSheet ,LogBox } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import GameDetails from './GameDetails.js'



let titles_list = [];
var main_data=[];

export default class HomeMiddleComponent extends Component {

constructor(props) {
super(props);
this.state = {
    isLoading: true,
    appDataSource:[],
    appDataSource1:[],
      
    titles:["Featured","Action","Adventure","Sports","Racing","Role Playing"]
    
  };
   
}

static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: 'HomeMiddleComponent'
            // title: params ? params.otherParam : 'Home',
            /* These values are used instead of the shared configuration! */
        };
    };

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


renderElement_star=(contain) => {
   if(contain == 10.00){
      return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>

      );
   }
   else if(contain == 8.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>

      );
   }
   else if(contain > 8.00 && contain < 10.00){
     return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star-half" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>
      );
   }

  else if(contain == 6.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>

      );
   }
   else if(contain > 6.00 && contain < 8.00){
     return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star-half" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>
      );
   }

   else if(contain == 4.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>

      );
   }
   else if(contain > 4.00 && contain < 6.00){
     return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star-half" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>
      );
   }
   else if(contain == 2.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>

      );
   }
   else if(contain > 2.00 && contain < 4.00){
     return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star-half" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>
      );
   }
    else if(contain == 0.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>

      );
   }
   else if(contain > 0.00 && contain < 2.00){
     return (
         <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star-half" size={12}  color="#ffd700"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
                  <Icon name="star" size={12}  color="#ffffff"
                  style={{ marginTop: 8,marginLeft:5 }}/>
          </View>
      );
   }
}


   

componentDidMount() {

  
     for(let j=0; j<this.state.titles.length;j++){
    var dataSource = [];
      titles_list[j] = this.state.titles[j];
      fetch('https://api.themoviedb.org/3/search/movie?api_key=xxx&query=' + titles_list[j],
                  {
                    method: "GET"
                  }
                  )
                  
                    .then(response => response.json())
                    .then(responseJson => {
                     dataSource[j] = JSON.parse(JSON.stringify(responseJson).replace(/\s(?=\w+":)+/g, ""))
                     this.setState({
                    //  isLoading: false,
                      //appDataSource : JSON.parse(JSON.stringify(responseJson).replace(/\s(?=\w+":)+/g, "")),
                        appDataSource1 : dataSource,
                      });
                        if( j == this.state.titles.length-1){
                          this.setState({
                                          isLoading: false,
                          });
                        }
                     // dataSource[j] = responseJson
                     //  console.log(this.state.appDataSource1[0].results);
                    })
                    .catch(error => {
                      console.log(error);
                      
                    });

                    
                 
      
    }
}

 

render() {
console.log(this.props.navigation)

const ItemSeparatorView = () => {
return (
    // Flat List Item Separator
    <View style = {
      {
          height: '100%',
          width: 10,
          backgroundColor: '#2c2a2a',
      }
  }/>
  );
};

  
    console.disableYellowBox = true;
      console.log("i'm in Favorites render");


    if (this.state.isLoading) {
      return (
        <View style={{marginTop:180,marginRight:30}}>
          <ActivityIndicator size="large" color="#787878" />
        </View>
      );
    } 
    else {

    


    var dataSource = [];
      var featured_array = [];
      for(let j=0; j<this.state.titles.length;j++){
      dataSource[j] = this.state.appDataSource1[j];
      let featured_data=[];
        for (let i=0;i<dataSource[j].results.length;i++){
                    featured_data[i]=dataSource[j].results[i];
        }
       
       
    
       var featured_menu=
       <View>
          <Text style ={{fontSize:16,color:"#fff",marginTop:10,margin:5,fontWeight:"bold"}}>{this.state.titles[j]}</Text>
      
      <FlatList
        horizontal  
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={featured_data}
        ItemSeparatorComponent = {ItemSeparatorView}
        renderItem={({item}) => 
           
          <View style={{flex:1}}>
           <TouchableOpacity 
              onPress= { ()=> {
                  const {navigate} = this.props.navigation.navigate("GameDetails",{ app_id: item.title})}}>
              <ImageBackground source= {{uri:'https://image.tmdb.org/t/p/w185/' + item.backdrop_path}} style={{width:170 , height:170,marginLeft:10,borderRadius: 8, overflow: 'hidden'}}>
                <Icon name="heart" size={18} color="#ffd700"
                  style={{ marginLeft:147,marginTop:4}}/>
             
              </ImageBackground>
              </TouchableOpacity>
                <View style ={{backgroundColor:"#555555",width:170 , height:90,marginLeft:10}}>
                <View style={{flexDirection:"row"}}>
               
                  {
                    this.renderElement_star(Math.round((item.vote_average + Number.EPSILON) * 100) / 100)
                  }
                  <Text style ={{fontSize:12,color:"#000",marginLeft:4,marginTop:5}} numberOfLines={1}>({this.numFormatter(item.vote_count)})</Text>
                </View>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{item.original_title}</Text>
                <Text style ={{fontSize:13,color:"#000",marginLeft:10}} numberOfLines={1}>{item.title}</Text>

                </View>
          </View>
          
        }
        
        keyExtractor={(item, index) => index}/>
       </View>
       featured_array[j] = featured_menu;
      
      }
      }
    return (
        
      <ScrollView>
      <SafeAreaView style={styles.container}>
     
      
          {featured_array}
              
         
        

          </SafeAreaView>
         </ScrollView>
          
      )
       
    }
  
}


const styles = StyleSheet.create(  
{  
     
    container: {
    flex:1,
    backgroundColor: "#2c2a2a"
  },
  container_activity: {
    backgroundColor: "#787878"
  },
});  
    
