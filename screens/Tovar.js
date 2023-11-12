import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, Modal, TextInput } from "react-native";
import { Table, Row } from "react-native-table-component";
import styles from "../stylesScreen/TovarStyle"
import {Icon} from "@rneui/themed";
import { SelectList } from "react_native_simple_dropdown_select_list";

export const Tovar = () => {

   const [selected, setSelected] = React.useState("");

   const category = [
      { key: '1', value: 'Мясо' },
      { key: '2', value: 'Хлеб' },
      { key: '3', value: 'Рыба и морепродукты' },
      { key: '4', value: 'Детские товары' },
      { key: '5', value: 'Бакалея' },
      { key: '6', value: 'Овощи и фрукты' },
      { key: '7', value: 'Товары для дома' },
    ];


   const [modalVisible, setModalVisible] = useState(false);

   const openModal = () => {
      setModalVisible(true);
   };

   const closeModal = () => {
      setModalVisible(false);
   };

   const state = {
      tableHeadFirst: ["Код"],
      tableHeadRest: ["Название", "Категория", "Срок годности", "Цена", "Количество"],
      widthArrFirst: [100],
      widthArrRest: [255, 255, 255, 255, 255],
   };

   const data = [
    ["1", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["2", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["3", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["4", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["5", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["6", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["7", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["8", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["9", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["10", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["11", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["12", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["13", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["14", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["15", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["16", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["17", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["18", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["19", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["20", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["21", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["22", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["23", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
    ["24", "Товар 1",  "Мясо",  "2023-10-05", "453", "14"],
  ];

   const firstColumnData = data.map(row => [row[0]]); // Только первый столбец данных

   return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
    <ScrollView style={{ maxHeight: 600 }}>
      <View style={{ flexDirection: "row" , paddingTop: 15, paddingLeft: 23, paddingRight: 23}}>
         <ScrollView>
            <Table borderStyle={{ borderColor: "#002329", borderWidth: 2 }}>
               <Row
                  data={state.tableHeadFirst}
                  widthArr={state.widthArrFirst}
                  style={styles.headFirst}
                  textStyle={styles.text}
               />
               {firstColumnData.map((dataRow, index) => (
                  <Row
                     key={index}
                     data={dataRow}
                     widthArr={state.widthArrFirst}
                     style={styles.rowFirst}
                     textStyle={styles.text}
                  />
               ))}
            </Table>
         </ScrollView>

         <ScrollView horizontal={true}>
               <Table borderStyle={{ borderColor: "#002329", borderWidth: 2 }}>
                  <Row
                     data={state.tableHeadRest}
                     widthArr={state.widthArrRest}
                     style={styles.head}
                     textStyle={styles.text}
                  />
                  {data.map((dataRow, index) => (
                     <Row
                        key={index}
                        data={dataRow.slice(1)} // Остальные столбцы
                        widthArr={state.widthArrRest}
                        style={styles.row}
                        textStyle={styles.text}
                     />
                  ))}
               </Table>
            </ScrollView>
      </View>
      </ScrollView>
      <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}} onPress={openModal}>
      <View style={styles.touchableOpacityView}>                                
          <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}> + Добавить новый товар</Text>
      </View>
      </TouchableOpacity>

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
            <TextInput style={styles.input} placeholder="Введите название товара"/>
            <Text style={styles.modalText}>Срок годности:</Text>
            <TextInput style={styles.input} placeholder="Выберите дату"/>
            <Text style={styles.modalText}>Категория:</Text>
            <SelectList data={category}   
               whatWithSelected={value => setSelected(value)}
               maxHeightList={200}
               containerStyle={styles.containerStyle}
               containerDataStyle={styles.containerDataStyle}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
            />
            <Text style={styles.modalText}>Цена для покупателя:</Text>
            <TextInput style={styles.input} placeholder="Введите цену"/>
            <Text style={styles.modalText}>Количество товара:</Text>
            <TextInput style={styles.input} placeholder="Введите количество товара"/>
            <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}}>
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


