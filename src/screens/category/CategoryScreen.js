import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Category from '../Category'
import Input from '../../components/InputBox/Input'
import ResourceDataMap from '../../components/ResourceDataMap'
import CategoryListItem from '../../components/CategoryListItem'
import image from '../../../assets/cat1.png'
import { globalStyle } from '../../style/globalStyle'

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>CategoryScreen</Text> */}
      <Input />
      <View style={styles.cardContainer}>
        <ResourceDataMap
          resourceItem={CategoryListItem}
          resourceName="category"
          resourceData={[
            { categoryName: 'cat1', image: image },
            { categoryName: 'cat2', image: image },
            { categoryName: 'cat3', image: image },
            { categoryName: 'cat4', image: image }
          ]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: globalStyle.padding.insidePadding
    // backgroundColor: 'yellow'
    // flexDirection: 'row',

  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15
  },
})

export default CategoryScreen