import React from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from "../stylesScreen/TovarStyle"

const EditModal = ({ tovars, setTovars, visible, setModalEditVisible, closeModal, editedFields, setEditedFields, editingItem, setEditingItem }) => {

    const saveChanges = async () => {
        const updatedFields = { codTovara: editedFields.codTovara, name: editedFields.name, category: String(editedFields.category), dateExpiration: new Date(editedFields.dateExpiration), price: parseFloat(editedFields.price), count: parseInt(editedFields.count)};
        console.log("Success:", updatedFields)
        try {
          const response = await fetch(`http://192.168.0.162:5050/api/Tovar/${editingItem.codTovara}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFields),
          });
      
          if (response.ok) {
            const updatedTovars = tovars.map((item) =>
              item.codTovara === editingItem.codTovara ? { ...item, ...editedFields } : item
            );
            setModalEditVisible(false);
            setTovars(updatedTovars);
            setEditingItem(null);
            setEditedFields({ codTovara: "", name: "", category: "", dateExpiration: "", price: "", count: "",});
          } else {
            console.error("Error updating item1:", response.statusText);
          }
        } catch (error) {
          console.error("Error updating item:", error);
        }
      };

    return (
      <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={closeModal}>
            <View>
          <View style={styles.modalEditView}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTextHeader}>Код товара {editedFields.codTovara}</Text>
                    <TouchableOpacity onPress={closeModal}>
                      <Icon name="close" color="#002329"/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.listedit1}>Название:  {editedFields.name}</Text>
                <Text style={styles.listedit1}>Категория:  {editedFields.category}</Text>
                <Text style={styles.listedit1}>Дата изготовления: {editedFields.dateExpiration}</Text>
                <Text style={styles.listedit}>Цена:  {editedFields.price}</Text>
                <TextInput style={styles.input} placeholder="Введите цену" value={editedFields.price.toString()}  onChangeText={(text) => setEditedFields({ ...editedFields, price: text })} />
                <Text style={styles.listedit}>Количество:  {editedFields.count}</Text>
                <TextInput style={styles.input} placeholder="Введите количество товара" value={editedFields.count.toString()} onChangeText={(text) => setEditedFields({ ...editedFields, count: text })}/>
                <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={saveChanges}>
                  <View style={styles.button}>                                
                      <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}>Сохранить</Text>
                  </View>
                </TouchableOpacity>
            </View>
            </View>
      </Modal>
    );
  };

  export { EditModal};