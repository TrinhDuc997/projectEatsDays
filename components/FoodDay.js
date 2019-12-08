/**Component list Loai Moan An */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    navigation,navigate,navigationOptions
} from 'react-native';
import { COLOR_ORANGE, COLOR_LIGHT_GREEN, COLOR_LIGHT_PINK, COLOR_FACE, COLOR_TEXT } from './color/colors';

const numColumns = 5;
export default class FoodDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monAn: []
        }
    }
    static navigationOptions ={
            header:null,
        }
/**this item view */
    renderItem = ({ item }) => {
        const {
        goodFoodDays = [],
        navigation
        } = this.props
        return (
            <View style={{ alignContent: 'center', flex: 1 }}>
                <TouchableOpacity onPress={()=> navigation.navigate('DetailWish',{item})} >
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2, borderColor: 'red', margin: 5 }}
                        source={{ uri: item.Hinh }} />
                    <Text>{item.TenMonAn}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        const {
        goodFoodDays = [],
        } = this.props
        return (
            <View style={style.homDown}>
                <FlatList style={style.flatList}
                    data={goodFoodDays}
                    renderItem={this.renderItem}
                    numColumns={numColumns}
                    keyExtractor={({ MaMonAn }, index) => MaMonAn}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    homeDown: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: COLOR_ORANGE
    }
})