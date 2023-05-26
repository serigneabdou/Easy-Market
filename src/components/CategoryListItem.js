import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { globalStyle } from '../style/globalStyle'

const CategoryListItem = ({ category }) => {
    const { categoryName, image, number } = category
    const numCols = 4;

    // Change to the spacing for each item
    const spacing = '1.25rem';
    return (
        // <TouchableOpacity>
            <View style={[styles.containerCat, styles.shadowProp]}>
                <Image style={styles.image} source={image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {categoryName}
                    </Text>
                    <Text style={styles.number}>202</Text>
                </View>
            </View>
        // </TouchableOpacity>
    )
}

export default CategoryListItem

const styles = StyleSheet.create({
    containerCat: {
        flex: 1,
        minWidth: 150,
        height: 224,
        // margin: 10,
        backgroundColor: 'white',
        borderRadius: 19,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 2,
    },

    image: {
        borderRadius: 20 / 2,
        overflow: "hidden",
        borderWidth: 3,
        width: '100%',
        height: '70%'
    },

    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontWeight: 800,
        color: '#3A3A3A',
        fontSize: globalStyle.fonts.titleFontSize,
        marginBottom: 5
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
        borderRadius: 50,
        fontSize: 10
    }
});