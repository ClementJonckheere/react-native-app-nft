import { StatusBar } from 'expo-status-bar';
import HeaderNft from './src/components/HeaderNft';
import TitileCollection from './src/components/TitleCollection';
import HomeScreen from './src/views/HomeScreen';


export default function App() {
  return (
    <>
      <StatusBar />
      <HeaderNft />
      <TitileCollection />
      <HomeScreen />
    </>
  );
}

