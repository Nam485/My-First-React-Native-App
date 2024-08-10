import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]}>
            <Text>Me</Text>
        </View>
        <View style = {[styles.card, styles.cardThree]}>
            <Text>To</Text>
        </View>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]}>
            <Text>More</Text>
        </View>
        <View style = {[styles.card, styles.cardThree]}>
            <Text>...</Text>
        </View>
      </ScrollView>
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
        padding:8,
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