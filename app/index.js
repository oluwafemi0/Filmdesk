import { StyleSheet, Text, View } from "react-native";
import { Home, Portfolio, Prices, Settings, Transaction } from "../screens/index";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from "react-native";

const Tab = createBottomTabNavigator()
const ScreenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}



export default function Page() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen  name="Home" component={Home} options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                  <AntDesign name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color:'#16247d', }}HOME></Text>
              </View>
          )}
        }} />
        <Tab.Screen name="Portfolio" component={Portfolio} options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <AntDesign name="file1" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color:'#16247d', }}Portfolio></Text>
              </View>
          )}
        }}  />
        <Tab.Screen name="Transaction" component={Transaction}  options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center', top: Platform.OS == "ios" ? -10 : -20, width: Platform.OS == "ios" ? 50 : 60, height: Platform.OS == "ios" ? 50 : 60, borderRadius: Platform.OS == "ios" ? 25 : 30, backgroundColor: "#16247d"}}>
                  <AntDesign name="database" size={24} color={focused ? "#fff": "#111"} />
              </View>
          )}
        }} />
        <Tab.Screen name="Prices" component={Prices}  options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name="pricetag-outline" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color:'#16247d', }}Prices></Text>
              </View>
          )}
        }} />
        <Tab.Screen name="Settings" component={Settings}  options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <AntDesign name="setting" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color:'#16247d', }}Settings></Text>
              </View>
          )}
        }} />
        
      </Tab.Navigator>

    </NavigationContainer>
  );
}
