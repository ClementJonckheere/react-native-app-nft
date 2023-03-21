import { FlatList } from 'react-native';
import Nft from './Nft';

const NftList = ({ cards }) => (
  <FlatList
    data={cards}
    keyExtractor={(item, index) => String(index)}
    numColumns={2}
    renderItem={({ item }) => <Nft card={item} />}
  />
);

export default NftList;