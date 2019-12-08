import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,FlatList,
  StatusBar,
} from 'react-native';

export default class TabBuaTrua extends Component{
    render(){
      console.log("check props:",this.props)
      return(
        <View style={{backgroundColor:'yellow',flex:1}}>
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
  