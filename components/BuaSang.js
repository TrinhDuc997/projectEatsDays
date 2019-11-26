import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,FlatList,
  StatusBar,
} from 'react-native';

export default class TabBuaSang extends Component{
    render(){
      return(
        <View style={{backgroundColor:'red',flex:1}}>
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
  