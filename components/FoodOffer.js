/**Component list Loai Moan An */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    navigation,
    navigate,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { COLOR_ORANGE, COLOR_LIGHT_GREEN, COLOR_LIGHT_PINK, COLOR_FACE, COLOR_TEXT } from './color/colors';
const numColumns = 3;
export default class FoodOffer extends Component {
/**this item view */
    renderItem = ({ item }) => {
        const {navigation} = this.props
        return (
            <View style={style.itemFlastList}>
                <TouchableOpacity onPress={()=> navigation.navigate('ViewWish',item)}>
                    <ImageBackground style={style.imgBackground}
                        source={{ uri: item.Hinh }} >
                    <Text style={[style.txtFlastList, style.itemInvisible]}>{item.TenLoai}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const {
            loaiMonAn = [],
        } = this.props
        return (
           
                <FlatList style={style.flatList}
                    data={loaiMonAn}
                    renderItem={this.renderItem}
                    numColumns={numColumns}
                    keyExtractor={({ MaLoai }, index) => MaLoai}
                />
        )
    }
}

const style = StyleSheet.create({
    flatList:{
        flex: 1,
        marginVertical: 5,
    },
    itemFlastList:{
        marginTop:5,
        marginRight:5,
        marginBottom:5,
        height: Dimensions.get('window').width / numColumns, // approximate a square
        alignContent:'center',
    },
    imgBackground:{ 
        width: Dimensions.get('window').width / numColumns, // approximate a square
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    txtFlastList:{
        backgroundColor:'rgba(82, 146, 146, 0.9)',
        fontSize:15,
        fontWeight: 'bold',
        textAlign:'center'
    },

})