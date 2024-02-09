
import { Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ItemWordProps } from "./model";
import useStylesItemWord from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DISABLED_COLOR, YELLOW_COLOR } from "../../styles/colors";
import useViewModelItemWord from "./view.model";

export default function ItemWord({word, favorite, index}: ItemWordProps) {

    const { styles } = useStylesItemWord();

    const { navigateDetailsWord, insertItemFavorites, removeItemFavorites } = useViewModelItemWord({word, favorite, index});

    return (
        <TouchableHighlight 
            onPress={() => navigateDetailsWord()}
            activeOpacity={0.8}
            underlayColor={"#e0e0e0"}
            >
            <View style={styles.container}>
                <Text style={styles.word}>
                    {word}
                </Text>
                <TouchableWithoutFeedback onPress={() => {
                    if (favorite)
                        removeItemFavorites({
                            index,
                            word
                        })
                    else
                        insertItemFavorites({
                            index,
                            word,
                        })
                }} >
                    <View style={styles.containerButtonFav}>
                        <Icon 
                            name='star' 
                            size={20}
                            solid={favorite}
                            color={favorite ? YELLOW_COLOR : DISABLED_COLOR}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableHighlight>
    )
}