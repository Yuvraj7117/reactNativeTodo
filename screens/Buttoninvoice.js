import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, { useEffect } from 'react'
import  { useFonts}from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const Buttoninvoice = ({navigation}) => {

  //fontFamily
  let [fontsLoaded] = useFonts({
 "Phudu":require("../assets/fonts/Phudu-Bold.ttf"),
 "Bebas":require("../assets/fonts/BebasNeue-Regular.ttf")
  })

  // SplashScreen

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  },[])

  if(!fontsLoaded){
    return undefined
  }else{
    SplashScreen.hideAsync();
  }

  // renderingcomponent
    return (
      <View style={styles.container}>
       <Text style={styles.heading}>Create an Invoice</Text>
       <View><Image source={require('../assets/splash.png')} style={styles.logo}/></View>
         <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Bill")}}>
          <Text style={{fontSize:20,fontFamily:"Bebas",borderColor:"#fff"}}>Create Bill</Text>
         </TouchableOpacity>
  
        
      </View>
    )
  }


export default Buttoninvoice;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    padding:30,
    justifyContent:"center",
    alignItems:"center",
  },
  button:{
    color:"#fff",
    backgroundColor:"#d69d4d",
    width:120,
    padding:5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    
    
 
  },
  heading:{
    color:"#d69d4d",

   position:'absolute',
   top:0,
    fontSize:35,
    textDecorationLine:'underline ',
    margin: 30,
    fontFamily:'Phudu'

  }
})