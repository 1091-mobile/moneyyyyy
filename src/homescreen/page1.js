import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { greaterThan } from "react-native-reanimated";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";
export default class cash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["編號", "品項", "金額"],
      tableTitle: ["1", "2", "3", "4"],
      tableData: [
        ["雞翅", "3000"],
        ["雞翅", "3000"],
        ["雞翅", "3000"],
        ["雞翅", "3000"],
      ],
    };
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        {/* 標題 */}
        <View style={styles.title}>
          <Text style={styles.text}>記帳專區</Text>
        </View>
        {/* 內容 */}
        <View style={styles.details}>
          {/* 表格 */}
          <Table style={styles.table}>
            <Row
              data={state.tableHead}
              flexArr={[1.3,2,2]}
              style={styles.head}
              textStyle={styles.text1}
            />
            <ScrollView>
              <TableWrapper
                style={styles.wrapper}
                borderStyle={{
                  borderWidth: 2,
                  borderColor: "rgba(240,229,222,0.6)",
                }}
              >
                <Col
                  // flexArr={[2]}
                  data={state.tableTitle}
                  style={styles.title}
                  textStyle={styles.text2}
                />
                <Rows
                  data={state.tableData}
                  flexArr={[1]}
                  style={styles.row}
                  textStyle={styles.text3}
                />
              </TableWrapper>
            </ScrollView>
          </Table>
          <View style={styles.total}>
            <Text style={styles.text2}>總金額：</Text>
            <Text style={styles.text2}>12000</Text>
          </View>
        </View>
      </View>
    );
  }
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
    
  },
  details: {
    backgroundColor: "rgba(240,229,222,0.6)",
    width: 380,
    borderRadius: 20,
    alignItems: "center",
    height: 700,
  },
  table: {
    marginTop: 20,
    backgroundColor: "rgba(184,112,54,0.1)",
    width: 350,
    borderRadius: 20,
    height: 600,
  },
  head: {
    height: 30,
    backgroundColor: "rgba(184,112,54,0.4)",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    // borderRadius: 10,
    height: 150, //再做調整
    
  },
  title: {
    flex: 0.3,
    alignItems: "center",
  },
  row: {
    flex: 0.7,
  },
  text1: {
    textAlign: "center",
    color: "rgba(110,44,0,1)",
    fontSize: 20,
  },
  text2: {
    textAlign: "center",
    color: "rgba(110,44,0,1)",
    fontSize: 16,
  },
  text3: {
    textAlign: "center",
    fontSize: 16,
  },
  total: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 20,
  },
  text2: {
    fontSize: 20,
    color: "rgba(110,44,0,1)",
   
  }
});
