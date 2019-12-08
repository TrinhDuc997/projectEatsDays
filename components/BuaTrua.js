import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
    apiGetDishSession} from '../API'

export default class TabBuaTrua extends Component{
  constructor(props) {
        super(props);
        this.state = {
            dishSession: []
        }
    }
  async componentDidMount() {
        let dishSession = []
        dishSession = await apiGetDishSession()
        this.setState({
          dishSession
        })
    }
    renderItem = ({ item }) => {
        return (
            <View style={{ alignContent: 'center', flex: 1 }}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailWish',{item})}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2, borderColor: 'red', margin: 5 }}
                        source={{ uri: item.Hinh }} />
                    <Text>{item.TenMonAn}</Text>
                </TouchableOpacity>
            </View>

        )
    }
    render(){
      const {dishSession} = this.state
      let convertDishSession = []
      dishSession.map((item) => {
        if(item.MaBuaAn === 3){
          convertDishSession = [
          ...convertDishSession,
              item
        ]}
      })
      return(
        <View style={{backgroundColor:'yellow',flex:1}}>
          <View>
          <FlatList
            data={convertDishSession}
            renderItem={this.renderItem}
            numColumns={4}
          ></FlatList>
          </View>
        </View>
      )
    }
  }
  