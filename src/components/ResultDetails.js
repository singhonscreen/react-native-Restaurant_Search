import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const ResultDetails = ({result}) => {
    return (
        <View style={styles.imageCard}>
        <Image style={styles.imageStyle} source = { { uri : result.image_url} } />
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} stars, {result.review_count} reviews</Text>
        </View>
    )
}

export default ResultDetails

const styles = StyleSheet.create({
    imageStyle:{
        width:250,
        height:120,
        borderRadius:4,
    },
    name:{
        fontWeight:'bold',
    },
    imageCard:{
        // paddingHorizontal:4,
        marginLeft:15,
        marginBottom:5
    }
})
