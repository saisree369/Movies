import React, { Component,useEffect, useState } from 'react'
import { View, ScrollView, Text, Image, Dimensions,FlatList,SafeAreaView,TextInput, TouchableWithoutFeedback,TouchableOpacity,ActivityIndicator, Linking,StyleSheet } from 'react-native'
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
        orientation: isPortrait() ? 'portrait' : 'landscape'
      };

  
    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });
  
this.searchFilterFunction = this.searchFilterFunction.bind(this);
      
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
                  //   titles: this.state.titles[j]
                    });
                    }
        
     /*   
        switch (j) {
            case 0:
                    for (let i=0;i<this.state.masterDataSource.virtualGenres.length;i++){
                        main_data[i]=this.state.masterDataSource.virtualGenres[i];
                    
                    //  console.log("data " + JSON.stringify(featured_data[i]));
                    this.setState({
                      isLoading: false,
                      filteredDataSource: main_data,
                    });
                    }
                    break;
            case 1:
                    for (let i=0;i<this.state.masterDataSource.genres.length;i++){
                        main_data2[i]=this.state.masterDataSource.genres[i];
                     this.setState({
                      isLoading: false,
                      filteredDataSource2: main_data2,
                  //   titles: this.state.titles[j]
                    });
                    }
                    break;
                   
                    default:
                    break;
            }*/

            
        
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
       
    }
       
       
      })
      
      .catch(error => {
        console.log(error);
      });
      
  }



masterData(responseJson){
  let masterData = responseJson;
   for(let j=0; j<2;j++){

     for (let i=0;i<masterData.genres.length;i++){
                        featured_data2[i]=masterData.genres[i];
                      this.setState({
                      isLoading: false,
                      filteredDataSource2: featured_data2,
                  //   titles: this.state.titles[j]
                    });
                    }
       
    /*    
        switch (j) {
            case 0:
                    for (let i=0;i<masterData.virtualGenres.length;i++){
                        featured_data[i]=masterData.virtualGenres[i];
                    
                    //  console.log("data " + JSON.stringify(featured_data[i]));
                    this.setState({
                      isLoading: false,
                      filteredDataSource: featured_data,
                    });
                     
                    }
                    break;
            case 1:
                    for (let i=0;i<masterData.genres.length;i++){
                        featured_data2[i]=masterData.genres[i];
                      this.setState({
                      isLoading: false,
                      filteredDataSource2: featured_data2,
                  //   titles: this.state.titles[j]
                    });
                    }
                    break;
                   
                    default:
                    break;
            }

            */
        
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
       
    }
}
 

 fetchData(){

 }

searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
     
      for(let k=0; k<2;k++){

           for (let l=0;l<this.state.masterDataSource.genres.length;l++){
                        newData2 = this.state.masterDataSource.genres.filter(
                            function (item) {
                            const itemData = item.name
                                ? item.name.toUpperCase()
                                : ''.toUpperCase();
                            const textData = text.toUpperCase();
                            return itemData.indexOf(textData) > -1;
                            });

                             this.setState({
                              isLoading: false,
                              filteredDataSource2:newData2,
                              search : text,
                          //    titles: this.state.titles[i]
                              });
                      }
    /*  
        switch (k) {
            case 0:
                    for (let l=0;l<this.state.masterDataSource.virtualGenres.length;l++){
                         newData = this.state.masterDataSource.virtualGenres.filter(
                             function (item) {
                            const itemData = item.name
                                ? item.name.toUpperCase()
                                : ''.toUpperCase();
                            const textData = text.toUpperCase();
                            return itemData.indexOf(textData) > -1;
                             });


                             this.setState({
                              isLoading: false,
                              filteredDataSource: newData,
                              search : text,
                          //    titles: this.state.titles[i]
                              });

                         
                    }

                       
                    //  console.log("data " + JSON.stringify(featured_data[i]));
                    break;
            case 1:
                    for (let l=0;l<this.state.masterDataSource.genres.length;l++){
                        newData2 = this.state.masterDataSource.genres.filter(
                            function (item) {
                            const itemData = item.name
                                ? item.name.toUpperCase()
                                : ''.toUpperCase();
                            const textData = text.toUpperCase();
                            return itemData.indexOf(textData) > -1;
                            });

                             this.setState({
                              isLoading: false,
                              filteredDataSource2:newData2,
                              search : text,
                          //    titles: this.state.titles[i]
                              });
                      }
                         
                     
                    break;
                    default:
                    break;
    }
      */
        
    } 
    }
    else if(!text || text === '') {
       
      for(let j=0; j<2;j++){

         for (let i=0;i<this.state.masterDataSource.genres.length;i++){
                        featured_data2[i]=this.state.masterDataSource.genres[i];
                     this.setState({
                      isLoading: false,
                      filteredDataSource2: featured_data2,
                      search : text,
                  //   titles: this.state.titles[j]
                    });
                    }
        
     /*
        switch (j) {
            case 0:
                    for (let i=0;i<this.state.masterDataSource.virtualGenres.length;i++){
                        featured_data[i]=this.state.masterDataSource.virtualGenres[i];
                    
                    //  console.log("data " + JSON.stringify(featured_data[i]));
                    this.setState({
                      isLoading: false,
                      filteredDataSource: featured_data,
                      search : text,
                    });
                    }
                    break;
            case 1:
                    for (let i=0;i<this.state.masterDataSource.genres.length;i++){
                        featured_data2[i]=this.state.masterDataSource.genres[i];
                     this.setState({
                      isLoading: false,
                      filteredDataSource2: featured_data2,
                      search : text,
                  //   titles: this.state.titles[j]
                    });
                    }
                    break;
                   
                    default:
                    break;
            }*/

            
        
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
       
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
          <View style ={{flex:1}}>
           {
                   (this.state.isLoading === true) ? Loading : feature_menu  
           } 
          </View>
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
          <View style ={{flex:1}}>
           {
                   (this.state.isLoading === true) ? Loading : feature_menu  
           } 
          </View>
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
    

