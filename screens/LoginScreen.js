import React from 'react';
import {  StyleSheet, View, Text,TextInput, TouchableOpacity,Image, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Title,Button } from 'native-base';
import Icon from 'react-native-fa-icons';
// import{SimpleLineIcons,Ionicons} from '@expo/vector-icons';

export default class LoginScreen extends React.Component {
  constructor()
  {
    super()
    this.state={
      showMe:'true'
    },

    abc = () => {
      Alert.alert(
     'Alert Title',
     'My Alert Msg',
     [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
       {text: 'OK', onPress: () => console.log('OK Pressed')},
     ],
    
   )
     }
  }


  render() {
    return (
      

      
      <View style={styles.container}>
      
      <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',marginTop:150}}>
    
   <View style={styles.line1}>

   {<Icon name='user' allowFontScaling  style={{marginLeft:10, fontSize: 30, color: 'white' }} />}
      
      {/* <SimpleLineIcons  style={{marginLeft:10,padding:5}}name='user' size={32}></SimpleLineIcons> */}
      
      <TextInput name="address-book" style={styles.admin} underlineColorAndroid="silver" placeholder="Username"

    />
    
    

      </View>
      
      <View style={styles.line2}>
     
{ <Icon name='lock' style={{marginLeft:10, fontSize: 30, color: 'white' }} />}
 {/* <Ionicons  style={{marginLeft:15,padding:5}}name='ios-lock-outline' size={32}></Ionicons> */}
      <TextInput secureTextEntry={true} style={styles.pass} underlineColorAndroid="silver" placeholder="Password"/>
      </View>
     
     <View style={styles.third}>
       <TouchableOpacity>
       <Text style={{color:'white',marginLeft:180}}>Forget Password</Text></TouchableOpacity>
     </View>

      <View style={styles.fourth}>
      <TouchableOpacity style={{width:'50%',height:50,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(173,45,99,1)',borderColor:'transparent',borderRadius:50}} onPress={this.showMe}>

      <Text style={{color:'white'}}>Sign In</Text>

        </TouchableOpacity>

</View>
<View style={styles.fifth}>
<Text style={{textAlign:'center',color:'white'}}>Don't have an account?</Text>
<Text style={{ fontSize: 45, color: 'blue' }}>
   
  
 </Text>
</View>
<View>
            
            <Button 
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
            </View>
      


      </View>



 
 
 


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    flex: 1,
    backgroundColor: 'rgba(82,85,100,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
line1:
{ 
flexDirection:'row',

width:'100%',
height:'10%',
borderWidth:1,
borderColor:"transparent",

},

line2:{
  flexDirection:'row',
  width:'100%',
  height:'10%',
  borderWidth:1,
  borderColor:"transparent",
  
  },
  admin:
  {
    width:300,
    height:40,
    borderColor:"transparent",
    borderWidth:1,
    paddingLeft:10,
    marginLeft:30,
    backgroundColor:"rgba(82,85,100,1)",
    color:'white',
  },
  pass:
  {
    width:300,
    height:40,
    borderColor:"transparent",
    borderWidth:1,
    paddingLeft:10,
    marginLeft:30,
    backgroundColor:"rgba(82,85,100,1)",
    color:'white',
  },
  third:
  { 

    width:300,
    height:30,
  },
  fourth:
  {
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    height:"20%"
  },

  fifth:{
    width:"100%",
    height:"10%",
    
    

  }
  
});
