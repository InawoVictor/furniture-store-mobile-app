import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.styles'

import { Fontisto, Ionicons } from '@expo/vector-icons'
import Welcome from '../../components/home/welcome'
import Carousel from '../../components/home/carousel'
import Headings from '../../components/home/headings'
import ProductRow from '../../components/products/productRow'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24}/>

          <Text style={styles.location}>Calabar, Nigeria</Text>

          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={{height: "85%"}}>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow/>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home
