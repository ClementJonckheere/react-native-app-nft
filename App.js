import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';


export default function App() {
  return (
    <>

      <StatusBar />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </>
  );
}

