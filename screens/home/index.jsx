import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.styles'

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Home</Text>
    </SafeAreaView>
  )
}

export default Home
