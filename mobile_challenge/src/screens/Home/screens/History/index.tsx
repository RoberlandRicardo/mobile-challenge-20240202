import { FlatList, Text, View } from "react-native"
import { HistoryNavProps } from "./model"
import Header from "../../../../components/Header";
import useStylesHistory from "./styles";
import { useContext } from "react";
import { HomeContext } from "../../../../stores/homeContext";
import ItemWord from "../../../../components/ItemWord";

const History: React.FC<HistoryNavProps> = ({navigation, route}: HistoryNavProps) => {

    const { styles } = useStylesHistory();

    const { history } = useContext(HomeContext);
    
    return (
        <View style={styles.container}>
            <Header 
                title="Word History"
            />
            <FlatList 
                data={history}
                renderItem={({item, index}) => {
                    return (
                        <ItemWord 
                            word={item.word}
                            favorite={false}
                            index={index}
                            date={item.dateAccess} />
                    )
                }}
                
            />
        </View>
    )
}

export default History;