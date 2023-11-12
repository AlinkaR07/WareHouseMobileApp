import React, { useState }  from "react";
import { View, ScrollView, TouchableOpacity, Text, Modal, TextInput} from "react-native";
import { Table, Row } from "react-native-table-component";
import styles from "../stylesScreen/OrderStyle"
import {Icon} from "@rneui/themed";
// import { TimeDatePicker } from "react-native-time-date-picker";
import { SelectList } from "react_native_simple_dropdown_select_list";

export const Order = ({ navigation }) => {

   const [selected, setSelected] = React.useState("");

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

   const [modalVisible, setModalVisible] = useState(false);

   const openModal = () => {
      setModalVisible(true);
   };

   const closeModal = () => {
      setModalVisible(false);
   };

   const state = {
      tableHeadFirst: ["№"],
      tableHeadRest: ["Дата заказа", "Дата поставки", "Поставщик", "ФИО работника", "Статус"],
      widthArrFirst: [100],
      widthArrRest: [255, 255, 255, 255, 255],
   };

   const data = [
    ["1", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["2", "2023-10-03", "2023-10-08", "Поставщик 2", "Петров Петр", "Доставлен"],
    ["3", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["4", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["5", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["6", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["7", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["8", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["9", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["10", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["11", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["12", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["13", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["14", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["15", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["16", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["17", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["18", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["19", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["20", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["21", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["22", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["23", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["24", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["25", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["26", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
    ["27", "2023-10-01", "2023-10-05", "Поставщик 1", "Иванов Иван", "Доставлен"],
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
          <Text style={{fontSize: 18, fontWeight: "semibold", color: "white"}}> + Создать новый заказ</Text>
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
            <Text style={styles.modalTextHeader}>Создание нового заказа</Text>
            {/* Кнопка для закрытия модального окна */}
            <TouchableOpacity onPress={closeModal}>
              <Icon name="close" color="#002329"/>
            </TouchableOpacity>
            </View>
            {/* Пример поля ввода для нового заказа */}
            <Text style={styles.modalText}>ФИО сотрудника:</Text>
            <TextInput style={styles.input} placeholder="Введите ФИО сотрудника"/>
            <Text style={styles.modalText}>Дата заказа:</Text>
            <TextInput style={styles.input} placeholder="Выберите дату"/>
            <Text style={styles.modalText}>Организация поставщика:</Text>
            <SelectList data={post}   
               whatWithSelected={value => setSelected(value)}
               maxHeightList={200}
               containerStyle={styles.containerStyle}
               containerDataStyle={styles.containerDataStyle}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
            />
            <Text style={styles.modalText}>Статус заказа:</Text>
            <SelectList data={status}   
               whatWithSelected={value => setSelected(value)}
               maxHeightList={200}
               containerStyle={styles.containerStyle}
               containerDataStyle={styles.containerDataStyle}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
            />
            <Text style={styles.modalText1}>Введите данные о товаре(название, стоимость, количество):</Text>
            <View style={styles.modalTovarPlus}>
            <SelectList data={post}   
               whatWithSelected={value => setSelected(value)}
               maxHeightList={200}
               containerStyle={styles.containerStyle1}
               containerDataStyle={styles.containerDataStyle1}
               infoFontStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
               containerFontsStyle={{ fontSize: 18, fontWeight: "semibold", color: 'black' }}
            />
            <TextInput style={styles.input1}/>
            <TextInput style={styles.input1}/>
            </View>
            <TouchableOpacity style={{paddingTop: 30, paddingLeft: 23}}>
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


