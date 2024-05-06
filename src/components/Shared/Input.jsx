import { Text, View, TextInput } from "react-native";
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Input({item : {title , icon , isSecure = false , secureIcon, type },setFormInfo , formInfo}) {
    
    const [isVisible, setIsVisible] = useState(false); 

    const handleChangeVisible = () => { 
        setIsVisible(!isVisible);
    }

    const changeFormInfo = (name , value) =>{
        setFormInfo((prevList)=>({...prevList, [name] : value}))
    }

    return (
        <>
            {
                isSecure ?
                    <View className="w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative"> 
                        <View className="absolute left-[10px] top-[12px]">{icon}</View>
                        <TextInput className="h-full px-[37px] text-[13px]"
                            secureTextEntry={isVisible}
                            placeholder={title}
                            onChangeText={(value)=>{changeFormInfo(type , value)}}
                            value = {formInfo.type}
                        />
                        <Text className="text-[11px] text-primary absolute -top-[8px] left-[10px] bg-white px-[10px] border-1-[1px] border-r-[1px] border-border">{title}</Text>
                        <TouchableOpacity className="absolute right-[10px] top-[3px]" onPress={handleChangeVisible}>
                            {
                                isVisible
                                    ? 
                                    secureIcon.notVisible 
                                    : 
                                    secureIcon.visible}
                        </TouchableOpacity>
                    </View>
                    :
                    <View className="w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative">
                        <View className="absolute left-[10px] top-[12px]">{icon}</View>
                        <TextInput className="h-full px-[37px] text-[13px]"
                            placeholder={title}
                            onChangeText={(value) => {changeFormInfo(type,value)}}
                            value={formInfo.type}
                        />
                        <Text className="text-[11px] text-primary absolute -top-[8px] left-[10px] bg-white px-[10px] border-1-[1px] border-r-[1px] border-border">{title}</Text>
                    </View>
            }
        </>
    );
}
