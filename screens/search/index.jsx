import { ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './search.style';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';
import SearchTiles from '../../components/products/searchTiles';


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const [searchResults, setSearchResults] = useState([])

  // const handleSearch =() => {
  //   const 
  // }

  const {data, error, loading, reFetch} = useFetch(`/api/products/search/${searchTerm}`)
  console.log(data)

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Ionicons name='camera-outline'size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput  
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="What are you looking for?"
            />
        </View>
        <View>
            <TouchableOpacity style={styles.searchBtn} onPress={() => reFetch()}>
                <Feather name='search' size={SIZES.large} color={COLORS.offwhite}/>
            </TouchableOpacity>
        </View>
      </View>

      {
        data.length === 0 ? (
          <View style={{flex: 1, }}>
            <Image source={require("../../assets/images/Pose23.png")}
              style={styles.searchImage}
            />
          </View>
        ): loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
          </View>
        ) : (
          <View style={{height: "83%"}}>
            <FlatList
              data={data}
              keyExtractor={(item)=> item._id}
              renderItem={({item}) => <SearchTiles item={item} />}
              style={{marginHorizontal: 12}}
            />
          </View>
        )
      }
    </SafeAreaView>
  )
}

export default Search
