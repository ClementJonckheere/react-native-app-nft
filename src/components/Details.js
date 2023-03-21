import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const Details = () => {
    const route = useRoute() 
    const {card} = route.params;
    return (
        <>
            <View>
                <Image
                style={styles.img}
                source={card.image}
                />
            </View>
            <Text>{card.collection}</Text>
            <Text style={styles.title}>{card.name}</Text>
            <Text>{card.description}</Text>
        </>
    )
}
export default Details;

const styles = StyleSheet.create({
    title: {
        fontSize:22,
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',

    }
})