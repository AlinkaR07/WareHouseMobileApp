import React from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from "../stylesScreen/OrderStyle"
import { SelectList } from 'react_native_simple_dropdown_select_list';

const EditModal = ({ orders, setOrders, modalEditVisible, closeEditModal, setModalEditVisible, editedFields, setEditedFields, editingItem, setEditingItem, setSelectedSelect}) => {

    const status = [
        { key: '1', value: 'Сформирован' },
        { key: '2', value: 'Заказан' },
        { key: '3', value: 'Поставлен' },
      ];

    const saveChanges = async () => {
        const updatedFields = {number: editedFields.number, dataOrder: editedFields.dataOrder, dataShipment: editedFields.dataShipment, nameOrganizationPostavshik_FK_: editedFields.nameOrganizationPostavshik_FK_, fiOworker_FK_: editedFields.fiOworker_FK_, statusOrder: editedFields.statusOrder, lineOrders: null, order: null}
        console.log("Success:", updatedFields)
     
        try {
           const response = await fetch(`http://192.168.0.162:5050/api/Orders/${editingItem.number}`, {
             method: "PUT",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(updatedFields),
           });
       
           if (response.ok) {
             const updatedOrder = orders.map((item) =>
               item.number === editingItem.number ? { ...item, ...editedFields } : item
             );
             setModalEditVisible(false);
             setOrders(updatedOrder);
             setEditingItem(null);
             setEditedFields({number: "", dataOrder: "", dataShipment: "", nameOrganizationPostavshik_FK_: "", fiOworker_FK_: "", statusOrder: ""});
           } else {
             console.error("Error updating item1:", response.statusText);
           }
         } catch (error) {
           console.error("Error updating item:", error);
         }
      };

    return (
        <Modal animationType="slide" transparent={true} visible={modalEditVisible} onRequestClose={closeEditModal}>
            <View>
                <View style={styles.modalEditView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTextHeader}>Заказ №{editedFields.number}</Text>
                            <TouchableOpacity onPress={closeEditModal}>
                            <Icon name="close" color="#002329"/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.listedit1}>Дата заказа:  {editedFields.dataOrder}</Text>
                        <Text style={styles.listedit}>Дата поставки:  {editedFields.dataShipment}</Text>
                        <TextInput style={styles.input} placeholder="Введите дату поставки" value={editedFields.dataShipment}  onChangeText={(text) => setEditedFields({ ...editedFields, dataShipment: text })} />
                        <Text style={styles.listedit1}>Поставщик: {editedFields.nameOrganizationPostavshik_FK_}</Text>
                        <Text style={styles.listedit1}>ФИО сотрудника:  {editedFields.fiOworker_FK_}</Text>
                        <Text style={styles.listedit}>Статус:  {editedFields.statusOrder}</Text>
                        <SelectList data={status}   
                            whatWithSelected={value => {setSelectedSelect(value); setEditedFields({ ...editedFields, statusOrder: value })}}
                            maxHeightList={200}
                            containerStyle={styles.containerStyle}
                            containerDataStyle={styles.containerDataStyle}
                            infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
                            containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
                            value={editedFields.statusOrder}
                        />
                        <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={saveChanges}>
                        <View style={styles.button}>                                
                            <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}>Сохранить</Text>
                        </View>
                        </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export { EditModal};