import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LandingScreen from "../../LoginPages/start.jsx";
const Stack = createNativeStackNavigator();


export default function MainScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" 
             component={LandingScreen}
             options= {{headerShown: false}} />
    </Stack.Navigator>
  );
}