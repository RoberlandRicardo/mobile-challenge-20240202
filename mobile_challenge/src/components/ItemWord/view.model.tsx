import { onValue, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { ItemWordProps } from "./model";
import useGetDetailsWord from "../../api/useGetDetailsWord";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PrivateScreensParams } from "../../routes/privateScreens";
import { HomeContext } from "../../screens/Home/stores/homeContext";

const useViewModelItemWord = ({word}: ItemWordProps) => {

    const { navigate } = useNavigation<NavigationProp<PrivateScreensParams>>();

    const { getDetailsWord } = useGetDetailsWord();

    const { insertItemHistory, insertItemFavorites, removeItemFavorites } = useContext(HomeContext);

    async function navigateDetailsWord() {
        const response = await getDetailsWord(word);

        if (!response) {

        } else if (response?.status >= 200 && response?.status < 300) {
            insertItemHistory(response.data[0]);
            navigate('DetailsWord', {
                word: response.data[0]
            });
        } else {

        }
    }

    return {
        navigateDetailsWord,
        insertItemFavorites,
        removeItemFavorites,
    }
};

export default useViewModelItemWord;