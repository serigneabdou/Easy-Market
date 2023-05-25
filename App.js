import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/components/naviation/Navigator';
//import { Image, StyleSheet, Text, View } from 'react-native';
//import Category from './src/screens/Category';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import imageCat from './assets/cat1.png'

export default function App() {
  return (
    <View style={styles.container}>

      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10
  }
});
