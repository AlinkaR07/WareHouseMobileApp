import React, {useState} from 'react';
import {Icon} from "@rneui/themed";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../stylesScreen/RegisterStyles';

export const Register = ({}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://192.168.0.162:5050/api/account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: login, password: password, passwordConfirm: confirmPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Register successful', data);
        if (                               
          typeof data !== "undefined" &&
          typeof data.userName !== "undefined"
        ) {
        Alert.alert('Регистрация успешна', 'Вы успешно зарегистрированы!');
        navigation.navigate('Главная стрнаица');
        }
        else {
          Alert.alert('Ошибка регистрации', 'Неверные учетные данные.');
        }
      } else {
        console.log('Invalid credentials');
        Alert.alert('Ошибка', 'Произошла ошибка во время регистрации.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View>
          <View style={styles.modalView}>
          <View style={styles.modalHeader}>
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
            <TouchableOpacity style={{alignItems: 'center'}} onPress={handleRegister}>
                <View style={styles.touchableOpacityView}>                                
                    <Text style={{fontSize: 23, fontWeight: "semibold", color: "white"}}>Зарегистрироваться</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
  );
}

