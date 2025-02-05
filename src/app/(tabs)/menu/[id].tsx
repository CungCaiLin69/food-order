import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailScreen = () => {
  const {id} = useLocalSearchParams()

  return (
    <View>
      <Stack.Screen options={{ title: 'Details: ' + id }} />
      <Text>ProductDetailScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default ProductDetailScreen