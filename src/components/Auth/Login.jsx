import React from 'react';
import { Text, View, Button, Image, StyleSheet,TouchableOpacity, FlatList } from "react-native";
import Input from '../Shared/Input'
import Buttonlar from '../Shared/Buttonlar';
import { loginForm } from '../../utils/const/AuthForm';
import {setLoader} from "../../redux/generalSlice";
import { useDispatch } from "react-redux";

export default function Login({navigation}) {
    const dispatch = useDispatch();
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
                            <Input item = {item}/>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            
            <TouchableOpacity onpress = {() =>{dispatch(setLoader())}} className = "w-full mt-5" >
                <Buttonlar title = {"Giris Yap"}/>
            </TouchableOpacity>
        

            <View className = "w-full mt-5 flex-row">
                <Text className = "text-primary">Hala Bir Hesabiniz Yok Mu? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                    <Text className = "font-[600] m1-[7px] underline"> Kayit Olun</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}