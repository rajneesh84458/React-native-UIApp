import React from 'react';
import { StyleSheet, TouchableOpacity,Text, View,TextInput ,ImageBackground} from 'react-native';
import { Button, } from 'native-base';
import Icon from 'react-native-fa-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import{SimpleLineIcons,MaterialCommunityIcons,Feather} from '@expo/vector-icons';

export default class SignUpScreen extends React.Component {
  
  render() {
    return (
      <KeyboardAwareScrollView>
      <View style={styles.container}>
      {/* <View>
            
            <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
            </View> */}
      


 {/* <ImageBackground source={require('../pics/book5.jpg')} style={{width:'100%',height:'100%'}}> */}

<View style={{flex:1,backgroundColor:'rgba(0,0,255,0.1)'}}>







      {/* <View style={styles.arrow}> */}
      {/* <Feather style={{marginLeft:15,padding:5,color:'white',marginTop:10}}name='arrow-left' size={35}></Feather> */}
      {/* </View> */}
      <View style={styles.first}>
      <Text style={{color:'white',fontSize:30,padding:20,marginTop:10}}>Sign Up</Text>


      </View>

      <View style={styles.second}>
    {<Icon name='user' allowFontScaling  style={{marginLeft:20,padding:10, fontSize: 20, color: 'white' }} />}
      {/* <SimpleLineIcons  style={{marginLeft:15,padding:5,color:'white'}}name='user' size={25}></SimpleLineIcons> */}
<TextInput style={styles.admin} underlineColorAndroid="silver"placeholder="Username"/>
</View>

        <View style={styles.third}>
        {<Icon name='envelope' allowFontScaling  style={{marginLeft:20,padding:10, fontSize: 20, color: 'white' }} />}
       
        {/* <MaterialCommunityIcons  style={{marginLeft:15,padding:5,color:'white'}}name='email-outline' size={25}></MaterialCommunityIcons> */}
        <TextInput style={styles.email} underlineColorAndroid="silver" placeholder='Email' />

        </View>
        <View style={styles.fourth}>
        {<Icon name='lock' allowFontScaling  style={{marginLeft:20,padding:10, fontSize: 20, color: 'white' }} />}
     
{/* <MaterialCommunityIcons  style={{marginLeft:15,padding:5,color:'white'}}name='lock-outline' size={25}></MaterialCommunityIcons> */}
 <TextInput secureTextEntry={true} style={styles.pass} underlineColorAndroid="silver" placeholder='Password' />

        </View>
        <View style={styles.fifth}>


        {<Icon name='birthday-cake' allowFontScaling  style={{marginLeft:20,padding:10, fontSize: 20, color: 'white' }} />}
     
{/* <MaterialCommunityIcons  style={{marginLeft:15,padding:5,color:'white'}}name='gift' size={25}></MaterialCommunityIcons> */}
 <TextInput style={styles.birth} underlineColorAndroid="silver" placeholder='Birthday' />


        </View>
        <View style={styles.six}>

       <TouchableOpacity style={{width:'50%',height:50,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(173,45,99,1)',borderColor:'transparent',borderRadius:50}} onPress={this.showMe}>

<Text style={{color:'white'}}>Register</Text>

  </TouchableOpacity>
        </View>
        <View style={styles.seven}>
          <Text style={{marginLeft:10,textAlign:'center',color:'white'}}>Already have an account?  Sign I
          </Text>
        </View>



</View>

      </View>
      </KeyboardAwareScrollView>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(32,54,107,1)',
    
  },

   first:
   {
     flex:0.3,
     width:"100%",
     height:'20%',
     borderColor:'transparent',
     marginBottom:20,
   },
  //    arrow:
  //  {
  //    flex:0.2,
  //    width:"100%",
  //    height:'30%',
  //    borderColor:'transparent',
  //    marginBottom:10,
  //  },
   second:
   {
     flex:0.1,
     flexDirection:'row',
     width:"100%",
     height:'30%',
     borderColor:'transparent',
     marginBottom:10,
   },
   
   third:
   {
     flex:0.1,
     flexDirection:'row',
     width:"100%",
     height:'30%',
     borderColor:'transparent',
     marginBottom:10,
   },

   fourth:
   {
     flex:0.1,
     flexDirection:'row',

     width:"100%",
     height:'30%',
     borderColor:'transparent',
     marginBottom:10,
   },

   fifth:
   {
     flex:0.1,
     flexDirection:'row',
     width:"100%",
     height:'30%',
     borderColor:'transparent',

     marginBottom:70,
   },
   six:
   {
     flex:0.3,
     width:"100%",
     height:'50%',
     borderColor:'green',
  
     marginBottom:10,
   },
   seven:
   {
     flex:0.1,
     width:"100%",
     height:'20%',
     borderColor:'transparent',
     borderWidth:1,
     marginLeft:20
    
  
   },

   admin:
  {
    width:"100%",
    height:40,
    borderColor:"transparent",
    borderWidth:1,
    paddingLeft:15,
    marginLeft:20,
  
  },
  email:
  {
    width:"100%",
    height:40,
    borderColor:'transparent',
    borderWidth:1,
    paddingLeft:15,
    marginLeft:20,
    
  },
  pass:
  {
    width:"100%",
    height:40,
    borderColor:'transparent',
    borderWidth:1,
    paddingLeft:15,
    marginLeft:20,
  
  },
  birth:
  {
    width:"100%",
    height:40,
    borderColor:'transparent',
    borderWidth:1,
    paddingLeft:15,
    marginLeft:20,
  
  }


});
