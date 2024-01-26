import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyles} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyles}>{result.name}</Text>
            <View style={styles.viewStyles}>
                <Text>{result.rating} Stars, </Text>
                <Text>{result.review_count} Reviews</Text>
            </View>
        </View>
    )
}

export default ResultDetail

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },  
    imageStyles: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyles: {
        fontWeight: 'bold',
    },
    viewStyles: {
        display: 'flex',
        flexDirection: 'row'
    }
})