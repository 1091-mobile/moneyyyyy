import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';



function App(){
  
  return (
<View style={{flex:1}}>
    <View style={{alignItems: 'center'}}>
    <Text style={{height:50,marginTop:80,fontSize:30,color: "#7c7877"}}>12月數據圖表</Text>
    </View>
      
      <WebView source={{ uri: 'https://codepen.io/0430shinyu/full/NWRdEYb' }} style={{ marginTop: -300}} />
    <WebView source={{ uri: 'https://codepen.io/0430shinyu/full/NWRdEYb' }} style={{marginTop: -300}} />
</View>
  );
}

export default App;
