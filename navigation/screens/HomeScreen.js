import React from "react";
import { View,Text,SafeAreaView, TextInput, TouchableOpacity, FlatList, Dimensions, Image } from "react-native";
import { StyleSheet } from "react-native";
import COLORS from "../../assets/consts/colors"
import model from "../../assets/consts/model"
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
const width = Dimensions.get("screen").width/2-30;
export default function HomeScreen({navigation}){
    const categories = ['Liên quan','Mới nhất','Bán chạy','Giá tốt'];

    const [categoryIndex,setCategoryIndex] = React.useState(0)

    const CategoryList = () =>{
        return (
            <View style={style.categoryContainer}>
                {categories.map((item,index)=>(
                    <TouchableOpacity 
                    key={index} 
                    activeOpacity={0.8}
                    onPress={()=>setCategoryIndex(index)}>
                        <Text 
                        style={[
                            style.categoryText,
                            categoryIndex == index && style.categoryTextSelected,
                        ]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };
    const Card =({item}) =>{
        console.log(item); 
        return <View style={style.card}>
            <MaterialIcons name="favorite" />
        </View>;
    };
   
    return (
        <SafeAreaView style={{
            flex:1,
            paddingHorizontal:20,
            backgroundColor: COLORS.white,
        }}>
            <View style={style.header}>
                <StatusBar backgroundColor={COLORS.white} style={{color:COLORS.black}}></StatusBar>
                <View>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
                    <Text style={{fontSize: 38, fontWeight: 'bold', color:COLORS.green}}>Model Shop</Text>
                </View>
                <FontAwesome name="shopping-cart" size={28} color="black" />
            </View>
            <View style={{marginTop:30, flexDirection: 'row'}}>
                <View style={style.searchContainer}>
                    <FontAwesome name="search" size={25} style={{marginLeft: 20, marginRight: 10}}/>
                    <TextInput placeholder="Tìm kiếm" style={style.input}/>
                </View>
                <View style={style.sortBtn}>
                    <MaterialCommunityIcons name="sort-variant" size={30} color={COLORS.white}/>
                </View>
            </View>
            <CategoryList/>
            <FlatList 
                columnWrapperStyle={{justifyContent:'space-between'}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2} 
                data={model} 
                renderItem={({item})=> <Card model={item}/>}
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    searchContainer:{
        height: 50,
        backgroundColor:COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems:'center'
    },
    input:{
        fontSize: 18,
        fontWeight:'bold',
        color: COLORS.black,
        flex: 1
    },
    sortBtn:{
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    categoryContainer:{
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
        
    },
    categoryText:{
        color:"grey",
        fontSize: 16,
        fontWeight: 'bold',
    },
    categoryTextSelected:{
        color:COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
    },
    card:{
        height:255,
        backgroundColor:COLORS.green,
        width:width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        padding:15,
    },
});

