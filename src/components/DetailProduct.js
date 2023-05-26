import React from 'react'
import {View , StyleSheet , Image, Dimensions , Text , TouchableOpacity} from 'react-native'
import { globalStyle } from '../style/globalStyle';
import { MaterialIcons } from '@expo/vector-icons';
import Panier from '../../assets/panier.png'

export default function DetailProduct() {
  return (
    <View>
        <View style={styles.containerImage}>
            <Image style={styles.Image} source={require('../../assets/produit.jpg')}  />
        </View>
        <View style={styles.containerText}>
            <Text>Cotton shirt Regular Fit</Text>
            <Text style={styles.Title}>CATEGORIES / Hommes </Text>
            <Text style={styles.prix}>5.000 FCFA</Text>
            <Text style={styles.description}>Description</Text>
            <Text>Lorem ipsum dolor sit amet consectetur. Cursus sit sem quis commodo volutpat aenean. Vitae habitasse sit sit suscipit rhoncus ac. Neque nisi enim diam facilisis a sit dictum. Habitant enim accumsan condimentum nisl sagittis et sed mauris.</Text>
            <View style={styles.containerButton}>
          <MaterialIcons style={styles.ShoppingCart} name="shopping-cart" size={24} color="black" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Acheter</Text>
          </TouchableOpacity>
            {/* <Image style={styles.ImagePanier} source={Panier} /> */}
          </View>
        </View>
    </View>
  )
}


const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
    containerImage : {
        width : deviceWidth,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: globalStyle.colors.primary,
    },
    Image : {
        width : deviceWidth,
        height : deviceHeight - 450
    },
    containerText : {
        padding : globalStyle.padding.insidePadding
    },
    Title : {
        fontSize : globalStyle.fonts.titleFontSize,
        fontWeight : globalStyle.fonts.titleFontWeight ,
        paddingVertical : 11
    },
    prix : {
        // justifyContent : 'flex-end',
        textAlign : 'right',
        fontWeight : globalStyle.fonts.titleFontWeight,
        fontSize : 20 ,
        marginTop : 30,
        marginBottom : 24
    },
    description : {
      fontWeight : globalStyle.fonts.titleFontWeight,
      marginBottom : 11
    },
    containerButton : {
        flexDirection  : 'row',
        alignItems : 'center',
        justifyContent : "space-between",
        marginTop : 40 ,
        // marginBottom : 40
      },
      button: {
        alignItems: 'center',
        backgroundColor: globalStyle.colors.button,
        padding: 20,
        borderRadius : 10,
        width : "80%",
      },
      textButton : {
        color : 'white'
      },
      ShoppingCart : {
        padding : 15,
        borderWidth : 1,
        borderRadius : 10
      }
})
