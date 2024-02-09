import { onValue, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { ItemWordProps } from "./model";
import useGetDetailsWord from "../../api/useGetDetailsWord";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PrivateScreensParams } from "../../routes/privateScreens";
import { HomeContext } from "../../screens/Home/stores/homeContext";
import { useAnimatedStyle, useSharedValue, withDecay, withSequence, withSpring, withTiming } from "react-native-reanimated";
import { ToastAndroid } from "react-native";

const useViewModelItemWord = ({word, favorite, index}: ItemWordProps) => {

    const { navigate } = useNavigation<NavigationProp<PrivateScreensParams>>();

    const { getDetailsWord } = useGetDetailsWord();

    const { insertItemHistory, insertItemFavorites, removeItemFavorites, history } = useContext(HomeContext);

    const favAnimationScale = useSharedValue(1);
    const favAnimationRotate = useSharedValue(0);

    async function navigateDetailsWord() {

        let indexOldHist =  history.findIndex((historyWord) => historyWord.word == word)
        if (indexOldHist != -1) {
            
            let auxHistority = {...history[indexOldHist]};
            auxHistority.dateAccess = undefined;
            insertItemHistory(auxHistority);
            navigate('DetailsWord', {
                word: auxHistority
            });
        }

        const response = await getDetailsWord(word);

        if (!response) {

        } else if (response?.status >= 200 && response?.status < 300) {
            insertItemHistory({
                ...response.data[0],
                index: index,
                favorite: favorite,
            });
            navigate('DetailsWord', {
                word: response.data[0]
            });
        } else {
            ToastAndroid.showWithGravity("Não encontramos uma definição para essa palavra", 6000, ToastAndroid.CENTER,)
        }
    }

    function runFavAnimation() {
        favAnimationScale.value = withSequence(
            withTiming(1.7, {duration: 500}),
            withTiming(1, {duration: 500})
        )
        favAnimationRotate.value = withSequence(
            withTiming(45, {duration: 500}),
            withTiming(-35, {duration: 600}),
            withTiming(10, {duration: 400}),
            withTiming(0, {duration: 500})
        )
    }

    const animatedStylesFav = useAnimatedStyle(() => (
        {
            transform: [
                {scale: favAnimationScale.value},
                {rotateZ: `${favAnimationRotate.value}deg`}
            ]
        }
    ));

    return {
        navigateDetailsWord,
        insertItemFavorites,
        removeItemFavorites,
        runFavAnimation,
        animatedStylesFav,
    }
};

export default useViewModelItemWord;