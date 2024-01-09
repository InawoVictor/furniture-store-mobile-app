import { Image, Text, ScrollView, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import styles from './ProductDetails.style'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants'

const ProductDetails = ({navigation}) => {
  const [count, setCount] = useState(1)

  const increement = () => {
    setCount(count + 1)
  }
  const decreement = () => {
    if(count > 1) setCount(count - 1)
  }

  return (
    <ScrollView style={{backgroundColor: COLORS.lightWhite,}}>
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back-circle' size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='heart' size={30} color={COLORS.primary}/>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.Image} 
          source={{uri:  "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg"}}
        />
          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>Product</Text>
              <View style={styles.priceWrapper}>
                <Text style={styles.price}>$100.00</Text>
              </View>
            </View>
            <View style={styles.ratingRow}>
              <View style={styles.rating}>
                {
                  [1,2,3,4,5].map((index) => (
                    <Ionicons key={index} name='star' size={22} color="gold" />
                  ))
                }
                <Text style={styles.ratingText}> (4.9)</Text>
              </View>
              <View style={styles.rating}>
                <TouchableOpacity onPress={decreement}>
                  <SimpleLineIcons name='minus' size={20} />
                </TouchableOpacity>
                <Text style={[styles.ratingText, {fontSize: 18}]}> {count} </Text>
                <TouchableOpacity onPress={increement}>
                  <SimpleLineIcons name='plus' size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>Description</Text>
                <Text style={styles.descText}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing 
                  elit.que Donec sodales sagittis magna.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.que
                  Donec sodales sagittis magna.
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </Text>
            </View>

            <View style={{marginBottom: SIZES.small}}>
              <View style={styles.location}>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons name='location-outline' size={20} />
                  <Text> Ogoja </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                  <Text> Free Delivery </Text>
                </View>
              </View>
            </View>

            <View style={styles.cartRow}>
              <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                <Text style={styles.cartText}>Buy Now</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addCart}>
                <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
              </TouchableOpacity>
            </View>

          </View>
      </View>
    </ScrollView>
  )
}

export default ProductDetails