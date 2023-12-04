import React from 'react';
import { View, TouchableOpacity, Text, FlatList} from 'react-native';
import { Icon } from '@rneui/themed';
import styles from '../stylesScreen/OrderStyle';

import { LineOrderModal } from './LineOrderModal';

const length = 1000; 
let summa = Array(length).fill(0);

const FlatListOrders = ({ orders, setOrders, lineOrders, setLineOrders, selectedOrder, setSelectedOrder, lineOrderLoading, setLineOrderLoading, modalLineOrderVisible, setModalLineOrderVisible, setEditingItem, setModalEditVisible, setEditedFields, searchText}) => {

    const openLineOrderModal = (number) => {
        setModalLineOrderVisible(true);
        setSelectedOrder(number);
        console.log('Number: ', number);
  
        const getLinesOrder = async () => {
           const requestOptions = {
              method: 'GET'
          }
       
           return await fetch(`http://192.168.0.162:5050/api/LinesOrder`, requestOptions)
           .then(response => response.json())
                .then(
                    (data) => {
                       let i=0;
                       for(i; i<data.length; i++){
                         if((data[i].numberOrder_FK_ === number)){                      // фильтруем строки заказа, оставляя только строки текущего заказа и считаем сумму заказов 
                           summa[number] += parseInt(data[i].purchasePrice)*data[i].countOrder;
                           console.log('Summa: ', summa);
                         }
                       }
                       setLineOrders(data)
                       console.log('LineOrder: ', lineOrders);
                       setLineOrderLoading(false);
                    },
                    (error) => {
                        console.log(error)   
                        setLineOrderLoading(true);
                    }
                )
        }
        getLinesOrder();
     };
  
     const closeLineOrderModal = () => {
        setModalLineOrderVisible(false);
        setSelectedOrder("");
        summa[selectedOrder] = 0;
     };

     const startEditingItem = (item) => {
        setEditingItem(item);
        setModalEditVisible(true);
        setEditedFields({
          number: item.number,
          dataOrder: item.dataOrder,
          dataShipment: item.dataShipment,
          nameOrganizationPostavshik_FK_: item.nameOrganizationPostavshik_FK_,
          fiOworker_FK_: item.fiOworker_FK_,
          statusOrder: item.statusOrder,
        });
      };
     
      const deleteItem = async (number) => {
        try {
           const response = await fetch(`http://192.168.0.162:5050/api/Orders/${number}`, {
             method: "DELETE",
           });
       
           if (response.ok) {
             const updatedOrder = orders.filter((item) => item.number !== number);
             setOrders(updatedOrder);
           } else {
             console.error("Error deleting item1:", response.statusText);
           }
         } catch (error) {
           console.error("Error deleting item:", error);
         }
      };     

    return ( 
<View style={styles.flatlist}>
         <FlatList
            keyExtractor={(item) => index = item.number}
            data={orders.filter(item => item.number.toString().toLowerCase().includes(searchText.toLowerCase()))}
            renderItem={ ({item}) => (
               <View>
                        <View style={{flexDirection: "row", alignItems: 'center', paddingLeft: '70%'}}>
                           <TouchableOpacity style={{paddingTop: 30}} onPress={() => openLineOrderModal(item.number)}>
                              <View style={styles.buttonFunction}>  
                                 <Icon name="sticky-note-2" color="#fff"/>                               
                              </View>
                           </TouchableOpacity>
                           <TouchableOpacity style={{paddingTop: 30, paddingLeft: '10%'}} onPress={() => startEditingItem(item)}>
                              <View style={styles.buttonFunction}>  
                                 <Icon name="edit" color="#fff"/>                               
                              </View>
                           </TouchableOpacity>
                           <TouchableOpacity style={{paddingTop: 30, paddingLeft: '10%'}} onPress={() => deleteItem(item.number)}>
                              <View style={styles.buttonFunction}>  
                                 <Icon name="delete" color="#fff"/>                               
                              </View>
                           </TouchableOpacity>
                        </View>
                     <Text style={styles.listId}>  
                        Заказ №{item.number}{'\n'}{'\n'} 
                        <Text style={styles.list}>Дата заказа:  {item.dataOrder}{'\n'}</Text>
                        <Text style={styles.list}>Дата поставки:  {item.dataShipment}{'\n'}</Text>
                        <Text style={styles.list}>Поставщик: {item.nameOrganizationPostavshik_FK_}{'\n'}</Text>
                        <Text style={styles.list}>ФИО сотрудника: {item.fiOworker_FK_}{'\n'}</Text>
                        <Text style={styles.list}>Статус заказа: {item.statusOrder}</Text>
                     </Text>
                 <LineOrderModal
                     lineOrders={lineOrders}
                     modalLineOrderVisible={modalLineOrderVisible}
                     closeLineOrderModal={closeLineOrderModal}
                     selectedOrder={selectedOrder}
                     loading={lineOrderLoading}
                     summa={summa}
                 />
               </View>
            )}          
         />
      </View>
    )
}

export default FlatListOrders;