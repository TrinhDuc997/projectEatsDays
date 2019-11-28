
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
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column', backgroundColor: '#63CEC8'
            }}>
                <Image source={{ uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/few-off/sian/car_sian.png' }}
                    style={{ width: '100%', height: 200 }}
                ></Image>
                <ScrollView>
                    <Text style={{ marginLeft: 10, fontSize: 18 }}>
                        Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.
                        Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.
                        Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.
                        Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.
                            </Text>
                </ScrollView>
            </View>
        )
    }
}