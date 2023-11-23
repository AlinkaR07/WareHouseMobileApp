import React, { useState} from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { Icon } from '@rneui/themed';

import { Carousel } from '../component/Carousel/Carousel';
import styles from '../stylesScreen/HomeStyles';
import { Login } from './Login';
import { Register } from './Register';

export const Home = () => {
  const [modalLoginVisible, setModalLoginVisible] = useState(false);
  const [modalRegisterVisible, setModalRegisterVisible] = useState(false);
  const [isAuthorization, setIsAuthorization]=useState(false);

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

 const handleLoginSuccess = () => {
    setIsAuthorization(true);
    setModalLoginVisible(false); // Close the login modal
  };

  const handleRegisterSuccess = () => {
    setIsAuthorization(true);
    setModalRegisterVisible(false); // Close the login modal
  };

  const handleLogoffSuccess = () => {
    setIsAuthorization(false);
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView style={styles.safearea}>
          <Carousel/>
      </SafeAreaView>
            { !isAuthorization ? (
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
                // Отображаем экран входа, если modalVisible установлен в true
                <View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalRegisterVisible}
                        onRequestClose={closeModalRegister}
                    >
                        <View style={{marginLeft: "85%", marginTop: -3}}>
                        {/* Кнопка для закрытия модального окна */}
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