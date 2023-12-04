import React, { useState } from 'react';
import {Icon} from "@rneui/themed";
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../stylesScreen/LoginStyles';

export const Login = ({ onLoginSuccess }) => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.0.162:5050/api/account/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: login, password: password, rememberme: true }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        if (                               
          typeof data !== "undefined" &&
          typeof data.userName !== "undefined"
        ) {
        Alert.alert('Авторизация выполнена', 'Вы успешно авторизовались!');
        onLoginSuccess({isAuthenticated: true, userName: data.userName, userRole: data.userRole});
        navigation.navigate('Пользователь', { userName: data.userName});
        }
        else {
          Alert.alert('Ошибка авторизации', 'Неверные учетные данные.');
        }
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View>
          <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTextHeader}>Вход</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="user" type="font-awesome" color="#002329" style={{paddingTop: 20}} />
            <TextInput style={styles.input} placeholder="Логин" keyboardType="email-address" onChangeText={(text) => setLogin(text)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="key" type="font-awesome" color="#002329" style={{paddingTop: 20}} />
            <TextInput secureTextEntry={true} style={styles.input1} placeholder="Пароль" onChangeText={(text) => setPassword(text)}/>
            </View>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={handleLogin}>
                <View style={styles.touchableOpacityView}>                                
                    <Text style={{fontSize: 23, fontWeight: "semibold", color: "white"}}>Войти</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
  );
}

