import { View, Text, Image } from 'react-native'
import React from 'react'
import location from '../../../assets/location.jpg'

export default function Header() {
  return (
    <View>
    <Image source={location}/>
    </View>
  )
}