import React, { Component,useEffect, useState } from 'react'
import { View, ScrollView, Text, Image,ImageBackground, Dimensions,FlatList,SafeAreaView,TextInput, TouchableWithoutFeedback,TouchableOpacity,ActivityIndicator, Linking,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';  
  var newData=[];
        let newData2=[];
        let featured_data=[];
        let featured_data2=[];
        let main_data=[];
        let main_data2=[];

export default class Search extends Component {
    
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
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

      this.state = {
        isLoading: true,
        search:"",
        filteredDataSource:[],
        filteredDataSource2:[],
        masterDataSource:[],
        titles:["VirtualGenres","Genres"],
        text_input:"",
        orientation: isPortrait() ? 'portrait' : 'landscape',
        searchDataSource:[],
        mainSearchDataSource:[]

      };

  
    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });
  
this.searchFilterFunction = this.searchFilterFunction.bind(this);
      
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

renderElement_star=(contain) => {
   if(contain == 10.00){
      return (
         <View style={{flexDirection:"row"}}>
                 <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>

      );
   }
   else if(contain == 8.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                 <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>

      );
   }
   else if(contain > 8.00 && contain < 10.00){
     return (
         <View style={{flexDirection:"row"}}>
                 <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star-half" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>
      );
   }

  else if(contain == 6.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                  <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>

      );
   }
   else if(contain > 6.00 && contain < 8.00){
     return (
         <View style={{flexDirection:"row"}}>
                  <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star-half" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>
      );
   }

   else if(contain == 4.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                 <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>

      );
   }
   else if(contain > 4.00 && contain < 6.00){
     return (
         <View style={{flexDirection:"row"}}>
                 <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star-half" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>
      );
   }
   else if(contain == 2.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                  <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>

      );
   }
   else if(contain > 2.00 && contain < 4.00){
     return (
         <View style={{flexDirection:"row"}}>
                  <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star-half" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>
      );
   }
    else if(contain == 0.00 ){
      return (
         <View style={{flexDirection:"row"}}>
                 <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>

      );
   }
   else if(contain > 0.00 && contain < 2.00){
     return (
         <View style={{flexDirection:"row"}}>
                  <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{Math.round((contain + Number.EPSILON) * 100) / 100}</Text>
                  <Icon name="star-half" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffffff"
                  style={{ marginTop: 14,marginLeft:2 }}/>
          </View>
      );
   }
}

componentWillMount() {
 
    return fetch(
      
      "https://api.themoviedb.org/3/genre/movie/list?api_key=xxx&language=en-US",
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
            masterDataSource:responseJson,
           //filteredDataSource: featured_data,
           //filteredDataSource2: featured_data2,
        

        });
       for(let j=0; j<2;j++){

         for (let i=0;i<this.state.masterDataSource.genres.length;i++){
                        main_data2[i]=this.state.masterDataSource.genres[i];
                     this.setState({
                      isLoading: false,
                      filteredDataSource2: main_data2,
                    });
                    }
        

       
    }
       
       
      })
      
      .catch(error => {
        console.log(error);
      });
      
  }





searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
     
     let data = {
            method: 'GET',
          
        }
        fetch('https://api.themoviedb.org/3/search/movie?api_key=xxx&language=en-US&query=' + text, data)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    error: false,
                    mainSearchDataSource: responseJson,
                    searchDataSource: responseJson,
                    
                });
                 console.log(this.state.mainSearchDataSource);
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    error: true
                })
                console.error(error);
            });
        
      try{
      
      for (let i=0;i<this.state.mainSearchDataSource.results.length;i++){
            const itemData = this.state.mainSearchDataSource.results[i].title.toLowerCase() ? this.state.mainSearchDataSource.results[i].title.toLowerCase() : '';
            const textData = text.toLowerCase();
      
        for (let j=i;j<itemData.length;j++){
      
             //   return itemData.indexOf(textData) > -1;
            
              if (itemData.indexOf(textData) == -1) {
                 newData.push(this.state.mainSearchDataSource.results[j]);
              }
     
        }
      }
      this.setState({
            isLoading: false,
            searchDataSource : newData,
            search : text,
          });
    }
    catch(err){

    }

    }


    else if(!text || text === '') {
       
    

         for (let i=0;i<this.state.masterDataSource.genres.length;i++){
                        featured_data2[i]=this.state.masterDataSource.genres[i];
                     this.setState({
                      isLoading: false,
                      filteredDataSource2: featured_data2,
                      search : text
                    });
                    }
   };

}




