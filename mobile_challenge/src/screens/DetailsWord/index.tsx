import { FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { DetailsWordNavProps } from "./model";
import Animated from "react-native-reanimated";
import useStylesDetailsWord from "./styles";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { FONT_COLOR } from "../../styles/colors";
import CustomButton from "../../components/CustomButton";
import Tts from "react-native-tts";
import useViewModelDetailsWord from "./view.model";

const DetailsWord: React.FC<DetailsWordNavProps> = ({navigation, route}: DetailsWordNavProps) => {

    const { word } = route.params;

    const { styles } = useStylesDetailsWord();

    const { showSwipeLeft, setShowSwipeLeft, animatedStylesSwipe } = useViewModelDetailsWord({navigation, route});

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={26} color={FONT_COLOR} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerWord}>
                <Text style={styles.word}>
                    {word.word}
                </Text>
                <Text style={styles.phonetic}>
                    {word.phonetic ? word.phonetic : "No phonetics found"}
                </Text>
                <TouchableWithoutFeedback onPress={() => {
                    Tts.speak(word.word);
                }} >
                    <View style={styles.containerButtonIcon}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: 34, height: 34,}} >
                            <Icon name="play" size={26} color={FONT_COLOR} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.containerMeanings}>
                <FlatList 
                    contentContainerStyle={{flexGrow: 1}}
                    data={word.meanings} 
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={() => setShowSwipeLeft(false)}
                    renderItem={({item, index}) => {
                        return (
                            <View style={styles.containerItemMeaning}>
                                <Text style={styles.titleMeanings} >{`Meaning #${index + 1}`}</Text>
                                <View style={styles.containerTypeWord}>
                                    <View style={styles.dot} />
                                    <Text style={styles.typeWord}>{item.partOfSpeech + ':'}</Text>
                                </View>
                                <Text numberOfLines={5} style={styles.definition} >{item.definitions[0].definition}</Text>                            
                                {showSwipeLeft && word.meanings.length > 1 &&
                                    <Animated.View style={[
                                            styles.swipeLeft,
                                            animatedStylesSwipe
                                        ]} >
                                        <Text style={styles.swipeLeftText}>
                                            swipe
                                        </Text>
                                        <Icon name="play" size={8} color={FONT_COLOR} />
                                        <Icon name="play" size={8} color={FONT_COLOR} />
                                        <Icon name="play" size={8} color={FONT_COLOR} />
                                    </Animated.View>
                                }
                            </View>
                        )
                    }}
                />
            </View>
            <View style={styles.containerActions}>
                <CustomButton onPress={() => {}}>
                    <Text style={styles.textButton}>Previous</Text>
                </CustomButton>
                <CustomButton onPress={() => {}}>
                    <Text style={styles.textButton}>Next</Text>
                </CustomButton>
            </View>
        </View>
    )
};

export default DetailsWord;