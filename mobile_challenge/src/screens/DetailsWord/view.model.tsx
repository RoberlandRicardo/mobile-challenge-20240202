import { useEffect, useRef, useState } from "react"
import { DetailsWordNavProps } from "./model"
import { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import Tts from "react-native-tts";

const useViewModelDetailsWord = ({}: DetailsWordNavProps) => {

    const animationSwipe = useSharedValue(0);

    const [showSwipeLeft, setShowSwipeLeft] = useState<boolean>(true);

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
        animatedStylesSwipe
    }
}

export default useViewModelDetailsWord;