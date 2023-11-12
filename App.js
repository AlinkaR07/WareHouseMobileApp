import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { Home } from './screens/Home';
import { Contact } from './screens/Contact';
import { Profile } from './screens/Profile';
import { Order } from './screens/Order';
import { Tovar } from './screens/Tovar';

import styles from './AppStyles';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#002329',
            width: 240,
            height: '95%',
            marginTop: '8%',
        },
          drawerType: "front",
          drawerHideStatusBarOnOpen: false,
          drawerLabelStyle: {
            color: '#FFFFFF', 
            fontSize: 16,
          },
          headerTintColor: '#1F575E',
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 15,
          }
        }}
      >
        <Drawer.Screen
          name='Главная страница'
          component={Home}
          options={{
            drawerIcon: ({ focused}) => (
              <FontAwesome5
                name='home'
                size={focused ? 25 : 20}
                color={'#fff'}
              />
            )
          }}
        />
        <Drawer.Screen
          name='Контакты'
          component={Contact}
          options={{
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name='address-card'
                size={focused ? 25 : 20}
                color={'#fff'}
              />
            )
          }}
        />
        <Drawer.Screen
          name='Пользователь'
          component={Profile}
          options={{
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name='user-alt'
                size={focused ? 25 : 20}
                color={'#fff'}
              />
            )
          }}
        />
        <Drawer.Screen
          name='Заказы'
          component={Order}
          options={{
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name='truck-moving'
                size={focused ? 25 : 20}
                color={'#fff'}
              />
            )
          }}
        />
         <Drawer.Screen
          name='Товары'
          component={Tovar}
          options={{
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name='shopping-bag'
                size={focused ? 25 : 20}
                color={'#fff'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

