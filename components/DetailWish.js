
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,

} from 'react-native';
export default class Viewdemo extends Component {
    render() {
        
        const { navigation = {} } = this.props
        const {
            item = {}
        } = navigation.state.params
        console.log("check item:",item)
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <Image source={{ uri:item.Hinh }}
                    style={{ width: '100%', height: 200 }}
                ></Image>
                <ScrollView>
                    <Text style={{ marginLeft: 10, fontSize: 18 }}>
                        {item.CachNau}
                    </Text>
                </ScrollView>
            </View>
        )
    }
}