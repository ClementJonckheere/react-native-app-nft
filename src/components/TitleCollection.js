import { View, Text, StyleSheet } from "react-native";

const TitleCollection = () => { 
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Hot Collection</Text>
            </View>
        </View>
    )
}
export default TitleCollection;

const styles = StyleSheet.create({
    container: {
        height: 70,
        with: '100%',
    },
    title:{
        fontWeight: '900',
        marginTop: 30,
        marginLeft:10,
        fontSize: 28,
    }
})