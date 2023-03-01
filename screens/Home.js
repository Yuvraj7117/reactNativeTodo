import { StyleSheet, View , Image , Text} from 'react-native'
import React,{useEffect} from 'react'
import  { useFonts}from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Home = ({navigation}) => {
 useEffect(()=>{
  setTimeout(()=>{navigation.navigate("Button")},5000)
 },[])

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
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.logo}/>
      <Text style={styles.invoice}>INVOICE</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        backgroundColor:"black",
        justifyContent:'center',
        alignItems:"center",
    },
   logo: {
       borderRadius:200,
       width:150,
       height:150,
    },
    invoice:{
      color:"#d69d4d",
      letterSpacing:35,
      fontFamily:"Phudu",
      fontSize:20,
    }
})