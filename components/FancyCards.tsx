import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending picture</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image 
        source={{
            uri:'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',

        }}
        style = {styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}> A Bird</Text>
            <Text style={styles.cardLabel}>Jaipur</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, totam.</Text>
            <Text style={styles.cardFooter}>12 min ago</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 16,
      marginVertical: 16,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginHorizontal: 16,
      marginVertical: 8,
      overflow: 'hidden',
    },
    cardElevated: {
      elevation: 3, // For Android
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, // For iOS
      shadowOpacity: 0.3, // For iOS
      shadowRadius: 4, // For iOS
    },
    cardImage: {
      height: 180,
      width: '100%',
    },
    cardBody: {
      padding: 16,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 8,
    },
    cardLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: '#777',
      marginBottom: 4,
    },
    cardDescription: {
      fontSize: 14,
      color: '#555',
      marginBottom: 12,
    },
    cardFooter: {
      fontSize: 12,
      color: '#999',
    },
  });
  