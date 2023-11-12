import React from "react";
import { View, Dimensions, Image, Text } from "react-native";
import styles from '../Carousel/CarouselStyles'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselItem = ({ item, index}) => {
    return(
        <View style={styles.viewCarouselItem}>
            <Image
                source={{uri: item.imgUrl}}
                style={styles.carouselImage}
            />
            <Text style={styles.textHeader}>Наши будни</Text>
        </View>
    )
}

export default CarouselItem