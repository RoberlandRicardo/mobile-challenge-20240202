import { FlatList, Text, View } from "react-native"
import { FavoritesNavProps } from "./model"
import Header from "../../../../components/Header";
import useStylesFavorites from "./styles";
import { useContext } from "react";
import { HomeContext } from "../../../../stores/homeContext";
import ItemWord from "../../../../components/ItemWord";

const Favorites: React.FC<FavoritesNavProps> = ({navigation, route}: FavoritesNavProps) => {
    
    const { styles } = useStylesFavorites();

    const {favorites} = useContext(HomeContext);

    return (
        <View style={styles.container} >
            <Header 
                title="Word Favorites"
            />
            <FlatList 
                data={favorites}
                renderItem={({item, index}) => {
                    return (
                        <ItemWord 
                            word={item.word}
                            favorite={true}
                            index={item.index} />
                    )
                }}
                
            />
        </View>
    )
}

export default Favorites;