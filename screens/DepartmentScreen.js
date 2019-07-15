import React from 'react';
import {View,Text,style,TouchableOpacity} from 'react-native';


export default class DepartmentScreen extends React.Component{
  render(){
    return(
      <View style={{flex:1,width:'100%',height:'100%',backgroundColor:'rgba(37,44,65,1)'}}>
      <View style={{flex:.2,width:'100%',backgroundColor:'rgba(37,44,65,1)',borderWidth:1,borderColor:'transparent'}}>
<View style={{justifyContent:'center',alignItems:'center',width:"100%", height:"20%"}}>
      <TouchableOpacity style={{width:'50%',height:50,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(173,45,99,1)',borderColor:'white',borderRadius:50}} onPress={this.showMe}>

      <Text style={{color:'white'}}>Admin</Text>

        </TouchableOpacity>
        </View>
      </View>





       <View style={{flex:.2,width:'100%',backgroundColor:'rgba(37,44,65,1)',borderWidth:1,borderColor:'transparent'}}>
<View style={{justifyContent:'center',alignItems:'center',width:"100%", height:"20%"}}>
      <TouchableOpacity style={{width:'50%',height:50,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(173,45,99,1)',borderColor:'white',borderRadius:50}} onPress={this.showMe}>

      <Text style={{color:'white'}}>Faculty</Text>

        </TouchableOpacity>
        </View>
      </View>

      

       <View style={{flex:.2,width:'100%',backgroundColor:'rgba(37,44,65,1)',borderWidth:1,borderColor:'transparent'}}>
<View style={{justifyContent:'center',alignItems:'center',width:"100%", height:"20%"}}>
      <TouchableOpacity style={{width:'50%',height:50,justifyContent:"center",alignItems:"center",margin:10,marginTop:50,borderWidth:1,backgroundColor:'rgba(173,45,99,1)',borderColor:'white',borderRadius:50}} onPress={this.showMe}>

      <Text style={{color:'white'}}>Students</Text>

        </TouchableOpacity>
        </View>
      </View>
      </View>
    )
  }
}