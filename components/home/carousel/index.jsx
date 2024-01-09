import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../../constants'

const Carousel = () => {
    const slides = [
        "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
        "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
        "https://media.istockphoto.com/id/1034261806/photo/modern-scandinavian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=_j1omZD7JhpcuiPrHqRGOD7-KWWlvEQNIPFjqjO4E9E=",
    ]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle = {{
            borderRadius: 15,
            width: '93%',
            marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center'
    }
})