import { onValue, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { ItemWordProps } from "./model";
import useGetDetailsWord from "../../api/useGetDetailsWord";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PrivateScreensParams } from "../../routes/privateScreens";
import { HomeContext } from "../../stores/homeContext";
import { useAnimatedStyle, useSharedValue, withDecay, withSequence, withSpring, withTiming } from "react-native-reanimated";
import { ToastAndroid } from "react-native";

const useViewModelItemWord = ({word, favorite, index}: ItemWordProps) => {

    const { insertItemFavorites, removeItemFavorites, navigateDetailsWord } = useContext(HomeContext);

    const favAnimationScale = useSharedValue(1);
    const favAnimationRotate = useSharedValue(0);

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

    function returnDate(date: Date) {


        let day = '';
        if (date.getDate() < 10) {
            day = '0' + date.getDate()
        } else {
            day = '' + date.getDate()
        }

        let month = '';
        if ((date.getMonth()+1) < 10) {
            month = '0' + (date.getMonth()+1)
        } else {
            month = '' + (date.getMonth()+1)
        }

        let hour = '';
        if ((date.getHours()) < 10) {
            hour = '0' + (date.getHours())
        } else {
            hour = '' + (date.getHours())
        }

        let minute = '';
        if ((date.getMinutes()) < 10) {
            minute = '0' + (date.getMinutes())
        } else {
            minute = '' + (date.getMinutes())
        }

        let stringReturn = day + '/' + month + '/' + date.getFullYear() + ' '
            + hour + 'h' + minute;
        return stringReturn
    }

    return {
        navigateDetailsWord,
        insertItemFavorites,
        removeItemFavorites,
        runFavAnimation,
        animatedStylesFav,
        returnDate,
    }
};

export default useViewModelItemWord;