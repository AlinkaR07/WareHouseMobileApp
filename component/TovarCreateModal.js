import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from "../stylesScreen/TovarStyle"
import { SelectList } from 'react_native_simple_dropdown_select_list';
import TovarCategory from "../component/Carousel/TovarCategory";

const AddModal = ({ tovars, visible, closeModal, setTovars, setModalVisible}) => {
    const [newFields, setNewFields] = useState({ name: "", category: "", dateExpiration: "", price: "", count: "",});
    const [selected, setSelected] = React.useState("");

    const handleAddItem =  async () => {
        const tovar = { name: newFields.name, dateExpiration: new Date(newFields.dateExpiration), category:  String(newFields.category), price: parseFloat(newFields.price), count: parseInt(newFields.count)}
        console.log("Success:", tovar)
        try {
          const response = await fetch("http://192.168.0.162:5050/api/Tovar/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tovar),
          });
      
          if (response.ok) {
            const updatedTovars = [...tovars, tovar];
            setTovars(updatedTovars);
            setModalVisible(false);
            setNewFields({name: "", category: "", dateExpiration: "", price: "", count: "",});
          } else {
            console.error("Error adding item:", response.statusText);
          }
        } catch (error) {
          console.error("Error adding item1:", error);
        }
      };


    return (
      <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={closeModal}>
            <View>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
                <Text style={styles.modalTextHeader}>Добавление нового товара</Text>
                <TouchableOpacity onPress={closeModal}>
                  <Icon name="close" color="#002329"/>
                </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>Название товара:</Text>
            <TextInput style={styles.input} placeholder="Введите название товара" onChangeText={(text) => setNewFields({ ...newFields, name: text })}/>
            <Text style={styles.modalText}>Срок годности:</Text>
            <TextInput style={styles.input} placeholder="Выберите дату" onChangeText={(text) => setNewFields({ ...newFields, dateExpiration: text })}/>
            <Text style={styles.modalText}>Категория:</Text>
            <SelectList data={TovarCategory}   
               whatWithSelected={value => {setSelected(value); setNewFields({ ...newFields, category: value })}}
               maxHeightList={200}
               containerStyle={styles.containerStyle}
               containerDataStyle={styles.containerDataStyle}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
            />
            <Text style={styles.modalText}>Цена для покупателя:</Text>
            <TextInput style={styles.input} placeholder="Введите цену" onChangeText={(text) => setNewFields({ ...newFields, price: text })}/>
            <Text style={styles.modalText}>Количество товара:</Text>
            <TextInput style={styles.input} placeholder="Введите количество товара" onChangeText={(text) => setNewFields({ ...newFields, count: text })}/>
            <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={handleAddItem}>
               <View style={styles.button}>                                
                  <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}>Добавить</Text>
               </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  
  export { AddModal };