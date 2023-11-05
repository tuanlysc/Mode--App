import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "../../assets/consts/colors";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import EditProfile from "./EditProfile";

const SettingScreen =({navigation}) =>{

    const navigateToEditProfile =()=>{
        navigation.navigate("EditProfile");
    };
    const navigateToSecurity=()=>{
        console.log("Security function")
    };
    const navigateToNotification =()=>{
        console.log("Notification function")
    }
    const navigateToPrivacy =()=>{
        console.log("Privacy function")
    }
    const accountItems = [
        {icon: "person-outline",text:"Edit Profile",action: navigateToEditProfile},
        {icon: "security", text:"Security", action: navigateToSecurity},
        {icon: "notifications-none", text:"Notification",action:navigateToNotification},
        {icon: "lock-outline", text:"Privacy", action: navigateToPrivacy}

    ];
    const navigateToSubcription =()=>{
        console.log("Subscription function")
    }
    const navigateToSupport =()=>{
        console.log("Support function")
    }
    const navigateToTermsAndPolicies =()=>{
        console.log("Terms and Policies function")
    }
    const supportItems = [
        {icon:"credit-card", text:"My Subscription", action: navigateToSubcription},
        {icon:"help-outline", text:"Help & Support", action: navigateToSupport},
        {icon:"info-outline", text:"Terms and Policies", action: navigateToTermsAndPolicies},
    ]
    const navigateToReportProblem =()=>{
        console.log("Report a problem function")
    }
    const addAcounnt =()=>{
        console.log("add account")
    }
    const logout =()=>{
        console.log("Logout")
    }
    const actionItems =[
        {icon:"outlined-flag", text:"Report a problem", action: navigateToReportProblem},
        {icon:"people-outline", text:"Add Account", action: addAcounnt},
        {icon:"logout", text:"Log out", action:logout },
    ]
    const renderSettingsItem =({icon,text,action})=>(
        <TouchableOpacity
            onPress={action}
            style={{
                flexDirection:'row',
                alignItems:'center',
                paddingVertical:8,
                paddingLeft:12
            }}
        >
            <MaterialIcons name={icon} size={24} color={COLORS.black}/>
            <Text style={{
                marginLeft:36,
                fontWeight:600,
                fontSize:16
            }}>{text}</Text>
        </TouchableOpacity>
    )
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
            
            <ScrollView style={{marginHorizontal: 12}}>

                {/* Account Settings */}
                <View style={{marginBottom:12}}>
                        <Text style={{marginVertical:10,fontSize:16,fontWeight:'bold'}}>Account</Text>
                        <View style={{
                            borderRadius:12,
                            backgroundColor:COLORS.grey
                        }}>
                            {
                                accountItems.map((item,index)=>(
                                    <React.Fragment key={index}>
                                        {renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                </View>
                {/* Support and About Settings */}
                <View style={{marginBottom:12}}>
                        <Text style={{marginVertical:10,fontSize:16,fontWeight:'bold'}}>Support and About</Text>
                        <View style={{
                            borderRadius:12,
                            backgroundColor:COLORS.grey
                        }}>
                            {
                                supportItems.map((item,index)=>(
                                    <React.Fragment key={index}>
                                        {renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                </View>
                {/* Action setting */}
                <View style={{marginBottom:12}}>
                        <Text style={{marginVertical:10,fontSize:16,fontWeight:'bold'}}>Action</Text>
                        <View style={{
                            borderRadius:12,
                            backgroundColor:COLORS.grey
                        }}>
                            {
                                actionItems.map((item,index)=>(
                                    <React.Fragment key={index}>
                                        {renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingScreen;

const style = StyleSheet.create({
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

