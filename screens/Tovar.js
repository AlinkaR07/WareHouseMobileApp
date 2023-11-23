import React, { useState } from "react";
import { View, TouchableOpacity, Text, Modal, TextInput, FlatList} from "react-native";
import styles from "../stylesScreen/TovarStyle"
import {Icon} from "@rneui/themed";
import { SelectList } from "react_native_simple_dropdown_select_list";


export const Tovar = () => {

   const [selected, setSelected] = React.useState("");
   const [searchText, setSearchText] = useState("");
   const [modalVisible, setModalVisible] = useState(false);
   const [modalEditVisible, setModalEditVisible] = useState(false);
   const [editingItem, setEditingItem] = useState(null);
   const [editedFields, setEditedFields] = useState({
     id: "",
     name: "",
     category: "",
     data: "",
     cost: "",
     count: "",
   });
   const [newFields, setNewFields] = useState({
    name: "",
    category: "",
    data: "",
    cost: "",
    count: "",
  });

   const category = [
      { key: '1', value: 'Мясо' },
      { key: '2', value: 'Хлеб' },
      { key: '3', value: 'Рыба и морепродукты' },
      { key: '4', value: 'Детские товары' },
      { key: '5', value: 'Бакалея' },
      { key: '6', value: 'Овощи и фрукты' },
      { key: '7', value: 'Товары для дома' },
    ];


   const openModal = () => {
      setModalVisible(true);
   };

   const closeModal = () => {
      setModalVisible(false);
   };

   const closeEditModal = () => {
    setModalEditVisible(false);
 };


   const [data, setData] = useState([
    {id: "1", name: "Товар 1", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "2", name: "Крабовое мясо VICI", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "3", name: "Гель-мыло Dove", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "4", name: "Товар 4", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "5", name: "Товар 5", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "6", name: "Товар 6", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "7", name: "Товар 7", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "8", name: "Товар 8", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "9", name: "Товар 9", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "10", name: "Товар 10", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "11", name: "Товар 11", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "12", name: "Товар 12", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "13", name: "Товар 13", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "14", name: "Товар 14", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "15", name: "Товар 15", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "16", name: "Товар 16", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "17", name: "Товар 17", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "18", name: "Товар 18", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "19", name: "Товар 19", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "20", name: "Товар 20", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "21", name: "Товар 21", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "22", name: "Товар 22", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "23", name: "Товар 23", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
    {id: "24", name: "Товар 24", category: "Мясо", data: "2023-10-05", cost: "453", count: "14"},
  ]);

  const startEditingItem = (item) => {
   setEditingItem(item);
   setModalEditVisible(true);
   setEditedFields({
     id: item.id,
     name: item.name,
     category: item.category,
     data: item.data,
     cost: item.cost,
     count: item.count,
   });
 };

 const saveChanges = () => {
   // Обновление данных после редактирования
   const updatedData = data.map((item) => {
     if (item.id === editingItem.id) {
       return {
         ...item,
         id: editedFields.id,
         name: editedFields.name,
         category: editedFields.category,
         data: editedFields.data,
         cost: editedFields.cost,
         count: editedFields.count,
       };
     }
     return item;
   });

   setData(updatedData);
   setEditingItem(null);
    setEditedFields({
      id: "",
      name: "",
      category: "",
      data: "",
      cost: "",
      count: "",
    });
    setModalEditVisible(false);
 };

 const handleAddItem = () => {
  // Генерация уникального ID для нового товара
  const newItemWithId = {
    ...newFields,
    id: String(data.length + 1),
  };
  setData([...data, newItemWithId]);
  setModalVisible(false);
  setNewFields({
    name: "",
    category: "",
    data: "",
    cost: "",
    count: "",
  });
};


 const deleteItem = (itemId) => {
   // Фильтруем данные, оставляя только те элементы, чей id не совпадает с удаляемым
   const updatedData = data.filter((item) => item.id !== itemId);
   setData(updatedData);
 };


   return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <TextInput
         style={styles.searchInput}
         placeholder="Поиск товаров по названию"
         value={searchText}
         onChangeText={(text) => setSearchText(text)}
      />
      <View style={styles.flatlist}>
      <FlatList
          keyExtractor={(item) => item.id}
          data={data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))}
          renderItem={ ({item}) => (
              <View>
                  <View style={{flexDirection: "row", alignItems: 'center', paddingLeft: '80%'}}>
                      <TouchableOpacity style={{paddingTop: 30}} onPress={() => startEditingItem(item)}>
                          <View style={styles.buttonFunction}>  
                            <Icon name="edit" color="#fff"/>                               
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{paddingTop: 30, paddingLeft: '15%'}} onPress={() => deleteItem(item.id)}>
                          <View style={styles.buttonFunction}>  
                            <Icon name="delete" color="#fff"/>                               
                          </View>
                      </TouchableOpacity>
                  </View>
                  <Text style={styles.listId}>  
                      Код товара {item.id}{'\n'}{'\n'} 
                        <Text style={styles.list}>Название:  {item.name}{'\n'}</Text>
                        <Text style={styles.list}>Категория:  {item.category}{'\n'}</Text>
                        <Text style={styles.list}>Дата изготовления: {item.data}{'\n'}</Text>
                        <Text style={styles.list}>Цена:  {item.cost}{'\n'}</Text>
                        <Text style={styles.list}>Количество:  {item.count}</Text>
                  </Text>
            </View>
          )}
      />
      </View>
      <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={openModal}>
        <View style={styles.touchableOpacityView}>                                
            <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}> + Добавить новый товар</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEditVisible}
        onRequestClose={closeEditModal}
      >
        <View>
          <View style={styles.modalEditView}>
                <View style={styles.modalHeader}>
                    {/* Здесь размещается содержимое модального окна */}
                    <Text style={styles.modalTextHeader}>Код товара {editedFields.id}</Text>
                    {/* Кнопка для закрытия модального окна */}
                    <TouchableOpacity onPress={closeEditModal}>
                      <Icon name="close" color="#002329"/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.listedit1}>Название:  {editedFields.name}</Text>
                <Text style={styles.listedit1}>Категория:  {editedFields.category}</Text>
                <Text style={styles.listedit1}>Дата изготовления: {editedFields.data}</Text>
                <Text style={styles.listedit}>Цена:  {editedFields.cost}</Text>
                <TextInput style={styles.input} placeholder="Введите цену" value={editedFields.cost}  onChangeText={(text) => setEditedFields({ ...editedFields, cost: text })} />
                <Text style={styles.listedit}>Количество:  {editedFields.count}</Text>
                <TextInput style={styles.input} placeholder="Введите количество товара" value={editedFields.count} onChangeText={(text) => setEditedFields({ ...editedFields, count: text })}/>
                <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={saveChanges}>
                  <View style={styles.button}>                                
                      <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}>Сохранить</Text>
                  </View>
                </TouchableOpacity>
            </View>
            </View>
      </Modal>
            
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
                {/* Здесь размещается содержимое модального окна */}
                <Text style={styles.modalTextHeader}>Добавление нового товара</Text>
                {/* Кнопка для закрытия модального окна */}
                <TouchableOpacity onPress={closeModal}>
                  <Icon name="close" color="#002329"/>
                </TouchableOpacity>
            </View>
            {/* Пример поля ввода для нового заказа */}
            <Text style={styles.modalText}>Название товара:</Text>
            <TextInput style={styles.input} placeholder="Введите название товара" onChangeText={(text) => setNewFields({ ...newFields, name: text })}/>
            <Text style={styles.modalText}>Срок годности:</Text>
            <TextInput style={styles.input} placeholder="Выберите дату" onChangeText={(text) => setNewFields({ ...newFields, data: text })}/>
            <Text style={styles.modalText}>Категория:</Text>
            <SelectList data={category}   
               whatWithSelected={value => {setSelected(value); setNewFields({ ...newFields, category: value })}}
               maxHeightList={200}
               containerStyle={styles.containerStyle}
               containerDataStyle={styles.containerDataStyle}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
            />
            <Text style={styles.modalText}>Цена для покупателя:</Text>
            <TextInput style={styles.input} placeholder="Введите цену" onChangeText={(text) => setNewFields({ ...newFields, cost: text })}/>
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
    </View>
   );
};


