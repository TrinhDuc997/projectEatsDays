import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,FlatList,
  StatusBar,
} from 'react-native';

export default class TabBuaToi extends Component{
    render(){
      console.log("check props:",this.props)
      return(
        <View style={{backgroundColor:'green',flex:1}}>
         <Text>
            Phunjg nef
          </Text>
          <View>
          <FlatList></FlatList>
          </View>
        </View>
      )
    }
  }
  