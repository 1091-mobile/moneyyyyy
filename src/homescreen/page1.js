import * as React from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { greaterThan } from 'react-native-reanimated';

export default function page1({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>記帳的場子</Text>
        <View style={styles.details}>
            <Text>表格?</Text>
        </View>
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
    title: {
      flex: 0.2,
      color: "#6E6EFF",
      fontSize: 32,
      fontWeight: "800",
      marginTop: 50,
    },
    details: {
      flex: 0.8,
      backgroundColor: "green",
      padding: 50,
      height: 20,
    },
    
  
  });
  