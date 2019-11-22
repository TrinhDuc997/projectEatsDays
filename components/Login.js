/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Install icons: react-native-vector-icons
 *screnn Login
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,navigation,navigate
} from 'react-native';
import {COLOR_ORANGE,COLOR_LIGHT_GREEN,COLOR_LIGHT_PINK,COLOR_FACE,COLOR_TEXT} from './color/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { apiGetData,apiLogin } from '../API'
export default class Login extends Component{
  static navigationOptions ={
    header:null,
}
 handleChange = (param) => {
   console.log("check handle:",param)
    this.setState({
      ...param
    })

 }
 handleLogin = async () => {
    const { email='',pass=''} = this.state
    const req = {
      email,
      pass,
    }
   const resLogin = await apiLogin(req)
    if(resLogin.length > 0){
      this.props.navigation.navigate('Home')
    }
    else{
      alert("Tài Khoản Mật Không Chính Xác!")
    }
 }
  render(){
    const Divider=(props)=>{
      return <View{...props}>
        <View style={style.line}></View>
        <Text style={style.textOr}>OR</Text>
        <View style={style.line}></View>
      </View>
    }
    return(
      //Donot dismiss keyboard when click outside of textinput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.container}>
        <View style={style.up}>
          <Image style={style.imageStyle}
            source={{uri: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1179923/910/607/m1/fpnw/wm0/royal-food-logo-01-.jpg?1460645091&s=2111cc91d907930ef82531ba959c6f69'}}/>
          <Text style={style.title}>
            Ăn không cần phải nghi !
          </Text>
        </View>

        <View style={style.down}>
          <View style={style.textInputContainer}>
            <TextInput style={style.textInput}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder='Enter your email'
            onChangeText = { (text) => this.handleChange({email:text})}>
            </TextInput>
          </View>

          <View style={style.textInputContainer}>
            <TextInput style={style.textInput}
              placeholder='Enter password'
              onChangeText = { (text) => this.handleChange({pass:text})}
              secureTextEntry={true}>
            </TextInput>
          </View>
          <TouchableOpacity style={style.btnLogin}
            onPress={()=> this.handleLogin()}>
            <Text style={style.bntLoginTitle}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <Divider style={style.divider}></Divider>
          {/*Login with Facebook */}
          <FontAwesome.Button 
            style={style.bntFace}
            name="facebook"
            backgroundColor={COLOR_FACE}>
              <Text style={style.bntLoginTitle}>
                Login with Facebook
              </Text>
          </FontAwesome.Button>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
  }
}


const style =StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:COLOR_LIGHT_GREEN
  },
  up:{
    flex:3,
    flexDirection:'column',
    backgroundColor:COLOR_ORANGE,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'white',
    width:400,
    fontSize:23,
    textAlign:'center'
  },
  imageStyle:{
    width: 100, height: 100,
  
    borderRadius:10
  },
  down:{
    flex:7,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  textInputContainer:{
    paddingHorizontal:10,
    backgroundColor:COLOR_TEXT,
    borderRadius:6,
    marginBottom:20
  },
  textInput:{
    width:240,
    height:45
  },
  btnLogin:{
    width:260,
    height:45,
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLOR_LIGHT_PINK
  },
  bntLoginTitle:{
    fontSize:18,
    color:'white'
  },
  bntFace:{
    width:260,
    height:45,
    borderRadius:6
  },
  line:{
    height:1,
    flex:2,
    backgroundColor:'black'
  },
  textOr:{
    flex:1,
    textAlign:'center'
  },
  divider:{
    flexDirection:'row',
    height:40,
    width:260,
    justifyContent:'center',
    alignItems:'center'

  }
})
