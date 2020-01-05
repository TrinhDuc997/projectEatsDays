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
import {apiGetData,
    apiGetGoodFoodDays,
    apiGetDishSuggestions,
    apiCrateNewMeal,
    apiGetDishByCategory} from '../API'
export default class viewWish extends Component {

     constructor(props) {
        super(props);
        this.state = {
            datas: [],
            dataDish:[]
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
        console.log("check this.props in viewwish:",this.props)
        const { navigation } = this.props
        const {state} = navigation
        const { params } = state
        if(!!params){
            const dishflowCate = await apiGetDishByCategory(params.MaLoai);
            console.log("check dishflowCate:",dishflowCate)
            this.setState({
                dataDish:dishflowCate
            })
        }else{
            const goodFoodDays = await apiGetGoodFoodDays();
            this.setState({
                dataDish:goodFoodDays,
            })
        }
    }
    

    render() {
        const { dataDish = [] } = this.state
        return (
            <View style={style.viewWish}>
                <FlatList style={style.flatList}
                    data={dataDish}
                    renderItem={this.renderItem}
                    keyExtractor={({ MaMonAn }, index) => MaMonAn}
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