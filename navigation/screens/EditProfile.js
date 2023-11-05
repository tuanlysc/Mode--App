import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import DatePicker,{ getFormatedDate } from "react-native-modern-datepicker";
import COLORS from '../../assets/consts/colors'
import imagesDataURL from '../../assets/consts/model'

const EditProfile = ({navigation}) =>{

    const [selectedImage,setSelectedImage] = useState(null)
    const [name,setName] = useState("HELLO");
    const [email,setEmail] = useState("exam@gmail.com");
    const [password,setPassword] = useState("randompassword");
    const [country,setCountry] = useState("Viet Nam");
    
    const [openStartDatePicker,setOpenStartDatePicker]=useState(false);
    const today = new Date();
    const startDate = getFormatedDate(
        today.setDate(today.getDate()+1),
        "YYYY/MM/DD"
    )
    const [selectedStarDate,setSelectedStartDate]=useState("01/01/2000");
    const [startedDate,setStartedDate]=useState("12/12/2023");
    const handleChangeStartDate =(propDate)=>{
        setStartedDate(propDate);
    }
    const handleOnChangeStartDate =()=>{
        setOpenStartDatePicker(!openStartDatePicker)
    }
    const handleImageSelection = async()=>{
        let result = ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,4],
            quality:1
        });
        console.log(result);
        if(!(await result).canceled){
            setSelectedImage((await result).assets[0].uri)
        }
    }
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: COLORS.white,
            
        }}>
            <View style={style.header}>
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={style.navHeader}
                >
                    <MaterialIcons 
                        name="keyboard-arrow-left"
                        size={24}
                        color={COLORS.black}
                    />
                    
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize:20,
                        fontWeight:"bold"
                    }}
                >Settings</Text>
            </View>
            <ScrollView>
                <View style={{
                    alignItems:'center',
                    marginVertical:22
                }}>
                    <TouchableOpacity
                        onPress={handleImageSelection}
                    >
                        <Image 
                            source={{uri: selectedImage}}
                            style={{
                                height:170,
                                width: 170,
                                borderRadius:85,
                                borderWidth:2,
                                borderColor: COLORS.primary
                            }}
                        />
                        <View style={{
                            position:'absolute',
                            bottom:0,
                            right:10,
                            zIndex:1
                        }}>
                            <MaterialIcons 
                                name="photo-camera"
                                size={32}
                                color={COLORS.black}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* Tên */}
                    <View style={{
                        flexDirection:"column",
                        marginBottom:6
                    }}>
                        <Text>Name</Text>
                        <View style={{
                            height:44,
                            width:'100%',
                            borderColor: COLORS.secondary,
                            borderWidth:1,
                            borderRadius:4,
                            marginVertical:6,
                            justifyContent:'center',
                            paddingLeft:8
                        }}>
                            <TextInput 
                                value={name}
                                onChangeText={value=>setName(value)}
                                editable={true}
                            />
                        </View>
                    </View>
                    {/* Email */}
                    <View style={{
                        flexDirection:"column",
                        marginBottom:6
                    }}>
                        <Text>Email</Text>
                        <View style={{
                            height:44,
                            width:'100%',
                            borderColor: COLORS.secondary,
                            borderWidth:1,
                            borderRadius:4,
                            marginVertical:6,
                            justifyContent:'center',
                            paddingLeft:8
                        }}>
                            <TextInput 
                                value={email}
                                onChangeText={value=>setEmail(value)}
                                editable={true}
                            />
                        </View>
                    </View>
                    {/* Password  */}
                    <View style={{
                        flexDirection:"column",
                        marginBottom:6
                    }}>
                        <Text>Name</Text>
                        <View style={{
                            height:44,
                            width:'100%',
                            borderColor: COLORS.secondary,
                            borderWidth:1,
                            borderRadius:4,
                            marginVertical:6,
                            justifyContent:'center',
                            paddingLeft:8
                        }}>
                            <TextInput 
                                value={password}
                                onChangeText={value=>setPassword(value)}
                                editable={true}
                                secureTextEntry
                            />
                        </View>
                    </View>
                    {/* sinh nhật */}
                    <View style={{
                        flexDirection:"column",
                        marginBottom:6
                    }}>
                        <Text>Name</Text>
                        <TouchableOpacity
                        onPress={handleOnChangeStartDate}
                         style={{
                            height:44,
                            width:'100%',
                            borderColor: COLORS.secondary,
                            borderWidth:1,
                            borderRadius:4,
                            marginVertical:6,
                            justifyContent:'center',
                            paddingLeft:8
                        }}>
                            <Text>{selectedStarDate}</Text>
                        </TouchableOpacity>
                    </View>
                    {/* nơi ở */}
                    <View style={{
                        flexDirection:"column",
                        marginBottom:6
                    }}>
                        <Text>Name</Text>
                        <View style={{
                            height:44,
                            width:'100%',
                            borderColor: COLORS.secondary,
                            borderWidth:1,
                            borderRadius:4,
                            marginVertical:6,
                            justifyContent:'center',
                            paddingLeft:8
                        }}>
                            <TextInput 
                                value={country}
                                onChangeText={value=>setCountry(value)}
                                editable={true}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default EditProfile;

style = StyleSheet.create({
    header:{
        marginHorizontal: 12,
        flexDirection:'row',
        justifyContent:'center'
    },
    navHeader:{
        position:'absolute',
        left:0
    }
})

