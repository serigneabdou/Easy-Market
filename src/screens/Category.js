import { StyleSheet, Text, View } from "react-native"
import ResourceDataMap from "../components/ResourceDataMap"
import CategoryListItem from "../components/CategoryListItem"
import Input from "../components/InputBox/Input"

const Category = () => {
    return (
<<<<<<< HEAD
        <Text>
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
=======
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
>>>>>>> 5facc96cc596743767c1eb64821009fbff7a2a39
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