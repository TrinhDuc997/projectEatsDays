/**Component list Loai Moan An */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    navigation,navigate,navigationOptions,
    Dimensions,
    ImageBackground,

} from 'react-native';
import { COLOR_ORANGE, COLOR_LIGHT_GREEN, COLOR_LIGHT_PINK, COLOR_FACE, COLOR_TEXT } from './color/colors';

const numColumns = 2;
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
            <View style={style.itemFlastList}>
                <TouchableOpacity>
                    <ImageBackground style={style.imgBackground}
                        source={{ uri: item.Hinh }}>
                            <Text style={[style.txtFlastList, style.itemInvisible]}>{item.TenMonAn}</Text>
                        </ImageBackground>
                        
                </TouchableOpacity>
                
            </View>
        )
    }
    render() {
        const {
        goodFoodDays = [],
        } = this.props
        return (

                <FlatList style={style.flatList}
                    data={goodFoodDays}
                    renderItem={this.renderItem}
                    numColumns={numColumns}
                    keyExtractor={({ MaMonAn }, index) => MaMonAn}
                />

        )
    }
}

const style = StyleSheet.create({
    flatList:{
        flex: 1,
     
    },
    itemFlastList:{
        justifyContent: 'flex-end',
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
        fontSize:20,
        alignContent:'flex-end',
        fontWeight: 'bold',
    },
    // itemInvisible:{
    //     backgroundColor: 'transparent',
    // },
})