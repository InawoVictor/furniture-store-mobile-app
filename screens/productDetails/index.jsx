import { Image, Text, ScrollView, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import styles from './ProductDetails.style'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants'
import { useRoute } from '@react-navigation/native'

const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;

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
          source={{uri: item.imageUrl}}
        />
          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.priceWrapper}>
                <Text style={styles.price}>${item.price}</Text>
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
                <Text style={styles.descText}>{item.description}
                </Text>
            </View>

            <View style={{marginBottom: SIZES.small}}>
              <View style={styles.location}>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons name='location-outline' size={20} />
                  <Text> {item.product_location} </Text>
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