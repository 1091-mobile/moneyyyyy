import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  YellowBox,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as firebase from "firebase";
import firestore from "firebase/firestore";
import { config } from "../../firebase_config";
import { ScrollView } from "react-native-gesture-handler";

export default function page1({ navigation }) {
  //似乎是因為firebase與react native的相容問題，所以會跳出警告訊息
  YellowBox.ignoreWarnings(["Setting a timer"]);

  // const [modalVisible, setModalVisible] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const renderItem = ({ item, index }) => (
    <ScrollView>
      <View style={styles.item}>
        <Text style={[styles.text1,{width:20}]}>{index + 1}</Text>
        <Text style={[styles.text3,{width:70}]}>{item.class}</Text>
        <Text style={styles.text4}>{item.year}/</Text>
        <Text style={styles.text4}>{item.month}/</Text>
        <Text style={styles.text4}>{item.day}</Text>
        <Text style={[styles.text3,{width:60}]}>{item.name}</Text>
        <Text style={[styles.text3,{width:40}]}>{item.price}</Text>
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
          name: doc.data().name,
          year: doc.data().year,
          month: doc.data().month,
          day: doc.data().day,
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
      {/* <View style={styles.details}> */}
        <View style={styles.table}>
          <View style={styles.head}>
            <Text style={[styles.text2,{width:30}]}></Text>
            <Text style={[styles.text2,{width:70}]}>類別</Text>
            <Text style={[styles.text2,{width:90}]}>日期</Text>
            <Text style={[styles.text2,{width:70}]}>項目</Text>
            <Text style={[styles.text2,{width:70}]}>金額</Text>
            {/* <Text style={styles.text2}>修改</Text> */}
          </View>
          <View style={styles.list}>
            <FlatList
              data={records}
              renderItem={renderItem}
              keyExtractor={(item, index) => "" + index}
            ></FlatList>
            {/* <Text>修改</Text> */}
          </View>
        </View>
      {/* </View> */}
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
  details: {
    borderRadius: 20,
    height: 780,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 18,
    backgroundColor: "#ffe4c4",
  },
  table: {
    marginTop: 10,
    backgroundColor: "rgba(184,112,54,0.2)",
    borderRadius: 20,
    height: 680,
    width: 400,
  },
  head: {
    flexDirection: "row",
    backgroundColor: "rgba(184,112,54,0.4)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
  item: {    
    backgroundColor: "rgba(184,112,54,0.1)",
    flexDirection: "row",
    marginVertical: 3, //間距
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 400,
  },
  text: {
    fontSize: 40,
    color: "rgba(110,44,0,5)",
    fontWeight: "500",
  },
  text1: {
    fontSize: 20,
    width: 20,
    color: "rgba(110,44,0,5)",
    fontWeight: "500",
    textAlign: "center",
  },
  text2: {
    fontSize: 18,
    color: "rgba(110,44,0,4)",
    textAlign: "center",
  },
  text3: {
    fontSize: 18,
    color: "rgba(110,44,0,3)",
    marginHorizontal: 10,
    textAlign: "center",
    // backgroundColor:'green',
  },
  text4: {
    color: "rgba(110,44,0,3)",
    // backgroundColor:'green',
  },
  list: {
    flexDirection: "row",
  },
});