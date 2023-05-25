import { SafeAreaView, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const Input = () => {
  return (
    <SafeAreaView 
      style={styles.container}
    >
    <TextInput
      style={styles.input}
      placeholder='Recharcher ici'
    />
    <AntDesign style={styles.search} name="search1" size={24} color="black" />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    marginStart : 10,
    backgroundColor : 'transparent',
    width : '90%'
  },
  container: {
    marginVertical : 10,
    paddingHorizontal : 5,
    paddingVertical : 10,
    width : '90%',
    borderRadius : 10,
    flexDirection : 'row' ,
    justifyContent : 'space-between',
    backgroundColor: '#FFFFFF',
    backgroundColor: 'white',
    shadowColor: '#e5e5e5',
    shadowOffset: {
      width: 1,
      height: 5.94737,
    },
    shadowOpacity: 4.4,
    shadowRadius: 11.8947,
    elevation: 5,
  },
  search : {
    color : "#D9D9D9",
    marginEnd : 10,
  }
});

export default Input