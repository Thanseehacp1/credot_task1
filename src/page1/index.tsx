import { StyleSheet, Text, View ,Image,TextInput,FlatList, TouchableOpacity} from 'react-native'
import React,{useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Page1 = () => {
    const [search, setSearch] = useState("");
    const [data,setData]=React.useState([
        {
         
          name:"Apple",
          price:"1kg 20",
        icon:<FontAwesome5 name="apple-alt" size={40} color="red" />
       
        },
        
      
       
       
        {
          
          name:"cherry",
          price:"1kg 30",
        icon:  <MaterialCommunityIcons name="fruit-cherries" size={40} color="red" />
        
        },
        {
          
          name:"watermelon",
          price:"1kg 25",
        icon:<MaterialCommunityIcons name="fruit-watermelon" size={40} color="red" />
        },
        {
          
          name:"grapes",
          price:"1kg 50",
         icon:<MaterialCommunityIcons name="fruit-grapes" size={40} color="purple" />
      
        },
        {
          
          name:"pineapple",
          price:"1kg 30",
         icon: <MaterialCommunityIcons name="fruit-pineapple" size={40} color="yellow" />
      
        },
       
      ]);
  return (
    <View style={{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
       marginLeft:15,
    }}>
        <View style={{
            
          
           marginTop:60,
           
        
           
        }}>
             <Text style={{
        fontSize:22,
        color:"black",
        fontWeight:"800"
             }}>Find The Best {"\n"} Food Around You</Text>
      
        </View>
        <View style=
        {{
           
           marginBottom:20,
           flexDirection:"row",
        }}>
<TextInput
   
   onChangeText={(text) => {
      setSearch(text);
    }}
    value={search}
    

    style={{
      backgroundColor: "#e9e9e9",
      height: 40,
      width: "80%",

      borderWidth: 1,
      borderColor: "white",
    borderRadius:8,
      marginTop: 20,
      paddingHorizontal:10,
      marginLeft:20,
    }}
    placeholder="  Search your food"
  />
        </View>
        <View style={{
        
      flexDirection:"row"
        }}>
        <Text style={{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
        }}>Find  </Text>
 <Text style={{
        fontSize:17,
        fontWeight:"bold",
        color:"red",
        }}>5km ></Text>
        </View>
        <View>
        <FlatList
data={data}
showsVerticalScrollIndicator={true}
renderItem={({item})=>(
  <TouchableOpacity>
<View style={{
  
  height:80,
  width:300,
  backgroundColor:"#e9e9e9",
paddingVertical:5,
borderRadius:5,
marginBottom:5,


justifyContent:"center",
alignContent:"center",
alignSelf:"center"
  
}}>
  <View style={{
  
    flexDirection:"row",
    marginLeft:10,
  }}>
 {item.icon}

<View style={{flexDirection: "column",marginLeft:10,}}>
  
  <Text>{item.name}</Text>
  <Text>{item.price}</Text>
  </View>
  <View style={{flexDirection: "row",marginLeft:40,
alignContent:"center",alignItems:"center",justifyContent:"center",alignSelf:"center"}}>
  <TouchableOpacity style={{
    height:30,
    width:100,
    borderRadius:5,
    backgroundColor:"#00ec00"
  }}>
    <Text style={{
      alignItems:"center",justifyContent:"center",alignSelf:"center"
    }}>Add To Cart</Text>
  </TouchableOpacity>

  </View>
  </View>
 </View>

</TouchableOpacity>
)}
  />  
  </View>
  </View>     
    
  )
}

export default Page1

const styles = StyleSheet.create({})