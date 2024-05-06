import React, { useState, useEffect} from 'react';
import { Text, View, Button, Image, StyleSheet,TouchableOpacity, FlatList } from "react-native";
import Input from '../Shared/Input'
import Buttonlar from '../Shared/Buttonlar';
import { loginForm } from '../../utils/const/AuthForm';

export default function Login({navigation}) {

    const [formInfo , setFormInfo] = useState({
        email : "",
        password :"",
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
                    data = {loginForm}
                    renderItem = {({ item }) => (
                        <View className = "mt-5 w-full">
                            <Input item = {item} setFormInfo={setFormInfo} formInfo={formInfo}/>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <View className = "w-full mt-5">
                <TouchableOpacity>
                    <Buttonlar title = {"Giris Yap"}/>
                </TouchableOpacity>
            </View>

            <View className = "w-full mt-5 flex-row">
                <Text className = "text-primary">Hala Bir Hesabiniz Yok Mu? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                    <Text className = "font-[600] m1-[7px] underline"> Kayit Olun</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}