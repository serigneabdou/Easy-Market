import { StatusBar } from 'expo-status-bar';
// import Input from './src/components/InputBox/Input';
import CardProduct from './src/components/InputBox/CardProduct';
// import Category from './src/screens/Category';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import imageCat from './assets/cat1.png'
import { globalStyle } from './src/style/globalStyle';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/components/naviation/Navigator';
//import { Image, StyleSheet, Text, View } from 'react-native';
//import Category from './src/screens/Category';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import imageCat"rdfgv from './assets/cat1.png'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Input /> */}
      <CardProduct />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Category /> */}
      {/* <StatusBar style="auto" /> */}

      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal : 10,
    flex: 1,
    alignItems : 'center',
    backgroundColor: globalStyle.colors.primary
    // paddingHorizontal: 10
  }
});
