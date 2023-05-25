import { StyleSheet, Text, View } from "react-native"
import ResourceDataMap from "../components/ResourceDataMap"
import CategoryListItem from "../components/CategoryListItem"
import Input from "../components/InputBox/Input"

const Category = () => {
    return (
        <View>
            <Input />
            <Text style={styles.container}>
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
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,

    }
})

export default Category