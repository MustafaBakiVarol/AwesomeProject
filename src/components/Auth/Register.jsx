import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet,TouchableOpacity, FlatList, Image, useAnimatedValue } from "react-native";
import Input from '../Shared/Input'
import Buttonlar from '../Shared/Buttonlar';
import { registerForm } from '../../utils/const/AuthForm';

export default function Register({navigation}) {
    
    const [formInfo , setFormInfo] = useState({
        name : "",
        surname : "",
        email : "",
        password :"",
        rpassword : "",
    })

    useEffect(()=>console.log(formInfo),[formInfo])

    return (
        <View className = "bg-white flex-1 items-center justify-center px-5">
            <View>
                <Image
                    source={require('../../../assets/İmageList/GsGorsel.png')}
                />
            </View>
            
            <View className = "w-full">
                <FlatList className = "w-full"
                    data = {registerForm}
                    renderItem = {({ item }) => (
                        <View className = "mt-5 w-full">
                            <Input item = {item} setFormInfo = {setFormInfo} formInfo = {formInfo}/>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <View className = "w-full mt-5">
                <Buttonlar title = {"Kayit Ol"}/>
            </View>

            <View className = "w-full mt-0 flex-row">
                <Text className = "text-primary">Yoksa Bir Hesabiniz Var Mi? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                    <Text className = "font-[600] m1-[7px] underline"> Giris Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}