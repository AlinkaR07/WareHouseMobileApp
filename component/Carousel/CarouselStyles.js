import { StyleSheet} from 'react-native';
import {SLIDER_WIDTH, ITEM_WIDTH} from "./CarouselItem";

const styles = StyleSheet.create({
    viewCarouselItem: {
        backgroundColor: '#055C66',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 10,
        elevation: 7,
    },
    carouselImage: {
        width: ITEM_WIDTH,
        height: 300,
    },
    textHeader: {
        color: 'white',
        fontSize: 25,
        fontWeight: "semibold",
        paddingLeft: 100,
    },
  });

  export default styles;