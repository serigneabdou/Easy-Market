import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { globalStyle } from '../style/globalStyle'

const CategoryListItem = ({ category }) => {
    const { categoryName, image, number } = category
    return (
        <TouchableOpacity>
            <View style={[styles.containerCat, styles.shadowProp]}>
                <Image style={styles.image} source={image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {categoryName}
                    </Text>
                    <Text style={styles.number}>202</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryListItem

const styles = StyleSheet.create({
    containerCat: {
        width: 150,
        height: 200,
        marginBottom: 25,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        borderRadius: 10,
    },

    image: {
        width: '100%',
        height: '70%'
    },

    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontWeight: 'bold',
        color: '#3A3A3A',
        fontSize: globalStyle.fonts.titleFontSize
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    number: {
        backgroundColor: '#D9D9D9',
        color: '#3A3A3A',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 50
    }
});