render() {
console.log("i'm in Search render");
 
    const ItemSeparatorView = () => {
        return (
        // Flat List Item Separator
        <View
            style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#2c2a2a',
            }}
        />
        );
    };



let Loading = (  
   <View style={styles.activity_container}>
    
           <ActivityIndicator size="large" color="#787878" style={{marginLeft:160,marginTop:280}} />
       
    </View>
        );

  if (this.state.orientation === 'portrait') {
      let search_menu = (
   <View style={{backgroundColor:"#2c2a2a"}}>
       
      
      <FlatList
         numColumns={4}    
        showsHorizontalScrollIndicator={false}
        data={this.state.searchDataSource.results}
        ItemSeparatorComponent = {ItemSeparatorView}
        renderItem={({item}) => 
          <View style={{flex:1}}>
            <TouchableOpacity 
              onPress= { ()=> {
                  const {navigate} = this.props.navigation.navigate("MovieDetails",{ app_id: item.title})}}>
              <ImageBackground source= {{uri:'https://image.tmdb.org/t/p/w185/' + item.backdrop_path}} style={{width:90 , height:110,marginLeft:10,borderRadius: 4, overflow: 'hidden'}}>
                <Icon name="heart" size={18} color="#ffd700"
                  style={{ marginLeft:147,marginTop:4}}/>
              
              </ImageBackground>
              </TouchableOpacity>
                <View style ={{backgroundColor:"#555555",width:90 , height:70,marginLeft:10}}>
                <View style={{flexDirection:"row"}}>
                  {
                    this.renderElement_star(Math.round((item.vote_average + Number.EPSILON) * 100) / 100)
                  }
                  <Text style ={{fontSize:5.5,color:"#fff",marginLeft:2,marginTop:12}} numberOfLines={1}>({this.numFormatter(item.vote_count)})</Text>
                </View>
                <Text style ={{fontSize:9,color:"#fff",marginLeft:5,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{item.original_title}</Text>
               

                </View>
          </View>
        }
        
        keyExtractor={(item, index) => index}/>
         </View>
      );
   let feature_menu = (  
 
        <View style={styles.container}>
        
         
           
               <Text style ={{fontSize:16,color:"#fff",marginTop:20,margin:5,fontWeight:"bold"}}>Genres</Text>
              <FlatList
          
              data={this.state.filteredDataSource2}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={({ item }) => (
                  <View style ={{margin:10}}>     
                          <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity 
                              onPress= { ()=> {
                                  const {navigate} = this.props.navigation.navigate("Search_category",{ genre: item.name})}}>   
                          <View style={{height:30,width:250,flexDirection: 'row'}}>
                                
                              <Text style={{color: "#ffffff", fontSize: 14,fontStyle:"bold",marginTop:8,marginLeft:15}}>{item.name}</Text>
                          
                          </View>
                          </TouchableOpacity>
                              <View style={{height:20,width:20,marginTop:12,marginLeft:80}}>
                                <Icon
                                  name="arrow-right"
                                  size={14}
                                  color="#fff"/>
                              </View>
                          </View>
                  </View>
              )}/>
         </View>
 
   )
  var featured_menu=(
    
        <View style={styles.container}>
            
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#2c2a2a"/>
                
        <TextInput
               style={styles.input}
                onChangeText={(text) => this.searchFilterFunction(text)}
                value={this.state.search}
                underlineColorAndroid="transparent"
                placeholder="Search..."
                placeholderTextColor="#2c2a2a"
            />
            </View>
           <ScrollView>
           {
                   (this.state.search == "") ? 
                    (this.state.isLoading === true) ? Loading : feature_menu  
                    :
                    (this.state.isLoading === true) ? Loading : search_menu 
           } 
          </ScrollView>
        </View>
    );
    
    return (
        <ScrollView>
            <SafeAreaView style={{flex: 1}}>
                {
                   featured_menu 
                }
            </SafeAreaView>
        </ScrollView>
   
  );
  }

  else {
  
      let search_menu = (
     <View style={styles.container}>
       
      
      <FlatList
         numColumns={7}    
        showsHorizontalScrollIndicator={false}
        data={this.state.searchDataSource.results}
        ItemSeparatorComponent = {ItemSeparatorView}
        renderItem={({item}) => 
          <View style={{flex:1}}>
              <ImageBackground source= {{uri:'https://image.tmdb.org/t/p/w185/' + item.backdrop_path}} style={{width:90 , height:110,marginLeft:10,borderRadius: 4, overflow: 'hidden'}}>
                <Icon name="heart" size={18} color="#ffd700"
                  style={{ marginLeft:147,marginTop:4}}/>
              
              </ImageBackground>
                <View style ={{backgroundColor:"#555555",width:90 , height:70,marginLeft:10}}>
                <View style={{flexDirection:"row"}}>
                <Text style ={{fontSize:8,color:"#fff",marginLeft:4,marginTop:10,fontWeight:"bold"}} numberOfLines={1}>{item.vote_average}</Text>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:3 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Icon name="star" size={6}  color="#ffd700"
                  style={{ marginTop: 14,marginLeft:2 }}/>
                  <Text style ={{fontSize:5.5,color:"#fff",marginLeft:2,marginTop:12}} numberOfLines={1}>({this.numFormatter(item.vote_count)})</Text>
                </View>
                <Text style ={{fontSize:9,color:"#fff",marginLeft:5,marginTop:5,fontWeight:"bold"}} numberOfLines={1}>{item.original_title}</Text>
         

                </View>
          </View>
        }
        
        keyExtractor={(item, index) => index}/>
         </View>
      );
   let feature_menu = (  
 
        <View style={styles.container}>
       
               <Text style ={{fontSize:16,color:"#fff",marginTop:20,margin:5,fontWeight:"bold"}}>Genres</Text>
              <FlatList
          
              data={this.state.filteredDataSource2}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={({ item }) => (
                  <View style ={{margin:10}}>     
                          <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity 
                              onPress= { ()=> {
                                  const {navigate} = this.props.navigation.navigate("Search_category",{ genre: item.name})}}>   
                          <View style={{height:30,width:250,flexDirection: 'row'}}>
                              <Image  style={{height:40,width:40,borderRadius: 4, overflow: 'hidden'}} source={{uri:item.iconUrl}}/>
                                
                              <Text style={{color: "#ffffff", fontSize: 14,fontStyle:"bold",marginTop:8,marginLeft:15}}>{item.name}</Text>
                          
                          </View>
                          </TouchableOpacity>
                              <View style={{height:20,width:20,marginTop:12,marginLeft:460}}>
                                <Icon
                                  name="arrow-right"
                                  size={14}
                                  color="#fff"/>
                              </View>
                          </View>
                  </View>
              )}/>
         </View>
 
   )
  var featured_menu=(
    
        <View style={styles.container}>
            
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#2c2a2a"/>
                
        <TextInput
               style={styles.input}
                onChangeText={(text) => this.searchFilterFunction(text)}
                value={this.state.search}
                underlineColorAndroid="transparent"
                placeholder="Search..."
                placeholderTextColor="#2c2a2a"
            />
            </View>
         <ScrollView>
           {
                   (this.state.search == "") ? 
                    (this.state.isLoading === true) ? Loading : feature_menu  
                    :
                    (this.state.isLoading === true) ? Loading : search_menu 
           } 
          </ScrollView>
        </View>
    );
    
    return (
        <ScrollView>
            <SafeAreaView style={{flex: 1}}>
                {
                   featured_menu 
                }
            </SafeAreaView>
        </ScrollView>
   
  );
  }
}
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c2a2a',
    flex:1,
  },
  MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',
        backgroundColor: "#2c2a2a",
    },
  itemStyle: {
    padding: 10,
  },
  card: { borderWidth: 1, borderRadius: 1, borderColor: '#000', width: 200, height: 200, padding: 10 },
  paragraph: {
    
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   textInputStyle: {
    
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color:"#ffffff"
  },
  text: {
    fontSize: 12,
    margin:10,
    textAlign: 'center',
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
 loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
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
    

