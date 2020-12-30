import React, {useState} from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';

export default function page2({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
        style={{marginBottom:30}}
        >記錄您每天的花費吧</Text>
          <TextInput
          style={[styles.input, { marginBottom: 30 }]}
          placeholder="名稱"/>

          <TextInput
          style={[styles.input, { marginBottom: 30 }]}
          placeholder="價錢"/>

          <TextInput
          style={[styles.input, { marginBottom: 30 }]}
          placeholder="詳細說明"/>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffe4c4",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "#6E6EFF",
      fontSize: 32,
      fontWeight: "800",
      marginBottom: 20,
    },
    input: {
      fontSize: 20,
      marginVertical: 10,
      padding: 8,
      width: 220,
      backgroundColor: "#fff",
      borderRadius: 18,
    },
    btnword: {
      justifyContent: "center",
      padding:5,
      height:35,
      fontSize: 19,
      color: "#ffe4c4",
      backgroundColor: "#6E6EFF",
      marginBottom: 10,
    },
    txt2: {
      marginTop: 10,
      fontSize: 16,
      color: "red",
    },
  });
  
