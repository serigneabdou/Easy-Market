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
                accessibilityLabel="Acheter un produit"
            />
        </Text>
    )
}

export default ProductCardItem