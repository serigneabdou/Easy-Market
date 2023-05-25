import { Text } from "react-native"
import ProductCardItem from "../components/ProductCardItem"
import ResourceDataMap from "../components/ResourceDataMap"
import CategoryListItem from "../components/CategoryListItem"
import image from '../../assets/cat1.png'
import Input from "../components/InputBox/Input"

const Category = () => {
    return (
        <Text>
            <Input />
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