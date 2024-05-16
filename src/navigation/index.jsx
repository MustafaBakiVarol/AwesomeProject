import { Text, View } from "react-native";
import React from 'react';
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import Loader from "../components/Shared/Loader";
import {useSelector } from "react-redux"
//import {setLoader} from "../redux/generalSlice"

export default function NavigationStack () {
    const {loader} = useSelector((state => state.general));
    const isLogin = false;
    return (
        <>
        {
            isLogin ? <UserStack/>:<AuthStack/>
        }
        {
            loader && <Loader loader ={loader} />
        }
        </>
    )
}