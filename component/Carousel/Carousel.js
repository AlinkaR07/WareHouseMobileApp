import React, {useRef} from "react";
import { View } from "react-native";
import CarouselComp from 'react-native-snap-carousel';
import CarouselItem, {SLIDER_WIDTH, ITEM_WIDTH} from "./CarouselItem";
import CarouselData from "./CarouselData";
import ViewPropTypes from 'deprecated-react-native-prop-types';

export const Carousel = () => {
  const isCarousel = useRef(null);

  return(
    <View>
      <CarouselComp
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={CarouselData}
          renderItem={CarouselItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
      />
    </View>
  );
}
