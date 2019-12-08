import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    FlatList,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    navigation,
    navigate,Dimensions,
    
} from 'react-native';
import VerticalViewPager  from '@react-native-community/viewpager';
import datalist from '../data/datalist';
import {
    COLOR_ORANGE,
    COLOR_LIGHT_GREEN,
    COLOR_LIGHT_PINK,
    COLOR_FACE,
    COLOR_TEXT,
} from './color/colors';
import FoodOffer from './FoodOffer'
import FoodDay from './FoodDay'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { apiGetData, apiGetGoodFoodDays, apiGetDishSuggestions, apiCrateNewMeal } from '../API'
// import { COLOR_ORANGE, COLOR_LIGHT_GREEN, COLOR_LIGHT_PINK, COLOR_FACE, COLOR_TEXT } from './color/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBuaAn from '../components/TabBuaAn';
import ViewPagerAndroid from '@react-native-community/viewpager';

export default class abc extends Component {

    // static navigationOptions = {
    //     header: null,
    // }


    constructor(props) {
        super(props);
        this.state = {
            loaiMonAn: []
        }
    }
    async componentDidMount() {
        const loaiMonAn = await apiGetData();
        const goodFoodDays = await apiGetGoodFoodDays();
        let dishSuggestions = []
        dishSuggestions = await apiGetDishSuggestions() || [];
        if (dishSuggestions.length === 0) {
            await apiCrateNewMeal();
            dishSuggestions = await apiGetDishSuggestions();
            console.log("check dishSuggestions:", dishSuggestions)
        }
        console.log("checkgoodFoodDays:", dishSuggestions)
        this.setState({
            loaiMonAn,
            goodFoodDays,
            dishSuggestions,
        })
    }
    render() {
        return (
            <ViewPagerAndroid style={style.viewPager} initialPage={0}
            orientation ={"vertical"}>
                <View key='1'style={style.viewPagerk1} > 
                    <View style={style.homeHead}>
                        {/* <Image style={style.imgHomeHead }
                            source={{ uri: 'https://eurocamp18.com/wp-content/uploads/2016/01/Food-Slide.jpg' }}>
                        </Image> */}

                        <ImageBackground style={style.bgHomeHead}
                            source={{
                                uri:'https://eurocamp18.com/wp-content/uploads/2016/01/Food-Slide.jpg',}}
                            >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewWish')}>
                                <Text
                                    style={style.txthead}>
                                    Xem tất cả món ăn
                                </Text>
                            </TouchableOpacity>
                        </ImageBackground>

                    
                    </View>
                    
                    <View style={style.homeUp}>
                    <Text style={style.txtTitle}>
                            Món ăn gợi ý
                        </Text>
                        <TabBuaAn></TabBuaAn>
                    </View>
                </View>  
                <View key='2'style={style.viewPagerk1}>
                    <View style={style.homeCenter}>
                        
                        <Text style={style.txtTitle}>Loại món ăn</Text>
                        <FoodOffer
                            loaiMonAn={this.state.loaiMonAn}
                        >
                        </FoodOffer>
                    </View>

                    <View style={style.homeDown}>
                        <Text style={style.txtTitle}>Món ngon mỗi ngày</Text>
                        <FoodDay
                            goodFoodDays={this.state.goodFoodDays}
                        >
                        </FoodDay>
                    
                    </View>
                </View>
            </ViewPagerAndroid>
        );
    }
}



const style = StyleSheet.create({


    viewPager:{
        flex:1
    },
    viewPagerk1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: '#C8D3D5'
    },
    homeHead: {
        flex: 3,
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignContent: 'center',
    },
    txthead:{
            justifyContent:'flex-end',
            textAlign: 'center',
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor:'rgba(82, 146, 146, 0.9)',
    },
    bgHomeHead:{
        width: '100%', 
        height: '100%' 
    },
    homeUp: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    homeCenter: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        // backgroundColor: COLOR_LIGHT_PINK,
    },
    txtTitle: {
        fontSize: 18,
        color: 'black',
        paddingLeft: 5,
        fontWeight: 'bold',

    },
    homeDown: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        // backgroundColor: COLOR_ORANGE,
    },
});
