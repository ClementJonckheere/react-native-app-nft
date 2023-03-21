import { View, Text, StyleSheet } from "react-native"

const HeaderNft = () => { 
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Explore NFTs</Text>
            </View>
        </View>
    )
}
export default HeaderNft;

const styles = StyleSheet.create({
    container: {
        height: 120,
        with: '100%',
        backgroundColor: '#C1C1C1',
        alignItems:"center",
        justifyContent: "center"
    },
    title:{
        fontWeight: '900',
        marginTop: 30,
        fontSize: 28,
    }
})