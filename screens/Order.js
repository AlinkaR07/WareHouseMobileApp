import React, { useState }  from "react";
import { View, FlatList, TouchableOpacity, Text, Modal, TextInput} from "react-native";
import styles from "../stylesScreen/OrderStyle"
import {Icon} from "@rneui/themed";
// import { TimeDatePicker } from "react-native-time-date-picker";
import { SelectList } from "react_native_simple_dropdown_select_list";

export const Order = () => {

   const [selectedSelect, setSelectedSelect] = React.useState("");
   const [selectedOrder, setSelectedOrder] = React.useState("");
   const [searchText, setSearchText] = useState("");
   const [modalCreateOrderVisible, setModalCreateOrderVisible] = useState(false);
   const [modalLineOrderVisible, setModalLineOrderVisible] = useState(false);
   const [modalEditVisible, setModalEditVisible] = useState(false);
   const [editingItem, setEditingItem] = useState(null);
   const [editedFields, setEditedFields] = useState({
      id: "",
      dataOrder: "",
      dataShipment: "",
      postavshik: "",
      FIO: "",
      status: "",
   });
   const [newFields, setNewFields] = useState({
      dataOrder: "",
      dataShipment: "",
      postavshik: "",
      FIO: "",
      status: "",
    });
    const [newLineFields, setNewLineFields] = useState({
      id: "",
      idOrder: "",
      name: "",
      countOrder: "",
      countShipment: "",
      cost: "",
    });


   const post = [
      { key: '1', value: 'HEINZ' },
      { key: '2', value: 'Русские пекари' },
      { key: '3', value: 'VICI' },
      { key: '4', value: 'Агуша' },
      { key: '5', value: 'Dove' },
      { key: '6', value: 'Овощебаза' },
    ];

    const status = [
      { key: '1', value: 'Сформирован' },
      { key: '2', value: 'Заказан' },
      { key: '3', value: 'Поставлен' },
    ];

   const openCreateOrderModal = () => {
      setModalCreateOrderVisible(true);
   };

   const closeCreateOrderModal = () => {
      setModalCreateOrderVisible(false);
   };

   const openLineOrderModal = (id) => {
      setModalLineOrderVisible(true);
      setSelectedOrder(id);
   };

   const closeLineOrderModal = () => {
      setModalLineOrderVisible(false);
      setSelectedOrder("");
   };

   const closeEditModal = () => {
      setModalEditVisible(false);
   };

   const [data, setData] = useState([
    {id: "1", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 1", FIO: "Иванов АС", status: "Доставлен"},
    {id: "2", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 3", FIO: "Петров ИИ", status: "Заказан"},
    {id: "3", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 4", FIO: "Смирнова ЕА", status: "Сформирован"},
    {id: "4", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 6", FIO: "Петров ИИ", status: "Доставлен"},
    {id: "5", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 2", FIO: "Иванов АС", status: "Доставлен"},
    {id: "6", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 3", FIO: "Смирнова ЕА", status: "Доставлен"},
    {id: "7", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 3", FIO: "Иванов АС", status: "Доставлен"},
    {id: "8", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 4", FIO: "Петров ИИ", status: "Доставлен"},
    {id: "9", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 5", FIO: "Смирнова ЕА", status: "Доставлен"},
    {id: "10", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 7", FIO: "Петров ИИ", status: "Доставлен"},
    {id: "11", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 3", FIO: "Петров ИИ", status: "Доставлен"},
    {id: "12", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 2", FIO: "Смирнова ЕА", status: "Доставлен"},
    {id: "13", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 1", FIO: "Иванов АС", status: "Доставлен"},
    {id: "14", dataOrder: "2023-10-01", dataShipment: "2023-10-05", postavshik: "Поставщик 1", FIO: "Иванов АС", status: "Доставлен"},
  ]);

  const [dataLine, setDataLine] = useState([
   {id: "1", idOrder: "1", name: "Товар 1", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "2", idOrder: "1", name: "Товар 2", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "3", idOrder: "2", name: "Товар 3", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "4", idOrder: "3", name: "Товар 4", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "5", idOrder: "3", name: "Товар 5", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "6", idOrder: "1", name: "Товар 6", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "7", idOrder: "5", name: "Товар 7", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "8", idOrder: "6", name: "Товар 8", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "9", idOrder: "9", name: "Товар 9", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "10", idOrder: "10", name: "Товар 10", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "11", idOrder: "10", name: "Товар 11", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "12", idOrder: "4", name: "Товар 12", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "13", idOrder: "4", name: "Товар 13", countOrder: "50", countShipment: "50", cost: "43 000"},
   {id: "14", idOrder: "4", name: "Товар 14", countOrder: "50", countShipment: "50", cost: "43 000"},
 ]);

  const startEditingItem = (item) => {
   setEditingItem(item);
   setModalEditVisible(true);
   setEditedFields({
     id: item.id,
     dataOrder: item.dataOrder,
     dataShipment: item.dataShipment,
     postavshik: item.postavshik,
     FIO: item.FIO,
     status: item.status,
   });
 };

 const saveChanges = () => {
   // Обновление данных после редактирования
   const updatedData = data.map((item) => {
     if (item.id === editingItem.id) {
       return {
         ...item,
         id: editedFields.id,
         dataOrder: editedFields.dataOrder,
         dataShipment: editedFields.dataShipment,
         postavshik: editedFields.postavshik,
         FIO: editedFields.FIO,
         status: editedFields.status,
       };
     }
     return item;
   });

   setData(updatedData);
   setEditingItem(null);
   setEditedFields({
      id: "",
      dataOrder: "",
      dataShipment: "",
      postavshik: "",
      FIO: "",
      status: "",
    });
    setModalEditVisible(false);
 };

 const handleAddItem = () => {
   // Генерация уникального ID для нового товара
   const newItemWithId = {
     ...newFields,
     id: String(data.length + 1),
   };
   const newItemLineWithId = {
      ...newFields,
      id: String(dataLine.length + 1),
    };
   setData([...data, newItemWithId]);
   setDataLine([ ...dataLine, newItemLineWithId]);
   setModalCreateOrderVisible(false);
   setNewFields({
      dataOrder: "",
      dataShipment: "",
      postavshik: "",
      FIO: "",
      status: "",
   });
   setNewLineFields({
      idOrder: "",
      name: "",
      countOrder: "",
      countShipment: "",
      cost: "",
   });
 };


 const deleteItem = (itemId) => {
   // Фильтруем данные, оставляя только те элементы, чей id не совпадает с удаляемым
   const updatedData = data.filter((item) => item.id !== itemId);
   setData(updatedData);
 };


   return (
    <View style={{backgroundColor: modalCreateOrderVisible || modalLineOrderVisible ? '#F1F0EF' : '#fff', flex: 1}}>
          <TextInput
         style={styles.searchInput}
         placeholder="Поиск заказа по поставщику"
         value={searchText}
         onChangeText={(text) => setSearchText(text)}
      />
      <View style={styles.flatlist}>
         <FlatList
            keyExtractor={(item) => index = item.id}
            data={data.filter(item => item.postavshik.toLowerCase().includes(searchText.toLowerCase()))}
            renderItem={ ({item}) => (
               <View>
                     <View style={{flexDirection: "row", alignItems: 'center', paddingLeft: '70%'}}>
                        <TouchableOpacity style={{paddingTop: 30}} onPress={() => openLineOrderModal(item.id)}>
                           <View style={styles.buttonFunction}>  
                              <Icon name="sticky-note-2" color="#fff"/>                               
                           </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingTop: 30, paddingLeft: '10%'}} onPress={() => startEditingItem(item)}>
                           <View style={styles.buttonFunction}>  
                              <Icon name="edit" color="#fff"/>                               
                           </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingTop: 30, paddingLeft: '10%'}} onPress={() => deleteItem(item.id)}>
                           <View style={styles.buttonFunction}>  
                              <Icon name="delete" color="#fff"/>                               
                           </View>
                        </TouchableOpacity>
                     </View>
                     <Text style={styles.listId}>  
                        Заказ №{item.id}{'\n'}{'\n'} 
                        <Text style={styles.list}>Дата заказа:  {item.dataOrder}{'\n'}</Text>
                        <Text style={styles.list}>Дата поставки:  {item.dataShipment}{'\n'}</Text>
                        <Text style={styles.list}>Поставщик: {item.postavshik}{'\n'}</Text>
                        <Text style={styles.list}>ФИО сотрудника: {item.FIO}{'\n'}</Text>
                        <Text style={styles.list}>Статус поставки: {item.status}</Text>
                     </Text>
                  
                  <Modal
                     animationType="fade"
                     transparent={true}
                     visible={modalLineOrderVisible}
                     onRequestClose={closeLineOrderModal}
                  >
                     <View>
                        <View style={styles.modalLineOrderView}>
                           <View style={styles.modalHeader}>
                              {/* Здесь размещается содержимое модального окна */}
                              <Text style={styles.modalTextHeader}>Заказ №{selectedOrder}</Text>
                              {/* Кнопка для закрытия модального окна */}
                              <TouchableOpacity onPress={closeLineOrderModal}>
                                 <Icon name="close" color="#002329"/>
                              </TouchableOpacity>
                           </View>
                           <FlatList
                              keyExtractor={(item) => item.id}
                              data={dataLine}
                              renderItem={ ({item}) => (
                                 <View>
                                    {  item.idOrder == selectedOrder.toString() ? (                                        
                                          <>
                                             <Text style={styles.listId}> 
                                                <Text style={styles.list}>Название товара:  {item.name}{'\n'}</Text>
                                                <Text style={styles.list}>Количество заказа:  {item.countOrder}{'\n'}</Text>
                                                <Text style={styles.list}>Количество поставки: {item.countShipment}{'\n'}</Text>
                                                <Text style={styles.list}>Стоимость: {item.cost}</Text>
                                             </Text>
                                          </>
                                       ) : ("")
                                    }
                                 </View>
                              )}
                           />
                                 <Text style={styles.list1}>Сумма заказа: 555 рублей</Text>                   
                        </View>
                     </View>
                  </Modal>
               </View>
            )}            
         />
      </View>

      <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={openCreateOrderModal}>
         <View style={styles.touchableOpacityView}>                                
            <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}> + Создать новый заказ</Text>
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
                    <Text style={styles.modalTextHeader}>Заказ №{editedFields.id}</Text>
                    {/* Кнопка для закрытия модального окна */}
                    <TouchableOpacity onPress={closeEditModal}>
                      <Icon name="close" color="#002329"/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.listedit1}>Дата заказа:  {editedFields.dataOrder}</Text>
                <Text style={styles.listedit}>Дата поставки:  {editedFields.dataShipment}</Text>
                <TextInput style={styles.input} placeholder="Введите дату поставки" value={editedFields.dataShipment}  onChangeText={(text) => setEditedFields({ ...editedFields, dataShipment: text })} />
                <Text style={styles.listedit1}>Поставщик: {editedFields.postavshik}</Text>
                <Text style={styles.listedit1}>ФИО сотрудника:  {editedFields.FIO}</Text>
                <Text style={styles.listedit}>Статус:  {editedFields.status}</Text>
                <SelectList data={status}   
                     whatWithSelected={value => {setSelectedSelect(value); setEditedFields({ ...editedFields, status: value })}}
                     maxHeightList={200}
                     containerStyle={styles.containerStyle}
                     containerDataStyle={styles.containerDataStyle}
                     infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
                     containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
                     value={editedFields.status}
                />
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
        visible={modalCreateOrderVisible}
        onRequestClose={closeCreateOrderModal}
      >
        <View>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
               {/* Здесь размещается содержимое модального окна */}
               <Text style={styles.modalTextHeader}>Создание нового заказа</Text>
               {/* Кнопка для закрытия модального окна */}
               <TouchableOpacity onPress={closeCreateOrderModal}>
                  <Icon name="close" color="#002329"/>
               </TouchableOpacity>
            </View>
            
            <Text style={styles.modalText}>ФИО сотрудника:</Text>
            <TextInput style={styles.input} placeholder="Введите ФИО сотрудника" onChangeText={(text) => setNewFields({ ...newFields, FIO: text })}/>
            <Text style={styles.modalText}>Дата заказа:</Text>
            <TextInput style={styles.input} placeholder="Выберите дату" onChangeText={(text) => setNewFields({ ...newFields, dataOrder: text })}/>
            <Text style={styles.modalText}>Организация поставщика:</Text>
            <SelectList data={post}   
               whatWithSelected={value => {setSelectedSelect(value); setNewFields({ ...newFields, postavshik: value })}}
               maxHeightList={200}
               containerStyle={styles.containerStyle}
               containerDataStyle={styles.containerDataStyle}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               style={{ zIndex: 999, position: 'relative', }} 
            />
            <Text style={styles.modalText}>Статус заказа:</Text>
            <SelectList data={status}   
               whatWithSelected={value => {setSelectedSelect(value); setNewFields({ ...newFields, status: value })}}
               maxHeightList={200}
               containerStyle={styles.containerStyle}
               containerDataStyle={styles.containerDataStyle}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
            />
            <Text style={styles.modalText1}>Введите данные о товаре:</Text>
            <Text style={styles.modalText}>Название товара:</Text>
            <SelectList data={post}   
               whatWithSelected={value => {setSelectedSelect(value); setNewLineFields({ ...newFields, name: value })}}
               maxHeightList={200}
               containerStyle={styles.containerStyle}
               containerDataStyle={styles.containerDataStyle}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               style={{ zIndex: 999, position: 'relative', }} 
            />
            <Text style={styles.modalText}>Цена товара:</Text>
            <TextInput style={styles.input} placeholder="Введите цену"  keyboardType="decimal-pad" onChangeText={(text) => setNewLineFields({ ...newFields, cost: text })}/>
            <Text style={styles.modalText}>Количество товара:</Text>
            <TextInput style={styles.input} placeholder="Введите количество"  keyboardType="numeric" onChangeText={(text) => setNewLineFields({ ...newFields, countOrder: text })}/>
            <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={handleAddItem}>
               <View style={styles.button}>                                
                  <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}>Создать</Text>
               </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
   );
};


