import React, { useState } from "react";
//import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createStackNavigator } from '@react-navigation/stack';

import SignIn from "./src/account/SignIn";
import SignUp from "./src/account/SignUp";
import HomeScreen from "./homescreen"

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: "#F0E5DE", shadowColor: "#7c7877" },
        tabStyle: {},
        labelStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "#7c7877",
          lineHeight: 20,
        },
      }}>
        <Tab.Screen name="SignIn" component={SignIn} />
        <Tab.Screen name="SingUp" component={SignUp} />
        <Tab.Screen name="HomeSceen" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
