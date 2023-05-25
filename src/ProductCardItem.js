import { Text, Image } from "react-native"

const ProductCardItem = ({ product }) => {
    const { image, name, price } = product
    return (
        <Text>
            <Image source={require(image)} />
            <Text>{name}</Text>
            <Button
                onPress={onPressLearnMore}
                title="Acheter"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </Text>
    )
}

export default ProductCardItem