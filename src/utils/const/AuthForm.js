import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const loginForm = [
    {
        id : 1,
        title : "E-mail Adresi",
        type : "email",
        icon : <Feather name="mail" size={20} color="#868E96" />,
    },
    {
        id : 2,
        title : "Sifre",
        type : "password",
        icon : <Ionicons name="key-outline" size={20} color="#868E96" />,
        isSecure : true,
        secureIcon : {
            visible : <Feather name="eye" size={20} color="#868E96" />,
            notVisible :<Feather name="eye" size={20} color="#868E96" />,
        }
    }
];


export const registerForm = [
    {
        id : 1,
        title : "Ad",
        type : "name",
        icon : <Feather name="user" size={20} color="#868E96" />,
    },
    {
        id : 2,
        title : "Soyad",
        type : "surname",
        icon : <Feather name="user" size={20} color="#868E96" />,
    },
    {
        id : 3,
        title : "E-mail Adresi",
        type : "email",
        icon : <Feather name="mail" size={20} color="#868E96" />,
    },
    {
        id : 4,
        title : "Sifre",
        type : "password",
        icon : <Ionicons name="key-outline" size={20} color="#868E96" />,
        isSecure : true,
        secureIcon : {
            visible : <Feather name="eye" size={20} color="#868E96" />,
            notVisible : <Feather name="eye" size={20} color="#868E96" />,
        } 

    },
    {
        id : 5,
        title : "Sifre Tekrar",
        type : "rpassword",
        icon : <Ionicons name="key-outline" size={20} color="#868E96" />,
        isSecure : true,
        secureIcon : {
            visible : <Feather name = "eye" size = {20} color = "#868E96"/>,
            notVisible : <Feather name = "eye" size = {20} color = "#868E96"/>,
        }
        
    }
];