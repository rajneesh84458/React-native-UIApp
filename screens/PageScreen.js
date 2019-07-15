import React from 'react';
import { View,Image,Text,TouchableOpacity } from 'react-native';
// import {MaterialIcons,FontAwesome,Ionicons } from '@expo/vector-icons';

export default class PageScreen extends React.Component {
  
  render() {
      return(
          
        
       <View  style={{flex:1}}>
      <View style={{flex:0.5,backgroundColor:'#09194F',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../pics/rk.jpg')} style={{width:150,height:150,borderRadius:100}}/>
        <Text style={{color:'white',fontSize:20,padding:10}}>Rajneesh kumar</Text>
        <Text style={{color:'white'}}>React Native developer</Text>
        </View>
        <View style={{flex:0.6,backgroundColor:'rgba(155,215,213,1)'}}>
      <View style={{flex:0.2,flexDirection:'row'}}>
      
      {/* <MaterialIcons style={{marginLeft:10,padding:10}} name='feedback' size={32}></MaterialIcons> */}
         <Text style={{padding:15}}>feed</Text>
       



        </View>
        <View style={{flex:0.2,flexDirection:'row'}}>
      {/* <FontAwesome style={{marginLeft:10,padding:10}} name='home' size={32}></FontAwesome> */}
         <Text style={{padding:15}}>Home</Text>
        </View>
 
        <View style={{flex:0.2,flexDirection:'row'}}>
      {/* <Ionicons style={{marginLeft:10,padding:10}} name='md-camera' size={32}></Ionicons> */}
         <Text style={{padding:15}}>camera</Text>
        </View>


        <View style={{flex:0.2,flexDirection:'row'}}>
      {/* <MaterialIcons style={{marginLeft:10,padding:10}} name='notifications' size={32}></MaterialIcons> */}
         <Text style={{padding:15}}>Notification</Text>
        </View>
        </View>
        

      </View>

      )

  }

}