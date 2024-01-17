import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import ProductCardView from '../productCardView'
import styles from './productRow.style'
import useFetch from '../../../hook/useFetch'
styles

const ProductRow = () => {
    const {data, loading, error} = useFetch("/api/products/")
    const products = [1,2,3,4]

  return (
    <View style={styles.container}>
      {
        loading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
          ) : error ? (
            <Text>Opps!, something went wrong :{'('}</Text>
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item._id}
              renderItem={({item}) => <ProductCardView item={item}/>}
              horizontal={true}
              contentContainerStyle={{columnGap: SIZES.medium}}
            />
          )
      }
    </View>
  )
}

export default ProductRow