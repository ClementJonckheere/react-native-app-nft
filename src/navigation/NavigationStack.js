import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../components/Details';
import HomeScreen from '../views/HomeScreen';
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Explore Nfts' }} style={styles.home}/>
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
    )
}

export default NavigationStack;

const styles = StyleSheet.create({
    home: {
        height:100,
        width: '100%',
        backgroundColor: '#8A2BE2'
    }
})