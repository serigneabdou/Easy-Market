import React from 'react'
import { Dimensions, StyleSheet, View  , Header, Text} from 'react-native'

function CardProduct() {
  return (
    <View style = {styles.cardContainer}>
        {/* <Header>
            <Text>hELLO Word</Text>
        </Header> */}
    </View>
  )
}


const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    cardContainer : {
        width : deviceWidth ,
        backgroundColor : "#ffffff"
    }
})


export default CardProduct
