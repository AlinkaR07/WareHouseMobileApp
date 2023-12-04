import React, { useEffect, useState }  from "react";
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator} from "react-native";
import styles from "../stylesScreen/OrderStyle"

import { AddModal } from "../component/OrderCreateModal";
import { EditModal } from "../component/OrderEditModals";
import FlatListOrders from "../component/FlatListOrders";

export const Order = ({}) => {
   const [orders, setOrders] = useState([]);
   const [lineOrders, setLineOrders] = useState([]);
   const [loading, setLoading] = useState(true);
   const [lineOrderLoading, setLineOrderLoading] = useState(true);
   const [selectedSelect, setSelectedSelect] = React.useState("");
   const [selectedOrder, setSelectedOrder] = React.useState("");
   const [searchText, setSearchText] = useState("");
   const [modalCreateOrderVisible, setModalCreateOrderVisible] = useState(false);
   const [modalLineOrderVisible, setModalLineOrderVisible] = useState(false);
   const [modalEditVisible, setModalEditVisible] = useState(false);
   const [editingItem, setEditingItem] = useState(null);
   const [editedFields, setEditedFields] = useState({number: "", dataOrder: "", dataShipment: "", nameOrganizationPostavshik_FK_: "", fiOworker_FK_: "", statusOrder: ""});

   const openCreateOrderModal = () => {
      setModalCreateOrderVisible(true);
   };

   const closeCreateOrderModal = () => {
      setModalCreateOrderVisible(false);
   };

   const closeEditModal = () => {
      setModalEditVisible(false);
   };

   useEffect(() => {
      const getOrders = async () => {
          const requestOptions = {
              method: 'GET'
          }
          return await fetch("http://192.168.0.162:5050/api/Orders", requestOptions)
              .then(response => response.json())
              .then(
                  (data) => {
                      console.log('Data:', data)
                      setOrders(data)
                      setLoading(false);
                  },
                  (error) => {
                      console.log(error)   
                      setLoading(true);
                  }
              )
      }
      getOrders()
   }, [setOrders])

   return (
    <View style={{backgroundColor: modalCreateOrderVisible || modalLineOrderVisible ? '#F1F0EF' : '#fff', flex: 1}}>
     { loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#1F575E" />
        </View>
      ) : ( 
      <>
          <TextInput
         style={styles.searchInput}
         placeholder="Поиск заказа по номеру"
         value={searchText}
         onChangeText={(text) => setSearchText(text)}
      />
            <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={openCreateOrderModal}>
               <View style={styles.touchableOpacityView}>                                
                  <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}> + Создать новый заказ</Text>
               </View>
            </TouchableOpacity>
      <FlatListOrders
         orders={orders}
         setOrders={setOrders}
         lineOrders={lineOrders}
         setLineOrders={setLineOrders}
         selectedOrder={selectedOrder}
         setSelectedOrder={setSelectedOrder}
         lineOrderLoading={lineOrderLoading}
         setLineOrderLoading={setLineOrderLoading}
         modalLineOrderVisible={modalLineOrderVisible}
         setModalLineOrderVisible={setModalLineOrderVisible}
         setEditingItem={setEditingItem}
         setModalEditVisible={setModalEditVisible}
         setEditedFields={setEditedFields}
         searchText={searchText}
      />
      <EditModal
         orders={orders}
         setOrders={setOrders}
         modalEditVisible={modalEditVisible}
         closeEditModal={closeEditModal}
         setModalEditVisible={setModalEditVisible}
         editedFields={editedFields}
         setEditedFields={setEditedFields}
         editingItem={editingItem}
         setEditingItem={setEditingItem}
         setSelectedSelect={setSelectedSelect}
      />
      <AddModal
         orders={orders}
         setOrders={setOrders}
         lineOrders={lineOrders}
         setLineOrders={setLineOrders}
         modalCreateOrderVisible={modalCreateOrderVisible}
         closeCreateOrderModal={closeCreateOrderModal}
         setModalCreateOrderVisible={setModalCreateOrderVisible}
      />
      </>
      )}
    </View>
   );
};


