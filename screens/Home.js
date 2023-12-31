import React, {useState} from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

import { Carousel } from '../component/Carousel/Carousel';
import styles from '../stylesScreen/HomeStyles';
import { Login } from './Login';
import { Register } from './Register';

export const Home = () => {
  const navigation = useNavigation();
  const [modalLoginVisible, setModalLoginVisible] = useState(false);
  const [modalRegisterVisible, setModalRegisterVisible] = useState(false);
  const [user, setUser] = useState({ isAuthenticated: false, userName: "", userRole: "" });

const openModalLogin = () => {
    setModalLoginVisible(true);
   };

const closeModalLogin = () => {
    setModalLoginVisible(false);
 };

 const openModalRegister = () => {
    setModalRegisterVisible(true);
   };

   const closeModalRegister = () => {
    setModalRegisterVisible(false);
 };

 const handleLoginSuccess = (userLogin) => {
    setUser(userLogin);
    console.log(user);
    setModalLoginVisible(false); 
  };

  const handleRegisterSuccess = () => {
    setModalRegisterVisible(false); 
  };

  const handleLogoffSuccess = async () => {
    try {
      const response = await fetch('http://192.168.0.162:5050/api/account/logoff', {
        method: 'POST', 
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUser({ isAuthenticated: false, userName: '', userRole: '' });
        navigation.navigate('Пользователь', { userName: ""});
        console.log(user);
      } else {
        console.error('Ошибка при выходе из аккаунта', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при выходе из аккаунта', error);
    }
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView style={styles.safearea}>
          <Carousel/>
      </SafeAreaView>
            { !user.isAuthenticated ? (
            <>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={openModalLogin}>
                <View style={styles.touchableOpacityView}>                                
                    <Text style={{fontSize: 25, fontWeight: "semibold", color: "white"}}>Войти</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={openModalRegister}>
                <View style={styles.touchableOpacityView1}>                                
                    <Text style={{fontSize: 18, fontWeight: "semibold", color: "#1F575E", textDecorationLine: 'underline'}}>Регистрация</Text>
                </View>
            </TouchableOpacity>
            { modalLoginVisible ? (
                <View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalLoginVisible}
                        onRequestClose={closeModalLogin}
                    >
                        <View style={{marginLeft: "85%", marginTop: -3}}>
                        <TouchableOpacity onPress={closeModalLogin}>
                            <Icon name="close" color="#002329"/>
                        </TouchableOpacity>
                        </View>
                        <Login onLoginSuccess={handleLoginSuccess}/>   
                    </Modal>
                </View>
            ) : (
                ""
            )}
            {modalRegisterVisible ? (
                <View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalRegisterVisible}
                        onRequestClose={closeModalRegister}
                    >
                        <View style={{marginLeft: "85%", marginTop: -3}}>
                        <TouchableOpacity onPress={closeModalRegister}>
                            <Icon name="close" color="#002329"/>
                        </TouchableOpacity>
                        </View>
                        <Register onRegisterSuccess={handleRegisterSuccess}/>   
                    </Modal>
                </View>
            ) : (
                ""
            )}
         </>
        ) : (
            <>
                <TouchableOpacity style={{top: '30%', left: '35%'}} onPress={handleLogoffSuccess}>                             
                        <Icon name="exit-to-app" color="#1F575E" size={45}/> 
                </TouchableOpacity>
            </>
        )}                       
    </View>
  );
}