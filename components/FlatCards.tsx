import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style = {[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container :{
        display:'flex',
        flexDirection:'row',
        padding:2,
    },
    card :{ 
        width:100,
        height:100,
        borderRadius:4,
        margin: 8,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    cardOne: {
        backgroundColor:'red',
    },
    cardTwo: {
        backgroundColor:'blue',
    },
    cardThree: {
        backgroundColor:'green',
    },
})