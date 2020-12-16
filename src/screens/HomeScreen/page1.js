import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  YellowBox,
  StyleSheet,
  StatusBar,
} from "react-native";
import { firebase } from '../../firebase/config'

// import * as firebase from "firebase";
// import firestore from "firebase/firestore";
// import { config } from "../../firebase_config";
import { ScrollView } from "react-native-gesture-handler";

export default function page1({ navigation }) {
  //似乎是因為firebase與react native的相容問題，所以會跳出警告訊息
  YellowBox.ignoreWarnings(["Setting a timer"]);

  // const [modalVisible, setModalVisible] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const renderItem = ({ item, index }) => (
    <ScrollView>
      <View style={styles.item}>
        <Text style={styles.text3}>&#12288;{index+1}</Text>
        <Text style={styles.text3}>{item.class}</Text>
        <Text style={styles.text3}>{item.data}</Text>
        <Text style={styles.text3}>{item.name}</Text>
        <Text style={styles.text3}>{item.price}</Text>
      </View>
    </ScrollView>
  );

  //啟動firebase app為避免重複啟動，檢查一下
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  //啟動firestore
  const db = firebase.firestore();
  //把讀取的資料放到state，才會讓資料現在flatlist
  const [records, setRecords] = useState([]);
  //讀取
  async function readData() {
    const newRecords = [];
    try {
      //及時連到record這個集合，get他的值
      const querySnapshot = await db.collection("record").get();

      querySnapshot.forEach((doc) => {
        const newRecord = {
          class: doc.data().classification,
          date: doc.data().data,
          name: doc.data().name,
          price: doc.data().price,
        };

        newRecords.push(newRecord);
      }); //foreach

      setRecords(newRecords);
    } catch (e) {
      //try

      console.log(e);
    }
  } //readData

  useEffect(() => {
    readData();
  }, []);
  //頁面顯示主程式碼
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>記帳簿</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.head}>
          <Text style={styles.text2}>&#12288;</Text>
          <Text style={styles.text2}>類別</Text>
          <Text style={styles.text2}>日期</Text>
          <Text style={styles.text2}>項目</Text>
          <Text style={styles.text2}>金額</Text>
        </View>

        <FlatList
          data={records}
          renderItem={renderItem}
          keyExtractor={(item, index) => "" + index}
        ></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4c4",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    marginTop: 150,
    backgroundColor: "#ffe4c4",
  },
  details: {
    marginTop: 20,
    backgroundColor: "rgba(184,112,54,0.1)" ,
    borderRadius: 20,
    height: 800,
  },
  head: {
    flexDirection: "row",
    backgroundColor: "rgba(184,112,54,0.4)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    // flex: 1,
    backgroundColor: "rgba(184,112,54,0.1)",
    flexDirection: "row",
    marginVertical: 3, //間距
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "rgba(110,44,0,5)",
    fontWeight: "500",
  },
  text2: {
    fontSize: 24,
    width: 80,
    color: "rgba(110,44,0,4)",
  },
  text3: {
    fontSize: 24,
    width: 80,
    color: "rgba(110,44,0,3)",
  },
});
