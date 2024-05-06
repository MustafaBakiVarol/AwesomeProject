import { Text, View, Button } from "react-native";
import React from 'react';
import Login from '../components/Auth/Login';


export default function LoginScreen ({ navigation }) {
    
    return (
        <Login navigation={navigation}/>
    );
}
