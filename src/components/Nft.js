import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, Image, Pressable} from "react-native";


const Nft = ({ card }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Pressable onPress={() => navigation.navigate('Details', {card})}>
                    <Image
                    style={styles.img}
                    source={card.image}
                    />
                </Pressable>
            </View>
            <Text
                style={styles.name}>
                {card.name}
            </Text>
            <Text style={styles.price}>{card.price}</Text>
        </View>
    )
}
export default Nft;

const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        fontSize: 14,
        marginBottom:5,
        marginLeft:10
    },
    img: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    imgContainer: {
        margin: 10,
    },

    container: {
        flex:1
    },
    price: {
        fontWeight: '700',
        fontSize: 14,
        marginLeft:10
    }
})