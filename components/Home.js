    import React, {Component} from 'react';
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
    navigate,
    } from 'react-native';
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
    import Icon from 'react-native-vector-icons/FontAwesome';
    import {apiGetData,apiGetGoodFoodDays,apiGetDishSuggestions,apiCrateNewMeal} from '../API'

    export default class abc extends Component {
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
        if(dishSuggestions.length === 0){
            await apiCrateNewMeal();
            dishSuggestions = await apiGetDishSuggestions();
            console.log("check dishSuggestions:",dishSuggestions)
        }
        console.log("checkgoodFoodDays:",dishSuggestions)
        this.setState({
            loaiMonAn,
            goodFoodDays,
            dishSuggestions,
        })
    }
    render() {
        return (
        <View style={style.homeContainer}>
            <View style={style.homeHead}>
            {/* <Image style={style.imgHomeHead }
                            source={{ uri: 'https://eurocamp18.com/wp-content/uploads/2016/01/Food-Slide.jpg' }}>
                        </Image> */}
 <TouchableOpacity>
            <ImageBackground
                source={{
                uri:
                    'https://eurocamp18.com/wp-content/uploads/2016/01/Food-Slide.jpg',
                }}
                style={{width: '100%', height: '100%'}}>
               
                <Text
                    style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                    // backgroundColor:COLOR_ORANGE
                    }}>
                    Xem tất cả món ăn
                </Text>
                
            </ImageBackground>
            </TouchableOpacity>
            </View>
            <View style={style.homeUp}>
            <Text style={style.txtTitle}>Loại món ăn</Text>
            <FoodOffer
                loaiMonAn={this.state.loaiMonAn}
            >
            </FoodOffer>
            </View>
            <View style={style.homeCenter}>
            <Text style={style.txtTitle}>
                Món ăn gợi ý
            </Text>
            </View>
            <View style={style.homeDown}>
            <Text style={style.txtTitle}>Món ngon mỗi ngày</Text>
            <FoodDay
            goodFoodDays={this.state.goodFoodDays}
            >
            </FoodDay>
            </View>
        </View>
        );
    }
    }

    const style = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    homeHead: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    imgHomeHead: {
        width: '100%',
        height: '100%',
    },
    homeUp: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    flatList: {
        flex: 1,
    },
    homeCenter: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        // backgroundColor: COLOR_LIGHT_PINK,
    },
    icon: {
        marginLeft: 10,
    },
    txtTitle: {
        fontSize: 23,
        color: 'black',
        paddingLeft:5,
        fontWeight: 'bold',
        backgroundColor: COLOR_ORANGE,
    },
    homeDown: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        // backgroundColor: COLOR_ORANGE,
    },
    });
