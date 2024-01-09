import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SIZES } from '../../../constants'
import ProductCardView from '../productCardView'
import styles from './productRow.style'
styles

const ProductRow = () => {
    const products = [1,2,3,4]

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCardView/>}
        horizontal={true}
        contentContainerStyle={{columnGap: SIZES.medium}}
      />
    </View>
  )
}

export default ProductRow