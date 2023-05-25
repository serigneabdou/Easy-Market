import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Category from './src/alkaly/Category';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imageCat from './assets/cat1.png'
import { globalStyle } from './src/style/globalStyle';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity>
        <View style={[styles.containerCat, styles.shadowProp]}>
          <Image style={styles.image} source={imageCat} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {"text"}
            </Text>
            <Text style={styles.number}>202</Text>
          </View>
        </View>
      </TouchableOpacity> */}
<Category/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.colors.primary,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerCat: {
    maxWidth: 150,
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
