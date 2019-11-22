/**
 * screen màn hình khi mở ứng dụng
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    navigationOptions,
    navigate,navigation
  } from 'react-native';
  import {COLOR_ORANGE,COLOR_LIGHT_GREEN,COLOR_LIGHT_PINK,COLOR_FACE,COLOR_TEXT} from './color/colors';
  export default class index extends Component{
      static navigationOptions ={
          header:null,
      }
      perfromTimeConsumingTask = async() => {
          return new Promise((resolve)=>
          setTimeout(()=>{
              resolve('result')
          },200))
      }
      async componentDidMount(){
          const data = await this.perfromTimeConsumingTask();
          if (data !== null){
              this.props.navigation.navigate('Home');
          }
      }
      render(){
          return <View style={style.container}>
              <Image
              source={{uri: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1179923/910/607/m1/fpnw/wm0/royal-food-logo-01-.jpg?1460645091&s=2111cc91d907930ef82531ba959c6f69'}}
              style={style.imageLogo}>
              </Image>
          </View>
      }
  }
  const style=StyleSheet.create({
      container:{
          flex:1,
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:COLOR_LIGHT_GREEN
      },
      imageLogo:{
          width:200,
          height:200,
          borderRadius:200 / 2
      }
  })