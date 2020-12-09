import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/account/SignIn';
import SignUp from './src/account/SignUp';
import Home from './homescreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7c7877',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: null
      }}>
      <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{ title: '註冊' }}
      />       
      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        options={{title: '登入'}}
      
      />
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={{headerShown: false}}
       
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}