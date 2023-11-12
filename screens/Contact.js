import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';

import styles from '../stylesScreen/HomeStyles';

export const Contact = () => {
  return (
    <View style={{padding: 10, backgroundColor: '#fff', flex: 1}}>
            <Text style={styles.smalltitle}>О НАС</Text>
            <View style={styles.viewIconText}>
            <Icon name="map" color="#002329"/>
            <Text style={styles.text}>Адрес: г.Иваново, ул.Рабфаковская, д.34</Text>  
            </View>

            <View style={styles.viewIconText}>
            <Icon name="local-phone" color="#002329"/>
            <Text style={styles.text}>Номер телефона: 8(996)918-07-79</Text>
            </View>

            <View style={styles.viewIconText}>
            <Icon name="email" color="#002329"/>
            <Text style={styles.text}>E-mail: romanovaalina2003@gmail.com</Text>
            </View>

            <Text style={styles.smalltitle}>МЫ В МЕСЕНДЖЕРАХ</Text>
            <View style={styles.viewIconText}>
            <Icon name="phone-iphone" color="#002329"/>
            <Text style={styles.textunderline}>ВКонтакте</Text>
            </View>

            <View style={styles.viewIconText}>
            <Icon name="message" color="#002329"/>
            <Text style={styles.text}>WhatsApp: 8(996)918-07-79</Text>
            </View>

            <View style={styles.viewIconText}>
            <Icon name="phonelink" color="#002329"/>
            <Text style={styles.textunderline}>Skype</Text>
            </View>
      </View>
  );
}