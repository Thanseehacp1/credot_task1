
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'; 

const Splash = ({navigation}) => {
   
  return (
   <View style={{
    flex:1,
    
    
   }}>
    <View style={{
      flex:1,
    justifyContent:"center",
    alignSelf:"center",
    alignContent:"center",
    alignItems:"center",
    
   }}>
    
     
      <Text style={{
justifyContent:"center",
        fontSize:30,
        fontWeight:"bold",
       
        
      }}>Enjoy Healthy</Text>
     
      <Text style={{
        justifyContent:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"#ff59ac",
       
      }}>Food</Text>
    </View>
    <TouchableOpacity 
     onPress={()=>
      navigation.navigate('page1')
       
    }
    style={{
        height:40,
        width:150,
        backgroundColor:"#ff4646",
        alignSelf:'center',
        borderRadius:30,
       justifyContent:'center',
       marginBottom:13,
      }}>
        <Text style={{
          color:'white',
          fontSize:14,
          fontWeight:'bold',
          alignSelf:'center',  
         
            
        }}>Get Started</Text>
       
      </TouchableOpacity>
    </View>
    
  
  )
}

export default Splash

const styles = StyleSheet.create({})