import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard, navigation, navigate
} from 'react-native';
import datalist from '../data/datalist'
import { COLOR_ORANGE, COLOR_LIGHT_GREEN, COLOR_LIGHT_PINK, COLOR_FACE, COLOR_TEXT } from './color/colors';
import Icon from 'react-native-vector-icons/FontAwesome';



class FlatListItem extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection:'row' }}>
                <View style={{width: 50, height: 50 }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'black',}}>
                            {this.props.item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default class abc extends Component {
    render() {
        return (
            <View style={style.homeContainer}>
                <View style={style.homeHead}>
                    <Image style={style.imgHomeHead}
                        source={{ uri: 'https://eurocamp18.com/wp-content/uploads/2016/01/Food-Slide.jpg' }}>
                    </Image>
                </View>
                <View style={style.homeUp}>
                    <Text style={style.txtTitle}>Loại món ăn</Text>
                    <FlatList style={style.flatList} data={datalist}
                        renderItem={({ item, index }) => {
                            // console.log('Item = {JSON.stringify(item)}, index= ${Home}');
                            return (
                                <FlatListItem item={item} index={index} >

                                </FlatListItem>
                            );
                        }
                        }
                    >
                    </FlatList>

                </View>
                <View style={style.homeCenter}>

                    <Text style={style.txtTitle}>
                        <Icon name='cutlery' color={COLOR_ORANGE} size={40} style={style.icon}></Icon>
                        Món ăn gợi ý
                </Text>
                </View>
                <View style={style.homeDown}>
                    <Text style={style.txtTitle}>Món ngon mỗi ngày</Text>
                </View>
            </View>
        )
    }

}



const style = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    homeHead: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    imgHomeHead: {
        width: '100%',
        height: '100%'
    },
    homeUp: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: COLOR_LIGHT_GREEN
    },
    flatList: {
        flex:1,
        
    },
    homeCenter: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: COLOR_LIGHT_PINK
    },
    icon: {
        marginLeft: 10,
    },
    txtTitle: {
        fontSize: 23,
        color: 'white',
        marginLeft: 5,
        fontWeight: 'bold'
    },
    homeDown: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: COLOR_ORANGE
    }
})