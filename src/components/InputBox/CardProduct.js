import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Header,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { globalStyle } from "../../style/globalStyle";
import Panier from '../../../assets/panier.png'

function CardProduct() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.containerStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/produit.jpg")}
        />
        <View style={styles.containerTextStyle}>
          <Text style={styles.titleStyle}>Cotton shirt Regular Fit</Text>
          <Text>500 FCFA</Text>
          <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Acheter</Text>
          </TouchableOpacity>
            <Image style={styles.ImagePanier} source={Panier} />
          </View>
        </View>
      </View>
      <View style={styles.containerStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/produit.jpg")}
        />
        <View style={styles.containerTextStyle}>
          <Text style={styles.titleStyle}>Cotton shirt Regular Fit</Text>
          <Text>500 FCFA</Text>
          <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Acheter</Text>
          </TouchableOpacity>
            <Image style={styles.ImagePanier} source={Panier} />
          </View>
        </View>
      </View>
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth,
    backgroundColor: "#ffffff",
    marginTop: 70,
    shadowColor: "rgba(229, 229, 229, 0.4)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerStyle: {
    width: "50%",
  },

  imageStyle: {
    height: 250,
    // width : deviceWidth - 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 0.9,
    width : "95%"
  },
  containerTextStyle: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight : 'bold',
    marginBottom : 12
  },
  containerButton : {
    flexDirection  : 'row',
    alignItems : 'center',
    justifyContent : "space-between",
    marginTop : 12
  },
  button: {
    alignItems: 'center',
    backgroundColor: globalStyle.colors.button,
    padding: 10,
    borderRadius : 10,
    width : "80%",
  },
  textButton : {
    color : 'white'
  },
//   ImagePanier : {
//   }
});

export default CardProduct;
