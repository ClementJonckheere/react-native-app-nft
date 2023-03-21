import { View, Text, StyleSheet } from "react-native"

const Details = () => { 
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Details</Text>
            </View>
        </View>
    )
}
export default Details;

const styles = StyleSheet.create({
    container: {
        flex:1,
        with: '100%'
    },
    title: {
        fontSize:22,
    }
})