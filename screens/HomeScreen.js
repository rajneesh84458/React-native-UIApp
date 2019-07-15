
import React, { Component } from 'react';
import {  StyleSheet,style, View,Button, Text, Image, TouchableOpacity, Alert,Dimensions } from 'react-native';
import {  Header, Left, Body, Right, Title, Subtitle, Container,Icon } from 'native-base';


import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends React.Component{

  constructor(props) 
  {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  
    static navigationOptions = {
header: null,
};
_onLayoutDidChange = e => {
  const layout = e.nativeEvent.layout;
  this.setState({ size: { width: layout.width, height: layout.height } });
};




    render(){
        return(

          
 
            
            
            <View style={{flex:1,backgroundColor:'rgba(3,32,48,1)'}}>

          <View>
            <Header>
         
          <Left >
          <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
        </Left>
        <Body>
        <Title>Practical Exam</Title>
        </Body>
          <Right 













            
          />
        </Header>
        </View>
               
                {/* <View>
            

        <Button
          title="Go to SignUP"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <Button
          title="Go to ProfilePage"
          onPress={() => this.props.navigation.navigate('Profile')}
        />


        <Button
          title="Go to profile"
          onPress={() => this.props.navigation.navigate('Page')}
        />

        <Button
          title="Go to Department"
          onPress={() => this.props.navigation.navigate('Department')}
        />
        </View>
 */}


 <View style={{ flex: .5,width:'100%',height:'100%'}} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo
          currentPage={2}
          onAnimateNextPage={p => console.log(p)}>
          <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
            <Image source={require('../pics/exam1.jpg')}></Image>
          </View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}>
          <Image source={require('../pics/bk9.jpg')} style={{width:'100%',height:'100%'}}></Image>
          </View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
          <Image source={require('../pics/bk10.jpg')}style={{width:'100%',height:'100%'}}></Image>
          </View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
          <Image source={require('../pics/bk11.jpg')}style={{width:'100%',height:'100%'}}></Image>
          </View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
          <Image source={require('../pics/bk6.jpg')}style={{width:'100%',height:'100%'}}></Image>
          </View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
          <Image source={require('../pics/book4.jpg')}style={{width:'100%',height:'100%'}}></Image>
          </View>
</Carousel>
        
      </View>
     


      <View style={{flexDirection:'row',marginTop:40,flex:.5,width:'100%',borderWidth:1,borderColor:'transparent'}}>


<View style={{marginLeft:20,marginTop:50,paddingTop:10,width:'40%',height:'60%',borderColor:'transparent',borderWidth:1}}>  
<TouchableOpacity style={{ marginLeft:20,width:'60%',height:50,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(173,45,99,1)',borderColor:'transparent',borderRadius:50}}  onPress={() => this.props.navigation.navigate('Login')}>

      <Text style={{color:'white'}}>Sign In</Text>

        </TouchableOpacity>


</View>


<View style={{marginLeft:20,marginTop:50,paddingTop:10,width:'40%',height:'60%',borderColor:'transparent',borderWidth:1}}>  

<TouchableOpacity style={{ marginLeft:20,width:'60%',height:50,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(173,45,99,1)',borderColor:'transparent',borderRadius:50}}  onPress={() => this.props.navigation.navigate('SignUp')}>

<Text style={{color:'white'}}>Sign Up</Text>

  </TouchableOpacity>
</View>





</View>




            </View>
            
        )
    }
}


