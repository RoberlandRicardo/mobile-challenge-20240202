import { useContext, useEffect, useRef, useState } from "react"
import { DetailsWordNavProps } from "./model"
import { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import Tts from "react-native-tts";
import { HomeContext } from "../../stores/homeContext";

const useViewModelDetailsWord = ({route}: DetailsWordNavProps) => {

    const { index,favorite } = route.params.word;

    const animationSwipe = useSharedValue(0);

    const [showSwipeLeft, setShowSwipeLeft] = useState<boolean>(true);
    
    const { navigateDetailsWord, showedWords, } = useContext(HomeContext);

    useEffect(() => {
        Tts.setDefaultLanguage('en-IE');
        runAnimationSwipe();
    }, [])

    function runAnimationSwipe() {
        animationSwipe.value = withRepeat(
            withSequence(
                withTiming(10, {duration: 500}),
                withTiming(0, {duration: 500}),
            ), -1
        )
    }

    function navigatePrevious() {
        navigateDetailsWord({
            word: showedWords[index-1].word,
            index: index - 1,
            favorite: showedWords[index-1].favorite,
        });
    }

    function navigateNext() {
        navigateDetailsWord({
            word: showedWords[index+1].word,
            index: index + 1,
            favorite: showedWords[index+1].favorite,
        });
    }

    const animatedStylesSwipe = useAnimatedStyle(() => (
        {
            transform: [
                {translateX: animationSwipe.value},
            ]
        }
    ));

    return {
        showSwipeLeft,
        setShowSwipeLeft,
        animatedStylesSwipe,
        navigateNext,
        navigatePrevious
    }
}

export default useViewModelDetailsWord;