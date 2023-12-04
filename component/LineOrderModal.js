import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from "../stylesScreen/OrderStyle"

const LineOrderModal = ({ lineOrders, modalLineOrderVisible, closeLineOrderModal, selectedOrder, loading, summa}) => {

    return (
        <Modal animationType="fade" transparent={true} visible={modalLineOrderVisible} onRequestClose={closeLineOrderModal} >
                     <View>
                        <View style={styles.modalLineOrderView}>
                           <View style={styles.modalHeader}>
                              <Text style={styles.modalTextHeader}>Заказ №{selectedOrder}</Text>
                              <TouchableOpacity onPress={closeLineOrderModal}>
                                 <Icon name="close" color="#002329"/>
                              </TouchableOpacity>
                           </View>   
                           { loading ? (
                                 <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <ActivityIndicator size="large" color="#1F575E" />
                                 </View>
                            ) : ( 
                                 <>                    
                           <FlatList
                              keyExtractor={(item) => item.id}
                              data={lineOrders}
                              renderItem={ ({item}) => (
                                 <View>
                                    {  item.numberOrder_FK_ === selectedOrder ? (                                        
                                          <>
                                             <Text style={styles.listId}> 
                                                <Text style={styles.list}>Название товара:  {item.name}{'\n'}</Text>
                                                <Text style={styles.list}>Количество заказа:  {item.countOrder}{'\n'}</Text>
                                                <Text style={styles.list}>Количество поставки: {item.countShipment}{'\n'}</Text>
                                                <Text style={styles.list}>Стоимость: {item.purchasePrice}</Text>
                                             </Text>
                                          </>
                                       ) : ("")
                                    }
                                 </View>
                              )}
                           />                        
                                 <Text style={styles.list1}>Сумма заказа = {summa[selectedOrder]} рублей</Text>                   
                           </> 
                           )}
                        </View>
                     </View> 
                  </Modal>
    )
};
  
export { LineOrderModal };