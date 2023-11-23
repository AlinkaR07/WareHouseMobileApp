// Login.js
import React, { useState } from 'react';
import {Icon} from "@rneui/themed";
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../stylesScreen/LoginStyles';

export const Login = ({ onLoginSuccess }) => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if ((login === 'admin@mail.com' && password === '!Aa123456') || (login === 'smirnova@mail.ru' && password === 'Smir_45')) {
      console.log('Login successful');
      onLoginSuccess();
      navigation.navigate('Пользователь', { login, password });
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <View>
          <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            {/* Здесь размещается содержимое модального окна */}
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

