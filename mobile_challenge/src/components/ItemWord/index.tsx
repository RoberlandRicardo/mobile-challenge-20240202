
import { Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ItemWordProps } from "./model";
import useStylesItemWord from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DISABLED_COLOR, YELLOW_COLOR } from "../../styles/colors";
import useViewModelItemWord from "./view.model";
import Animated from "react-native-reanimated";
import { memo } from "react";

function ItemWord({word, favorite, index, date}: ItemWordProps) {

    const { styles } = useStylesItemWord();

    const { navigateDetailsWord, insertItemFavorites, removeItemFavorites, 
        runFavAnimation, animatedStylesFav, returnDate } = useViewModelItemWord({word, favorite, index});

    return (
        <TouchableHighlight 
            onPress={() => navigateDetailsWord({word, favorite, index})}
            activeOpacity={0.8}
            underlayColor={"#e0e0e0"}
            >
            <View style={styles.container}>
                <Text style={styles.word}>
                    {word}
                </Text>
                <TouchableWithoutFeedback onPress={() => {
                    runFavAnimation();
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
                    {date ?
                        <Text style={styles.dateAccess} >{returnDate(date)}</Text>
                    :
                    <Animated.View 
                        style={[
                            styles.containerButtonFav,
                            animatedStylesFav,
                        ]}>
                        <Icon 
                            name='star' 
                            size={20}
                            solid={favorite}
                            color={favorite ? YELLOW_COLOR : DISABLED_COLOR}
                        />
                    </Animated.View>}
                </TouchableWithoutFeedback>
            </View>
        </TouchableHighlight>
    )
}

export default memo(ItemWord);