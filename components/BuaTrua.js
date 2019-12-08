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
  Dimensions,ImageBackground
} from 'react-native';
import {
    apiGetDishSession} from '../API';
    const numColumns = 2;

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
          <View style={style.itemFlastList}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailWish',{item})}>
              <ImageBackground style={style.imgBackground}
                  source={{ uri: item.Hinh }} >
              <Text style={[style.txtFlastList, style.itemInvisible]}>{item.TenMonAn}</Text>
              </ImageBackground>
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
        <FlatList style={style.flatList}
            data={convertDishSession}
            renderItem={this.renderItem}
            numColumns={numColumns}
            keyExtractor={({ MaMonAn }, index) => MaMonAn}
          ></FlatList>
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
        height: Dimensions.get('window').width / numColumns+2, // approximate a square
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