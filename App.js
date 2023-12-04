import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Home } from './screens/Home';
import { Contact } from './screens/Contact';
import { Profile } from './screens/Profile';
import { Order } from './screens/Order';
import { Tovar } from './screens/Tovar';

const Drawer = createDrawerNavigator();

export default function App() {
  const [user, setUser] = useState({ isAuthenticated: "", userName: "", userRole: "" }) // объект неавторизованного пользователя
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    const getUser = async () => {
      return await fetch("http://192.168.0.162:5050/api/account/isauthenticated")
        .then((response) => {
          response.status === 401 && setUser({ isAuthenticated: false, userName: "", userRole:"" })
          return response.json()
        })
        .then(
          (data) => {
            if (
              typeof data !== "undefined" &&
              typeof data.userName !== "undefined" &&
              typeof data.userRole !== "undefined"
            ) {
              setUser({ isAuthenticated: true, userName: data.userName, userRole: data.userRole })
              setIsAuthenticated(true);
              console.log('User', user)
            }
          },
          (error) => {
            console.log(error)
          }
        )
    }
    getUser()
  }, [setUser])

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

