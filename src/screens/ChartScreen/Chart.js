import React from 'react';
import {Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';
import * as firebase from "firebase";

//尚未完成功能
//1.抓取使用者的id:https://www.itread01.com/content/1550483643.html

//已完成功能
//1.圖表前端介面
//2.圖表連後端資料庫
//3.onload事件
//4.webview內容放到地端上



export default function App(){
  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


const db = firebase.firestore();
let user = firebase.auth().currentUser;

  const charturl='./chart.html'+'';
  //獲取當月月份
  let month = new Date().getMonth()+1;
  return (
    
<View style={{flex:1}}>
    <View style={{alignItems: 'center',backgroundColor:"#adb5bd"}}>
    <Text style={{
      height:50,
      marginTop:60,
      fontSize:30,
      marginBottom:10,
      color: "#FFFFFF",
      
      }}>當月數據圖表（{month}月{user.uid}）</Text>
    </View>  
    <WebView 
    startInLoadingState="true" 
    renderLoading={displaySpinner}  
    source={require(charturl)} 
    // source={{uri:'https://codepen.io/0430shinyu/full/QWKqjgY'+'?test=2'}}
    //onMessage event is required as well to inject the JavaScript code into the WebView.
    onMessage={(event) => {}}
    javaScriptEnabled={true}
    injectedJavaScript={ `
    document.getElementById('container').value="${user.uid}";
    `}
  
     />
</View>
  );
}

function displaySpinner() {
  return (
  <View >
    <Spinner
          visible={true}
          textContent={'努力生成圖表中...'}
          overlayColor={'rgba(180, 128, 104, 0.48)'}
        />
    </View>
  );
}



