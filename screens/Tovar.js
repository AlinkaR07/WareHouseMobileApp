import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator} from "react-native";
import styles from "../stylesScreen/TovarStyle"

import { AddModal } from "../component/TovarCreateModal";
import { EditModal } from "../component/TovarEditModal";
import FlatListTovars from "../component/FlatListTovars";

export const Tovar = () => {

  const [tovars, setTovars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editedFields, setEditedFields] = useState({ codTovara: "", name: "", category: "", dateExpiration: "", price: "", count: "", });

   const openModal = () => {
      setModalVisible(true);
   };

   const closeModal = () => {
      setModalVisible(false);
   };

   const closeEditModal = () => {
    setModalEditVisible(false);
 };

  useEffect(() => {
       const getTovars = async () => {
          const requestOptions = {
              method: 'GET'
          }
        return await fetch("http://192.168.0.162:5050/api/Tovar", requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
          })
            .then(
                (data) => {
                    console.log('Data:', data);
                    setTovars(data);
                    setLoading(false);
                },
                (error) => {
                    console.log(error);
                    setLoading(true);
                }
            )
    }
    getTovars()
}, [setTovars])

   return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      { loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#1F575E" />
        </View>
      ) : ( 
      <>
      <TextInput
         keyboardType="default" 
         style={styles.searchInput}
         placeholder="Поиск товаров по названию"
         value={searchText}
         onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={openModal}>
        <View style={styles.touchableOpacityView}>                                
            <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}> + Добавить новый товар</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.flatlist}>
      <FlatListTovars
            tovars={tovars}
            setTovars={setTovars}
            searchText={searchText}
            setEditingItem={setEditingItem}
            setModalEditVisible={setModalEditVisible}
            setEditedFields={setEditedFields}
          />
      </View>
      <EditModal
            tovars = {tovars}
            setTovars={setTovars}
            visible={modalEditVisible}
            setModalEditVisible={setModalEditVisible}
            closeModal={closeEditModal}
            editedFields={editedFields}
            setEditedFields={setEditedFields}
            editingItem={editingItem}
            setEditingItem={setEditingItem}
      />
      <AddModal
            tovars = {tovars}
            visible={modalVisible}
            closeModal={closeModal}
            setTovars={setTovars}
            setModalVisible={setModalVisible}
          />
      </>
      )}
    </View>
   );
};


