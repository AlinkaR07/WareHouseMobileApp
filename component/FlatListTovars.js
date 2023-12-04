import React from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from '../stylesScreen/TovarStyle';

const FlatListTovars = ({ tovars, setTovars, searchText, setEditingItem, setModalEditVisible, setEditedFields }) => {

    const startEditingItem = (item) => {
        setEditingItem(item);
        setModalEditVisible(true);
        setEditedFields({
          codTovara: item.codTovara,
          name: item.name,
          category: item.category,
          dateExpiration: item.dateExpiration,
          price: item.price,
          count: item.count,
        });
      };
     
      const deleteItem = async (cod) => {
       try {
         const response = await fetch(`http://192.168.0.162:5050/api/Tovar/${cod}`, {
           method: "DELETE",
         });
     
         if (response.ok) {
           const updatedTovar = tovars.filter((item) => item.codTovara !== cod);
           setTovars(updatedTovar);
         } else {
           console.error("Error deleting item1:", response.statusText);
         }
       } catch (error) {
         console.error("Error deleting item:", error);
       }
      };

  return (
    <View style={styles.flatlist}>
      <FlatList
        keyExtractor={(item) => item.codTovara}
        data={tovars.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))}
        renderItem={({ item }) => (
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: '80%' }}>
              <TouchableOpacity style={{ paddingTop: 30 }} onPress={() => startEditingItem(item)}>
                <View style={styles.buttonFunction}>
                  <Icon name="edit" color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingTop: 30, paddingLeft: '15%' }} onPress={() => deleteItem(item.codTovara)}>
                <View style={styles.buttonFunction}>
                  <Icon name="delete" color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.listId}>
              Код товара {item.codTovara}{'\n'}{'\n'}
              <Text style={styles.list}>Название: {item.name}{'\n'}</Text>
              <Text style={styles.list}>Категория: {item.category}{'\n'}</Text>
              <Text style={styles.list}>Дата изготовления: {item.dateExpiration}{'\n'}</Text>
              <Text style={styles.list}>Цена: {item.price} рублей{'\n'}</Text>
              <Text style={styles.list}>Количество: {item.count}</Text>
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlatListTovars;