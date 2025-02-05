import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetailScreen = () => {
  const {id} = useLocalSearchParams()

  return (
    <View>
      <Text>ProductDetailScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default ProductDetailScreen