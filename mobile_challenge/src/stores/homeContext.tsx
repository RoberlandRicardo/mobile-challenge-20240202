import React, { useEffect, useMemo, useState } from "react";
import { onValue, ref,  } from "firebase/database";
import { WordDetails, WordEntitie, WordFavorite } from "../@types/entities";
import * as data from '../database/words_dictionary_parsed.json';
import { getHistoricoDB, insertHistoricoDB } from "../database/controller/controllerHistorico";
import useGetDetailsWord from "../api/useGetDetailsWord";
import { ItemWordProps } from "../components/ItemWord/model";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PrivateScreensParams } from "../routes/privateScreens";
import { ToastAndroid } from "react-native";

interface HomeContextProps  {
    favorites: Array<WordFavorite>,
    insertItemFavorites: (arg: WordFavorite) => any,
    removeItemFavorites: (arg: WordFavorite) => any,
    history: Array<WordDetails>,
    insertItemHistory: (arg: WordDetails) => any,
    showedWords: Array<WordEntitie>,
    setIndexPagination: React.Dispatch<React.SetStateAction<number>>
    navigateDetailsWord:  (arg: ItemWordProps) => any,
}

interface ProviderProps {
    children: React.ReactNode
}

export const HomeContext = React.createContext<HomeContextProps >({
    favorites: [],
    insertItemFavorites: (arg: WordFavorite) => {},
    removeItemFavorites: (arg: WordFavorite) => {},
    history: [],
    insertItemHistory: (arg: WordDetails) => {},
    showedWords: [],
    setIndexPagination: () => {},
    navigateDetailsWord: (arg: ItemWordProps) => {},
});

function HomeContextProvider({children}: ProviderProps) {

    const { getDetailsWord } = useGetDetailsWord();
    
    const { navigate } = useNavigation<NavigationProp<PrivateScreensParams>>();

    const [favorites, setFavorites] = useState<Array<WordFavorite>>([]);
    const [history, setHistory] = useState<Array<WordDetails>>([]);
    const [showedWords, setShowedWords] = useState<Array<WordEntitie>>([]);
    const [indexPagination, setIndexPagination] = useState<number>(0);

    useEffect(() => {
        restoreHistory();
    }, [])

    useEffect(() => {
        updateListWords();

    }, [indexPagination])

    async function restoreHistory() {
        let newHistorico = await getHistoricoDB();
        let sortedHistory = newHistorico.sort((a, b) => {
            if (!a.dateAccess || !b.dateAccess) return 0;
            if (a.dateAccess?.getTime() > b.dateAccess?.getTime()) {
                return -1;
            } else {
                return 1;
            }
        })
        setHistory(sortedHistory);
    }

    function updateListWords() {
        let auxShowedWord:Array<WordEntitie> = [];
        
        data.allWords[indexPagination].forEach(element => {
            auxShowedWord.push({
                word: element,
                favorite: false,
            })
        });
        
        favorites.forEach((fav) => {
            if (auxShowedWord.length + indexPagination * 50 > fav.index)
                auxShowedWord[fav.index].favorite = true;
        })

        setShowedWords([
            ...showedWords,
            ...auxShowedWord
        ])
    }

    function insertItemFavorites(fav: WordFavorite) {
        if (showedWords.length > fav.index)
            showedWords[fav.index] = {
                word: fav.word,
                favorite: true,
            }

        favorites.push(fav);
        setFavorites([...favorites])
        
    }

    function removeItemFavorites(rmFav: WordFavorite) {
        let index = favorites.findIndex((fav) => fav.word == rmFav.word);
        if (index == -1) return;
        if (showedWords.length > rmFav.index)
            showedWords[rmFav.index] = {
                word: rmFav.word,
                favorite: false,
            }

        favorites.splice(index, 1);
        setFavorites([...favorites])
        
    }
    
    function insertItemHistory(item: WordDetails) {
        item.dateAccess = new Date();
        let indexOldHist = history.findIndex((word) => word.word == item.word);
        if (indexOldHist != -1) {
            history.splice(indexOldHist, 1)
        };
        history.unshift(item);
        setHistory([...history])
        insertHistoricoDB(item);
    }

    async function navigateDetailsWord({word, favorite, index}: ItemWordProps) {

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
                word: {
                    ...response.data[0],
                    index: index,
                    favorite: favorite,
                }
            });
        } else {
            ToastAndroid.showWithGravity("Não encontramos uma definição para a palavra: " + word, 6000, ToastAndroid.CENTER,)
        }
    }

    const valueProvider = {
        favorites,
        insertItemFavorites,
        removeItemFavorites,
        history,
        insertItemHistory,
        showedWords,
        setIndexPagination,
        navigateDetailsWord,
    }

    return (
        <HomeContext.Provider value={valueProvider} >
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;