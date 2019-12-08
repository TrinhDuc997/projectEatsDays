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
    navigate, Dimensions,

} from 'react-native';
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
import {
    apiGetData,
    apiGetGoodFoodDays,
    apiGetDishSuggestions,
    apiCrateNewMeal,
} from '../API';
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
        }
        this.setState({
            loaiMonAn,
            goodFoodDays,
            dishSuggestions,
        })
        apiGetDishSession
    }
    render() {
        console.log("check this.props in home:", this.props)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={style.viewPager} >
                    <View style={style.homeHead}>
                        <ImageBackground style={style.bgHomeHead}
                            source={{
                                uri: 'https://eurocamp18.com/wp-content/uploads/2016/01/Food-Slide.jpg',
                            }}
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

                </ScrollView>
            </SafeAreaView>

        );
    }
}

const style = StyleSheet.create({


    viewPager: {
        flexGrow: 1,
        
    },
    homeHead: {
        flex: 3,
       
        justifyContent: 'center',
        alignContent: 'center',
    },
    txthead: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(82, 146, 146, 0.9)',
    },
    bgHomeHead: {
        width: '100%',
        height:150
        //height: Dimensions.get('window'),
    },
    homeUp: {
        flex: 5,
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
