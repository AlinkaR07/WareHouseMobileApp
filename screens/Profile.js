import {Image, Text, View} from "react-native";
import React from "react";

import accountImage from "../assets/account.png"

export  const Profile=({name})=>{
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
        }}>admin@mail.com</Text>
        <View style={{
                marginTop: 30,
                color: 'white',
                backgroundColor: '#1F575E',
                width: 350,
                padding: 8,
                borderRadius: 5,
            }}>
        <Text style={{color: 'white', fontSize: 10, textAlign: "left"}}>Роль пользователя</Text>
        <Text style={{color: 'white', fontSize: 20, textAlign: "left", marginLeft: 15, marginTop: 7, fontWeight: 'bold'}}>Администратор</Text>
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
        <Text style={{color: 'white', fontSize: 20, textAlign: "left", marginLeft: 15, marginTop: 7, fontWeight: 'bold'}}>Заведующий складом</Text>
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
        <Text style={{color: 'white', fontSize: 20, textAlign: "left", marginLeft: 15, marginTop: 7, fontWeight: 'bold'}}>admin@mail.com</Text>
        </View>
    </View>            
    </>
    );
}