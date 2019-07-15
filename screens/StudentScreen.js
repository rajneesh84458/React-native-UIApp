import React, { Component } from 'react';
import{View,TextInput,Text,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Item, Input, Label,Button } from 'native-base';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
export default class StudentScreen extends Component {

  
  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }
  render() {
    return (
        
      <View style={{flex:1,width:'100%',height:'100%',backgroundColor:'white'}}>
       <View style={{flex:.8,width:'100%',height:'100%',backgroundColor:'rgba(106,190,131,1)'}}>
        <View style={{margingTop:10,marginLeft:20,marginRight:20}}>
        
          <TextInput underlineColorAndroid="silver"placeholder="First Name"/>
      
        
          </View>
          <View style={{margingTop:10,marginLeft:20,marginRight:20}}>
        
        <TextInput underlineColorAndroid="silver"placeholder=" Last Name "/>
    
      
        </View>
  
        <View style={{margingTop:10,marginLeft:20,marginRight:20}}>
        
        <TextInput underlineColorAndroid="silver"placeholder="  Email address"/>
    
      
        </View>
        
        <View style={{margingTop:10,marginLeft:20,marginRight:20}}>
        
        <TextInput  underlineColorAndroid="silver"placeholder="DOB "/>
    
      
        </View>


<View style={{margingTop:5,marginLeft:20}}>
       <Label>Gender:</Label>
       <RadioGroup size={15} thickness={1} color='green'
        onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton value={'item1'} >
          <Text>Male</Text>
        </RadioButton>
        <RadioButton value={'item2'}>
          <Text>female</Text>
        </RadioButton> 
        </RadioGroup>
        
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
          
      </View>
    
    );
  }
}

