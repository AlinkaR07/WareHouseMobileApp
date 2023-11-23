import {Image, Text, View} from "react-native";
import React from "react";
import { useRoute } from '@react-navigation/native';

import accountImage from "../assets/account.png"

export  const Profile=({})=>{
    const route = useRoute();
    const { login, password } = route.params || {};

    return (
    <>
        <View style={{alignItems: "center", backgroundColor: '#fff', flex: 1}}>
                <Image source={accountImage} style={{
                        width: 200,
                        height: 200,
                        marginTop: 50,
                        tintColor: '#1F575E',
                        alignItems: 'center',
                }}></Image>
                <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: '#00474F',
                        marginTop: 10,
                }}>{login || 'N/A'}</Text>
                <View style={{
                        marginTop: 30,
                        color: 'white',
                        backgroundColor: '#1F575E',
                        width: 350,
                        padding: 8,
                        borderRadius: 5,
                }}>
                <Text style={{color: 'white', fontSize: 10, textAlign: "left"}}>Роль пользователя</Text>
                <Text style={{color: 'white', fontSize: 20, textAlign: "left", marginLeft: 15, marginTop: 7, fontWeight: 'bold'}}>{login === 'admin@mail.com' ? 'Администратор' : 'Пользователь'}</Text>
            </View>

            <View style={{
                        marginTop: 30,
                        color: 'white',
                        backgroundColor: '#1F575E',
                        width: 350,
                        padding: 8,
                        borderRadius: 5,
            }}>
                <Text style={{color: 'white', fontSize: 10, textAlign: "left"}}>Должность пользователя</Text>
                <Text style={{color: 'white', fontSize: 20, textAlign: "left", marginLeft: 15, marginTop: 7, fontWeight: 'bold'}}>{login === 'admin@mail.com' ? 'Заведующий складом' : 'Работник склада'}</Text>
            </View>

            <View style={{
                        marginTop: 30,
                        color: 'white',
                        backgroundColor: '#1F575E',
                        width: 350,
                        padding: 8,
                        borderRadius: 5,
                }}>
                <Text style={{color: 'white', fontSize: 10, textAlign: "left"}}>Логин</Text>
                <Text style={{color: 'white', fontSize: 20, textAlign: "left", marginLeft: 15, marginTop: 7, fontWeight: 'bold'}}>{login || 'N/A'}</Text>
            </View>
        </View>            
    </>
    );
}