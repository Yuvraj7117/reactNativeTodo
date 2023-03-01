import { StyleSheet, View } from 'react-native';
import {Home,Bill, Buttoninvoice} from './screens/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

const Stack = createNativeStackNavigator();
  return (
 
<NavigationContainer >
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Button" component={Buttoninvoice} options={{headerShown:false}}/>
    <Stack.Screen name="Bill" component={Bill} options={{headerShown:false}}/>
  </Stack.Navigator>
</NavigationContainer>

  );
};

