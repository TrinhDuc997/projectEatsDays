/**Component list Loai Moan An */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,

} from 'react-native';
import { COLOR_ORANGE, COLOR_LIGHT_GREEN, COLOR_LIGHT_PINK, COLOR_FACE, COLOR_TEXT } from './color/colors';

const numColumns = 5;
export default class foodDay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monAn: []

        }
    }
/**this item view */
    renderItem = ({ item }) => {
        return (
            <View style={{ alignContent: 'center', flex: 1 }}>
                <TouchableOpacity>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2, borderColor: 'red', margin: 5 }}
                        source={{ uri: item.Hinh }} />
                    <Text>{item.TenLoai}</Text>
                </TouchableOpacity>
            </View>

        )
    }
//get API Mon an
    componentDidMount() {
        fetch('http://10.0.2.2:5000/api')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson.recordsets

                });
                console.log("check data abc:", responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={style.homDown}>
                <FlatList style={style.flatList}
                    data={this.state.monAn}
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