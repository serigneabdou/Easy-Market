import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Category from './src/screens/Category';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imageCat from './assets/cat1.png'
import { globalStyle } from './src/style/globalStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Category />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.colors.primary
  }
});
