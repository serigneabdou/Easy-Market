import { Text } from "react-native"
import ProductCardItem from "../components/ProductCardItem"
import ResourceDataMap from "../components/ResourceDataMap"
import CategoryListItem from "../components/CategoryListItem"
import image from '../../assets/cat1.png'

const Category = () => {
    return (
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
    )
}

export default Category