import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen} from './src/screens'

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#7c7877',
            },
            headerTitleStyle: {
              fontSize: 20
            },
            headerTintColor: '#fff',
          }}>
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
            <>
              <Stack.Screen
                name="Login" component={LoginScreen}
                options={{
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: '#7c7877',
                    height: 100
                  },
                  headerTitleStyle: {
                    fontSize: 28
                  },
                  headerTintColor: '#fff',
                }} />
              <Stack.Screen
                name="Registration" component={RegistrationScreen}
                options={{
                  headerLeft: null,
                  headerTitleAlign: "center",
                  headerStyle: {
                    backgroundColor: '#7c7877',
                    height: 100
                  },
                  headerTitleStyle: {
                    fontSize: 28
                  },
                  headerTintColor: '#fff',
                }} />
               
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React, { useState } from "react";
// //import { View, Text } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// //import { createStackNavigator } from '@react-navigation/stack';

// import SignIn from "./src/account/SignIn";
// import SignUp from "./src/account/SignUp";
// import HomeScreen from "./homescreen";
// import Chart from "./src/chart/Chart";

// //const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       tabBarOptions={{
//         style: { backgroundColor: "#F0E5DE", shadowColor: "#7c7877" },
//         tabStyle: {},
//         labelStyle: {
//           fontSize: 20,
//           fontWeight: "bold",
//           color: "#7c7877",
//           lineHeight: 20,
//         },
//       }}>
//         <Tab.Screen name="SignIn" component={SignIn} />
//         <Tab.Screen name="SingUp" component={SignUp} />
//         <Tab.Screen name="HomeSceen" component={HomeScreen} />
//         <Tab.Screen name="Chart" component={Chart} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;
