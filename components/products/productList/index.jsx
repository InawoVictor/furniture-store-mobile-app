import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import styles from './ProductList.style';
import useFetch from '../../../hook/useFetch'
import { COLORS, SIZES } from '../../../constants';
import ProductCardView from "../productCardView"

const ProductList = () => {
    const {loading, data, error} = useFetch("/api/products/")

  if(loading){
    return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        </View>
    )
  }

  if(error){
    // return (
    //     <View style={styles.loadingContainer}>
    //         <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
    //     </View>
    // )
    console.warn(error)
  }

  return (
    <View styles={styles.container}>
        <FlatList 
            data={data} 
            numColumns={2}          
            keyExtractor={(item) => item._id}
            renderItem={({item}) => ( 
                <ProductCardView item={item} />
            )}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={() =>(<View style={styles.separator} />)}
        />
    </View>
  )
}

export default ProductList