import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './productCardView'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://media.istockphoto.com/id/1034261806/photo/modern-scandinavian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=_j1omZD7JhpcuiPrHqRGOD7-KWWlvEQNIPFjqjO4E9E="
                    }}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Some beautiful furnitures</Text>
                <Text style={styles.supplier}>Some beautiful furnitures</Text>
                <Text style={styles.price}>$200</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView;