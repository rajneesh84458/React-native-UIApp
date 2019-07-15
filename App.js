import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import {createStackNavigator } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation';

import ProfileScreen from './screens/ProfileScreen';
import PageScreen from './screens/PageScreen';
import DepartmentScreen from './screens/DepartmentScreen';
import AdminScreen from './screens/AdminScreen';
import StudentScreen from './screens/StudentScreen';

 
  

console.disableYellowBox = true;

    const AppDrawerNavigator = createDrawerNavigator({

    Home : HomeScreen,
    Login : LoginScreen,
    SignUp:SignUpScreen,
    Profile:ProfileScreen,
    Page:PageScreen,
    Department:DepartmentScreen,
    Admin:AdminScreen,
    Student:StudentScreen

})

export default class Myapp extends Component
{
 
  constructor(){
 
    super();
 
    this.state={
 
      isVisible : true,
 
    }
 
  }
 
  Hide_Splash_Screen=()=>{
 
    this.setState({ 
      isVisible : false 
 
    });
 
  }
 
  componentDidMount(){
 
    var hidee = this;
 
    setTimeout(function(){
 
      hidee.Hide_Splash_Screen();
 
    }, 5000);
 
 
  
  }
 
    render()
    {
        let Splash_Screen = (
 
            <View style={styles.SplashScreen_RootView}>
 
                <View style={styles.SplashScreen_ChildView}>
                    
                     <LottieView
                      source={require('./check.json')}
                      autoPlay
                      loop
                      
                     />
                      
 
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}><Animatable.Text animation="bounceOutRight">Welcome</Animatable.Text></View>

               
            </View> )
            
 
        return(
 
 
 
            <View style={styles.MainContainer}>
                  
              
              <AppDrawerNavigator/>
 
 {
   (this.state.isVisible === true) ? Splash_Screen : null
 }
            </View>
            
 
            
            
        );
    }
}
 
const styles = StyleSheet.create({

    MainContainer:
    {
        flex: 1,
       backgroundColor:'red',
       width:'100%',
       height:'100%'
        
    },
 
    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        
        position: 'absolute',
        width: '100%',
        height: '100%',
        
    },
 
    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
       backgroundColor:"rgba(65,146,75,1)",
        flex:1,
        
    },
 
    TouchableOpacity_Style:{
 
        width:25, 
        height: 25, 
        top:9, 
        right:9, 
        position: 'absolute'
 
    }
});
