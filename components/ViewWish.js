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
export default class viewWish extends Component {

     constructor(props) {
        super(props);
        this.state = {
            datas: []
            }
        }

/**this item view */
    renderItem = ({ item }) => {
        return (
            <View style={{flexDirection:'row', alignContent: 'center', flex: 1 ,marginBottom:3}}>
                <Image  source={{uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/few-off/sian/car_sian.png'}}
                style={{width:100,height:100,borderRadius:100/2,margin:5}}>

                </Image>
                <View style={{justifyContent:'center',flex:1}}>
                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('DetailWish')}>
                    <Text
                        style={{fontSize:18,marginLeft:5}}
                    >{item.title}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2}>
                    Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.
                    Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.

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

    componentDidMount(){
        const url = 'https://facebook.github.io/react-native/movies.json'
       return fetch(url)
        .then((response) => response.json())
        .then((responseJson)=>{
            this.setState({
                datas: responseJson.movies
                
            })
            console.log(responseJson)
        }).catch((er)=>{
            console.log(er)
        })
    }
    

    render() {
        return (
            <View style={style.viewWish}>
                <FlatList style={style.flatList}
                    data={this.state.datas}
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