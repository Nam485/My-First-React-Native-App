import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ActionCard() {
    function openWebsite(WebsiteLink: string){
        Linking.openURL(WebsiteLink)
    }
  return (
    <View>
        <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card,styles.elevatedCard]}>
            <View style={styles.headingContainer} >
                <Text style={styles.headerText} >
                    What's new in javascript 21 - ES
                </Text>
            </View>
            <Image 
            source={{
                uri:'data:image/jpeg;base64,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'
            }}
            style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={2} style={styles.bodyText} >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aliquam perspiciatis expedita illum ipsum sapiente, aspernatur reprehenderit rem veritatis pariatur?
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/image')}>
                    <Text style={styles.socialLink}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/image')}>
                    <Text style={styles.socialLink}>Follow Me</Text>
                </TouchableOpacity>
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
      borderRadius: 8,
      marginHorizontal: 16,
      marginVertical: 8,
      overflow: 'hidden',
      backgroundColor:'#fff'
    },
    elevatedCard: {
      elevation: 3, // For Android
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, // For iOS
      shadowOpacity: 0.3, // For iOS
      shadowRadius: 4, // For iOS
    },
    headingContainer: {
      padding: 16,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#495057',
    },
    bodyText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#495057',
    },
    cardImage: {
      height: 180,
      width: '100%',
    },
    bodyContainer: {
      padding:16,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      borderTopWidth: 1,
      borderColor: '#e9ecef',
    },
    socialLink: {
      color: '#007bff',
      fontWeight: '600',
      fontSize: 14,
    },
  });
  