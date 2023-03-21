import { View, StyleSheet, Text} from "react-native";

import NftList from "../components/NftList";
import {data} from './../data/data';

const HomeScreen = () => {  
    return (
            <View style={styles.card}>
                <NftList cards={data}/>
            </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        flex:1,
        height: 30,
        width: '100%'
    },
    card: {
        flex:1,
        },

})