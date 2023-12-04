import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from "../stylesScreen/OrderStyle"
import { SelectList } from 'react_native_simple_dropdown_select_list';

import OrgPost from "../component/Carousel/OrgPost";

const AddModal = ({ orders, setOrders, lineOrders, setLineOrders, modalCreateOrderVisible, closeCreateOrderModal, setModalCreateOrderVisible}) => {
    const [selectedSelect, setSelectedSelect] = React.useState("");

    const [newFields, setNewFields] = useState({dataOrder: "", dataShipment: "", nameOrganizationPostavshik_FK_: "", fiOworker_FK_: "", statusOrder: ""});
    const [newLineFields, setNewLineFields] = useState({id: "", numberOrder_FK_: "", name: "", purchasePrice: "",   countOrder: "", dataManuf: "", countShipment: ""});

    const status = [
        { key: '1', value: 'Сформирован' },
        { key: '2', value: 'Заказан' },
        { key: '3', value: 'Поставлен' },
      ];

    const handleAddItem = async () => {
        const order = { dataOrder: new Date(newFields.dataOrder), dataShipment: null, statusOrder: String(newFields.statusOrder), nameOrganizationPostavshik_FK_: String(newFields.nameOrganizationPostavshik_FK_), fiOworker_FK_: newFields.fiOworker_FK_, lineOrders: null, order: null}
      
        try {
           const response = await fetch("http://192.168.0.162:5050/api/Orders/", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(order),
           });

           response.json().then((data) => {
       
           if (response.ok) {
                 const updatedOrder = [...orders, order];
                 setOrders(updatedOrder);
                 console.log("order:", order)
                 setModalCreateOrderVisible(false);
                 setNewFields({dataOrder: "", dataShipment: "", nameOrganizationPostavshik_FK_: "", fiOworker_FK_: "", statusOrder: ""});
                 
                 const lineorder = {name: newLineFields.name,  purchasePrice: newLineFields.purchasePrice, countOrder: parseInt(newLineFields.countOrder), countShipment: null, codTovara_FK_: null, dataManuf: null, numberOrder_FK_: data.number}
                 console.log("Success lineorder:", lineorder);

                 const createline = async () => {
     
                 const response = await fetch("http://192.168.0.162:5050/api/LinesOrder/", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(lineorder),
                 });
              
                 if (response.ok) {
                    const updatedLineOrder = [...lineOrders, lineorder];
                    setLineOrders(updatedLineOrder);
                    setModalCreateOrderVisible(false);
                    setNewLineFields({id: "", numberOrder_FK_: "", name: "", purchasePrice: "",   countOrder: "", dataManuf: "", countShipment: ""});
                 } else {
                    console.error("Error adding item:", response.statusText);
                 }   
               } 
               createline()   
           } else {
             console.error("Error adding item:", response.statusText);
           }
         })
         } catch (error) {
           console.error("Error adding item1:", error);
         }
      };

return (
   <Modal animationType="slide" transparent={true} visible={modalCreateOrderVisible} onRequestClose={closeCreateOrderModal}>
      <View>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
             <Text style={styles.modalTextHeader}>Создание нового заказа</Text>
             <TouchableOpacity onPress={closeCreateOrderModal}>
                <Icon name="close" color="#002329"/>
             </TouchableOpacity>
          </View>
          
          <Text style={styles.modalText}>ФИО сотрудника:</Text>
          <TextInput style={styles.input} placeholder="Введите ФИО сотрудника" onChangeText={(text) => setNewFields({ ...newFields, fiOworker_FK_: text })}/>
          <Text style={styles.modalText}>Дата заказа:</Text>
          <TextInput style={styles.input} placeholder="Выберите дату" onChangeText={(text) => setNewFields({ ...newFields, dataOrder: text })}/>
          <Text style={styles.modalText}>Организация поставщика:</Text>
          <SelectList data={OrgPost}   
             whatWithSelected={value => {setSelectedSelect(value); setNewFields({ ...newFields, nameOrganizationPostavshik_FK_: value })}}
             maxHeightList={200}
             containerStyle={styles.containerStyle}
             containerDataStyle={styles.containerDataStyle}
             infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
             containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
             style={{ zIndex: 999, position: 'relative', }} 
          />
          <Text style={styles.modalText}>Статус заказа:</Text>
          <SelectList data={status}   
             whatWithSelected={value => {setSelectedSelect(value); setNewFields({ ...newFields, statusOrder: value })}}
             maxHeightList={200}
             containerStyle={styles.containerStyle}
             containerDataStyle={styles.containerDataStyle}
             infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
             containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
          />
          <Text style={styles.modalText1}>Введите данные о товаре:</Text>
          <Text style={styles.modalText}>Название товара:</Text>
          <TextInput style={styles.input} placeholder="Введите название" onChangeText={(text) => setNewLineFields({ ...newLineFields, name: text })}/>
          <Text style={styles.modalText}>Цена товара:</Text>
          <TextInput style={styles.input} placeholder="Введите цену"  keyboardType="decimal-pad" onChangeText={(text) => setNewLineFields({ ...newLineFields, purchasePrice: text })}/>
          <Text style={styles.modalText}>Количество товара:</Text>
          <TextInput style={styles.input} placeholder="Введите количество"  keyboardType="numeric" onChangeText={(text) => setNewLineFields({ ...newLineFields, countOrder: text })}/>
          <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={handleAddItem}>
             <View style={styles.button}>                                
                <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}>Создать</Text>
             </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
     
   )
};
  
export { AddModal };