import React, { Component } from 'react';
import{View,TextInput,Text,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Item, Input, Label,Button } from 'native-base';
export default class DepartmentScreen extends Component {
  render() {
    return (
        
      <Container>
       <View style={{flex:.5,width:'100%',height:'100%',backgroundColor:'rgba(106,190,131,1)'}}>
        <View style={{margingTop:10,marginLeft:20,marginRight:20}}>
        
          <TextInput underlineColorAndroid="silver"placeholder="Enter name"/>
      
        
          </View>
          <View style={{margingTop:10,marginLeft:20,marginRight:20}}>
        
        <TextInput underlineColorAndroid="silver"placeholder=" Enter your Ref.Id "/>
    
      
        </View>
  
        <View style={{margingTop:10,marginLeft:20,marginRight:20}}>
        
        <TextInput underlineColorAndroid="silver"placeholder=" Enter your Email address"/>
    
      
        </View>
        
        <View style={{margingTop:10,marginLeft:20,marginRight:20}}>
        
        <TextInput  secureTextEntry={true} underlineColorAndroid="silver"placeholder=" Enter your password "/>
    
      
        </View>
<View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',width:"100%", height:"20%"}}>
           <TouchableOpacity style={{marginLeft:20,width:'20%',height:30,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'red',borderColor:'transparent'}} onPress={this.showMe}>

<Text style={{color:'white'}}>Save</Text>
</TouchableOpacity>

 <TouchableOpacity style={{width:'20%',height:30,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'blue',borderColor:'transparent'}} onPress={this.showMe}>

<Text style={{color:'white'}}>Edit</Text>
</TouchableOpacity>

</View>
          </View>
      </Container>
    
    );
  }
}