import React from 'react';
import {Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';

//尚未完成功能
//1.抓取使用者的id:https://www.itread01.com/content/1550483643.html

//已完成功能
//1.圖表前端介面
//2.圖表連後端資料庫
//3.onload事件
//4.webview內容放到地端上



export default function App(){
  
  //獲取當月月份
  let month = new Date().getMonth()+1;
  return (
    
<View style={{flex:1}}>
    <View style={{alignItems: 'center'}}>
    <Text style={{height:50,marginTop:20,fontSize:30,color: "#7c7877"}}>當月數據圖表（{month}月）</Text>
    </View>  
    <WebView 
    startInLoadingState="true" 
    renderLoading={displaySpinner}  
    source={require('./chart.html')} 
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


