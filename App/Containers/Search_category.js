import React, { Component } from 'react';
 
import { ActivityIndicator, Alert,Dimensions, FlatList, ScrollView,SafeAreaView,ImageBackground,Text, StyleSheet, View, TextInput } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';  

 let main_data=[];
export default class Search extends Component {

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
    masterDataSource:[],
    search:"",
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




 componentWillMount() {
    let data = {
        method: 'GET',
       
    }
    fetch('https://api.themoviedb.org/3/search/movie?api_key=e60f97467e53623440ba3a914746753f&language=en-US&query=' + this.props.navigation.state.params.genre, data)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                isLoading: false,
                error: false,
                appDataSource: responseJson,
                masterDataSource: responseJson,
            }, function () {
              console.log(responseJson);
            });
             for(let j=0; j<2;j++){

         for (let i=0;i<this.state.masterDataSource.results.length;i++){
                        main_data[i]=this.state.masterDataSource.results[i];
                     this.setState({
                      isLoading: false,
                      appDataSource: main_data
                    });
                    }
        
 
       
    }
       
        })
        .catch(error => {
            this.setState({
                isLoading: false,
                error: true
            })
            console.error(error);
        });
  }
 
searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      
      const newData=[];
      
      for (let i=0;i<this.state.masterDataSource.results.length;i++){
            const itemData = this.state.masterDataSource.results[i].title.toLowerCase() ? this.state.masterDataSource.results[i].title.toLowerCase() : '';
            const textData = text.toLowerCase();
      
        for (let j=i;j<itemData.length;j++){
      
             //   return itemData.indexOf(textData) > -1;
            
              if (itemData.indexOf(textData) == 0) {
                 newData.push(this.state.masterDataSource.results[j]);
              }
     
        }
      }
      this.setState({
            isLoading: false,
            appDataSource : newData,
            search : text,
          });
    }
    else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      this.setState({
            isLoading: false,
            appDataSource : this.state.masterDataSource.results,
            search : text,
          });
    }
  };

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


render() {

const ItemSeparatorView = () => {
return (
    // Flat List Item Separator
    <View style = {
      {
          height: 10,
          width: 10,
          backgroundColor: '#2c2a2a',
          margin:2
      }
  }/>
  );
};

  
    console.disableYellowBox = true;
      console.log("i'm in Search_Category render");


    

    let Loading = (  
            <View style={styles.activity_container}>
              
                    <ActivityIndicator size="large" color="#787878" style={{marginLeft:160,marginTop:220}} />
                
              </View>
        );
  
   if (this.state.orientation === 'portrait') {            
      let featured_menu=


       <View style={{backgroundColor:"#2c2a2a"}}>
       
      
      <FlatList
         numColumns={4}    
        showsHorizontalScrollIndicator={false}
        data={this.state.appDataSource}
        ItemSeparatorComponent = {ItemSeparatorView}
        renderItem={({item}) => 
          <View style={{flex:1}}>
              <ImageBackground source= {{uri:'https://image.tmdb.org/t/p/w185/' + item.backdrop_path}} style={{width:90 , height:110,marginLeft:10,borderRadius: 4, overflow: 'hidden'}}>
                <Icon name="heart" size={18} color="#ffd700"
                  style={{ marginLeft:147,marginTop:4}}/>
              
              </ImageBackground>
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
       
  return (
        
      
      <SafeAreaView style={styles.container}>
         
       <View style={{flexDirection:"row",backgroundColor:"#fff"}}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#2c2a2a"/>
                
        <TextInput
               style={styles.input}
                onChangeText={(text) => this.searchFilterFunction(text)}
                value={this.state.search}
                underlineColorAndroid="transparent"
                placeholder="Search..."
                placeholderTextColor="#000"
            />
           
         </View>
          <View style ={{backgroundColor:"#2c2a2a"}}>
           <View style = {{flexDirection:"row",marginTop:30,marginLeft:5}}>
              <Text style ={{fontSize:14,color:"#fff",fontWeight:"bold",marginLeft:5}}>{this.props.navigation.state.params.genre}</Text>
           
              <Text style ={{fontSize:11,color:"#fff",marginLeft:3}} numberOfLines={1}>({this.state.appDataSource.length})</Text>
              
           </View>
              <Text style ={{fontSize:12,color:"#fff",marginLeft:10,marginBottom:15}} numberOfLines={1}>Relevance, {this.props.navigation.state.params.genre}</Text>
        </View>
             <ScrollView>
              {
                   (this.state.isLoading === true) ? Loading : featured_menu  
              }
              
           </ScrollView>
        

          </SafeAreaView>
       
          
      )
   }else{
     let featured_menu=


       <View style={{backgroundColor:"#2c2a2a"}}>
       
      
      <FlatList
         numColumns={7}    
        showsHorizontalScrollIndicator={false}
        data={this.state.appDataSource}
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
       


 
       
      
      
    
      
 
      return (
        
      
      <SafeAreaView style={styles.container}>
         
       <View style={{flexDirection:"row",backgroundColor:"#fff"}}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#2c2a2a"/>
                
        <TextInput
               style={styles.input}
                onChangeText={(text) => this.searchFilterFunction(text)}
                value={this.state.search}
                underlineColorAndroid="transparent"
                placeholder="Search..."
                placeholderTextColor="#000"
            />
           
         </View>
          <View style ={{backgroundColor:"#2c2a2a"}}>
           <View style = {{flexDirection:"row",marginTop:30,marginLeft:5}}>
              <Text style ={{fontSize:14,color:"#fff",fontWeight:"bold",marginLeft:5}}>{this.props.navigation.state.params.genre}</Text>
              <Text style ={{fontSize:11,color:"#fff",marginLeft:3}} numberOfLines={1}>({this.state.appDataSource.results.length})</Text>
           </View>
              <Text style ={{fontSize:12,color:"#fff",marginLeft:10,marginBottom:15}} numberOfLines={1}>Relevance, {this.props.navigation.state.params.genre}</Text>
        </View>
             <ScrollView>
              {
                   (this.state.isLoading === true) ? Loading : featured_menu  
              }
              
           </ScrollView>
        

          </SafeAreaView>
       
          
      )
   }
    }
    
  }
 
const styles = StyleSheet.create({
 
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
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
