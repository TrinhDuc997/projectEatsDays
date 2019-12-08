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
import {apiGetData,apiGetGoodFoodDays,apiGetDishSuggestions,apiCrateNewMeal} from '../API'
export default class viewWish extends Component {

     constructor(props) {
        super(props);
        this.state = {
            datas: [],
            goodFoodDays:[]
            }
        }
/**this item view */
    renderItem = ({ item }) => {
        return (
            <View style={{flexDirection:'row', alignContent: 'center', flex: 1 ,marginBottom:3}}>
                <Image  source={{uri:item.Hinh}}
                style={{width:100,height:100,borderRadius:100/2,margin:5}}>
                </Image>
                <View style={{justifyContent:'center',flex:1}}>
                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('DetailWish',{item})}>
                    <Text
                        style={{fontSize:18,marginLeft:5}}
                    >{item.TenMonAn}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2}>
                        {item.CachNau}
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderitemsepar=()=>{
        return(
            <View
                style={{height:1, width:'100%', backgroundColor:'gray'}}            
            ></View>
        )
    }
    
   async componentDidMount(){
        const goodFoodDays = await apiGetGoodFoodDays();
        this.setState({
            goodFoodDays,
        })
    }
    

    render() {
        const { goodFoodDays = [] } = this.state
        return (
            <View style={style.viewWish}>
                <FlatList style={style.flatList}
                    data={goodFoodDays}
                    renderItem={this.renderItem}
                    keyExtractor={({ id }, index) => id}
                    ItemSeparatorComponent={this.renderitemsepar}
                />
            </View>
        )
    }
}

const style=StyleSheet.create({
    viewWish:{
        flex:1
    }
})