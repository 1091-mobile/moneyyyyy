import React, {Component} from "react";
import firebase from "../../database/firebase_config"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button, 
  Alert,
  ActivityIndicator,
  Image
} from "react-native";
// import * as SecureStore from 'expo-secure-store';


export default class SignIn extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userSignin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
      <Image
            style={styles.center}
            source={require("../../assets/money.png")}
          />
          </View>  
        <TextInput
          style={styles.inputStyle}
          placeholder="電子信箱"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="密碼"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#7c7877"
          title="登入"
          onPress={() => this.userSignin()}
        />   

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          還沒註冊嗎? 點我註冊
        </Text>                          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#7c7877',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  center: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -200,
    marginLeft: 110,
  },
});
