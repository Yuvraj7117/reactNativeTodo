import { StyleSheet, ScrollView,Text,TextInput, View, TouchableOpacity,Alert, Keyboard } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React,{useState} from 'react';
import { invoicepdf } from '../invoicepdf';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import  { useFonts}from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Bill = () => {

  const now = new Date().getTime()

     const data = {fname:"", address:"", number:"", product:"" , quantity:"" , invoiceno:`${now}` , total:"", paid:"" , remains:"" ,method:""}

     const [userInput,setUserInput]=useState(data)
    //  console.log(userInput)
     const [user,setUser] = useState([])
     console.log(user)   
    // const [selectedPrinter, setSelectedPrinter] = useState();
  
     const handleChange = (text,input)=>{
        setUserInput({...userInput,[input]:text})
     }

    const handleSend=()=>{
      const {fname,address,number , quantity ,total, paid, remains} = userInput
     
      if(fname && address && number && quantity && total && paid && remains !== ""){
        Keyboard.dismiss()
        setUser([...user,userInput])
        setUserInput(data)
        setTimeout(()=>{printToFile()},1000)
      }else{
        myAlert()
      } 
    }

    const myAlert=()=>Alert.alert(
      'Remember',
      'Please Fill All the Fields',
      [{
        text:"ok",
      }]
    )

    // const print = async () => {
    //   // On iOS/android prints the given html. On web prints the HTML from the current page.
    //   await Print.printAsync({
    //     html,
    //     printerUrl: selectedPrinter?.url, // iOS only
    //   });
    // };
  
    const printToFile = async () => {
      let html = invoicepdf(userInput)
      console.log(html)
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      const { uri } = await Print.printToFileAsync({ html });
      console.log('File has been saved to:', uri);
      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    };
  
    // const selectPrinter = async () => {
    //   const printer = await Print.selectPrinterAsync(); // iOS only
    //   setSelectedPrinter(printer);
    // };



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


     //rendering component
  return (
    <View style={styles.container}>
      <Text style={styles.texthead}>Please Fill All The Details </Text>
      <ScrollView  >
        <View  style={{marginTop:10}}>
          <Text style={styles.text}>Name</Text>
          <TextInput placeholder='Full Name' keyboardType="default" value={userInput.fname}  onChangeText={(text)=>handleChange(text,"fname")} style={styles.textinput} />
        </View>

        <View  style={{marginTop:10}}>
          <Text style={styles.text}>Address</Text>
          <TextInput placeholder='Address' value={userInput.address} onChangeText={(text)=>handleChange(text,"address")} style={styles.textinput} />
        </View>

        <View  style={{marginTop:10}}>
          <Text style={styles.text}> Mobile No.</Text>
          <TextInput placeholder='Mobile No.'  value={userInput.number} keyboardType='numeric'  onChangeText={(text)=>handleChange(text,"number")} style={styles.textinput} />
        </View>

        <View style={styles.InputContainer}>
            <Text style={styles.text}>Product : </Text>
      
          <Picker style={styles.picker} onValueChange={(itemValue) => handleChange(itemValue,"product")}>
            <Picker.Item label="Asus X415" value="Asus X415" />
            <Picker.Item label="Asus Chromebooks" value="Asus Chromebooks" />
            <Picker.Item label="Asus Chromebooks Flip" value="Asus Chromebooks Flip" />
            <Picker.Item label="Asus Vivobook Pro" value="Asus Vivobook Pro" />
            <Picker.Item label="Asus Vivobook Slate" value="Asus Vivobook Slate" />
            <Picker.Item label="Asus Vivobook S" value="Asus Vivobook S" />
            <Picker.Item label="Asus Vivobook" value="Asus Vivobook" />
            <Picker.Item label="Asus Vivobook Flip" value="Asus Vivobook Flip" />
            <Picker.Item label="Asus Zenbook Pro" value="asus Zenbook Pro" />
            <Picker.Item label="Asus Zenbook S" value="Asus Zenbook S" />
            <Picker.Item label="Asus Zenbook" value="Asus Zenbook" />
            <Picker.Item label="Asus Zenbook Flip" value="Asus Zenbook Flip" />
            <Picker.Item label="Asus Zenbook Duo" value="Asus Zenbook Duo" />
            <Picker.Item label="Asus Tuf Dash F15" value="Asus Tuf Dash F15" />
            <Picker.Item label="Asus Tuf Gaming F15" value="Asus Tuf Gaming F15" />
            <Picker.Item label="Asus ROG Strix G15" value="Asus ROG Strix G15" />
            <Picker.Item label="Asus ROG Strix Scar 15" value="Asus ROG Strix Scar 15" /> 
          </Picker>
  
        </View>

        <View  style={{marginTop:10}}>
          <Text style={styles.text}> Quantity</Text>
          <TextInput placeholder='Quantity'  value={userInput.quantity} keyboardType='numeric'  onChangeText={(text)=>handleChange(text,"quantity")} style={styles.textinput} />
        </View>

        <View  style={{marginTop:10}}>
          <Text style={styles.text}> Invoice No.</Text>
          <TextInput placeholder='Invoice No.'  value={userInput.invoiceno} keyboardType='numeric'  onChangeText={(text)=>handleChange(text,"invoiceno")} style={styles.textinput} />
        </View>

        <View  style={{marginTop:10}}>
          <Text style={styles.text}>Total Amount</Text>
          <TextInput placeholder='Total Amount'  value={userInput.total} keyboardType='numeric'  onChangeText={(text)=>handleChange(text,"total")} style={styles.textinput} />
        </View>

        <View  style={{marginTop:10}}>
          <Text style={styles.text}> Paid Amount</Text>
          <TextInput placeholder='Paid Amount'  value={userInput.paid} keyboardType='numeric'  onChangeText={(text)=>handleChange(text,"paid")} style={styles.textinput} />
        </View>

        <View  style={{marginTop:10}}>
          <Text style={styles.text}>Remaining Balance</Text>
          <TextInput placeholder='Remaining Balance'  value={userInput.remains} keyboardType='numeric'  onChangeText={(text)=>handleChange(text,"remains")} style={styles.textinput} />
        </View>

        <View style={styles.InputContainer}>
            <Text style={styles.text}>Payment Method : </Text>
            <Picker style={styles.picker} onValueChange={(itemValue) => handleChange(itemValue,'method')}>
            <Picker.Item label="Credit" value="Credit" />
            <Picker.Item label="Cash" value="Cash" />
            <Picker.Item label="Net Banking" value="NetBanking" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
      </View>
      
      </ScrollView>
      <View>
      <TouchableOpacity style={styles.sendbutton} onPress={()=>{handleSend()}}><Text style={styles.sendbuttontext}>Send</Text></TouchableOpacity>
      </View>
      {/* <View><Text>{`${selectedPrinter}`}</Text></View> */}
    </View>

  )
}

export default Bill

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    padding:30,
    justifyContent:"center",
  },
  textinput:{
    borderCurve:2,
    borderColor:"#c48425",
    borderRadius:10,
    borderWidth:2,
    paddingLeft:10,
    color:"#c48425",
    textTransform: 'capitalize',
    fontFamily:"Phudu"
  },
  sendbutton:{
     backgroundColor:"#c48425",
     textColor:"#fff",
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  sendbuttontext: {
    color: "black", 
    fontFamily: "Bebas",
    fontSize: 20,
    fontWeight:"900"

  },
  text: {
    color: '#c48425',
    margin: 10,
    fontSize: 20
  },
  picker: {
    color: '#c48425',
    fontSize:50,
    borderColor:'#c48425',
  },
  texthead:{
    color: '#c48425',
    margin: 10,
    fontSize: 25,
    fontFamily:"serif",
    fontStyle:"italic"

  }
})