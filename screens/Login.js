// Login.js
import React, { useState } from 'react';
import {Icon} from "@rneui/themed";
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import styles from '../stylesScreen/LoginStyles';

export const Login = () => {

  return (
    <View>
          <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            {/* Здесь размещается содержимое модального окна */}
            <Text style={styles.modalTextHeader}>Вход</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="user" type="font-awesome" color="#002329" style={{paddingTop: 20}} />
            <TextInput style={styles.input} placeholder="Логин"/>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="key" type="font-awesome" color="#002329" style={{paddingTop: 20}} />
            <TextInput secureTextEntry={true} style={styles.input1} placeholder="Пароль"/>
            </View>
            <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.touchableOpacityView}>                                
                    <Text style={{fontSize: 23, fontWeight: "semibold", color: "white"}}>Войти</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
  );
}

