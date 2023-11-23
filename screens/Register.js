// Login.js
import React, {useState} from 'react';
import {Icon} from "@rneui/themed";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../stylesScreen/RegisterStyles';

export const Register = ({onRegisterSuccess}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    if (login === 'admin@mail.com' && password === '!Aa123456' && confirmPassword === '!Aa123456') {
      console.log('Register successful');
      onRegisterSuccess();
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <View>
          <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            {/* Здесь размещается содержимое модального окна */}
            <Text style={styles.modalTextHeader}>Регистрация</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="user" type="font-awesome" color="#002329" style={{paddingTop: 20}} />
            <TextInput style={styles.input} placeholder="Логин" onChangeText={(text) => setLogin(text)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="key" type="font-awesome" color="#002329" style={{paddingTop: 20}} />
            <TextInput secureTextEntry={true} style={styles.input1} placeholder="Пароль" onChangeText={(text) => setPassword(text)}/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="lock" type="font-awesome" color="#002329" style={{paddingTop: 20}} />
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Подтверждение пароля" onChangeText={(text) => setConfirmPassword(text)}/>
            </View>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={handleLogin}>
                <View style={styles.touchableOpacityView}>                                
                    <Text style={{fontSize: 23, fontWeight: "semibold", color: "white"}}>Зарегистрироваться</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
  );
}

