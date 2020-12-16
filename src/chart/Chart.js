import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


function App(){
  
  return (
      
  <WebView source={{ uri: 'https://codepen.io/0430shinyu/full/NWRdEYb' }} style={{ marginTop: -200 }} />
  );
}

export default App;
