import { FlatList, Text, View } from "react-native"
import { ListNavProps } from "./model"
import useStylesList from "./styles"
import useViewModelList from "./view.model";
import ItemWord from "../../../../components/ItemWord";
import Header from "../../../../components/Header";
import { useCallback, useContext } from "react";
import { HomeContext } from "../../../../stores/homeContext";

const List: React.FC<ListNavProps> = ({navigation, route}: ListNavProps) => {

    const { styles } = useStylesList();

    const {showedWords, setIndexPagination} = useContext(HomeContext);

    return (
        <View style={styles.container}>
            <Header 
                title="Word List"
            />
            <FlatList 
                data={showedWords}
                initialNumToRender={10}
                renderItem={({item, index}) => {
                    return (
                        <ItemWord 
                            word={item.word}
                            favorite={item.favorite}
                            index={index} />
                    )
                }}
                onEndReached={() => setIndexPagination(index => index+1)}
            />
        </View>
    )
}

export default List;