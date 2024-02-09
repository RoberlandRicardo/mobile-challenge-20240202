import React, { useEffect, useState } from "react";
import { onValue, ref,  } from "firebase/database";
import { WordDetails, WordEntitie, WordFavorite } from "../../../@types/entities";
import * as data from '../../../database/words_dictionary_parsed.json';

interface HomeContextProps  {
    favorites: Array<WordFavorite>,
    insertItemFavorites: (arg: WordFavorite) => any,
    removeItemFavorites: (arg: WordFavorite) => any,
    history: Array<WordDetails>,
    insertItemHistory: (arg: WordDetails) => any,
    showedWords: Array<WordEntitie>
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
});

function HomeContextProvider({children}: ProviderProps) {

    const [favorites, setFavorites] = useState<Array<WordFavorite>>([]);
    const [history, setHistory] = useState<Array<WordDetails>>([]);
    const [showedWords, setShowedWords] = useState<Array<WordEntitie>>([]);
    const [indexPagination, setIndexPagination] = useState<number>(0);

    useEffect(() => {
        updateListWords();

    }, [indexPagination])

    function updateListWords() {
        let auxShowedWord:Array<WordEntitie> = [];
        data.allWords[indexPagination].forEach(element => {
            auxShowedWord.push({
                word: element,
                favorite: false,
            })
        });
        
        favorites.forEach((fav) => {
            if (auxShowedWord.length + indexPagination * 100 > fav.index)
                auxShowedWord[fav.index].favorite = true;
        })

        setShowedWords([
            ...showedWords,
            ...auxShowedWord
        ])
    }

    async function insertItemFavorites(fav: WordFavorite) {
        if (showedWords.length > fav.index)
            showedWords[fav.index] = {
                word: fav.word,
                favorite: true,
            }
        favorites.push(fav);
        setFavorites([...favorites])
        
    }

    async function removeItemFavorites(rmFav: WordFavorite) {
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
    
    async function insertItemHistory(item: WordDetails) {
        if (history.findIndex((word) => word.word == item.word) != -1) return;
        history.push(item);
        setHistory([...history])
        // insertItemHistory(item);
    }

    const valueProvider = {
        favorites,
        insertItemFavorites,
        removeItemFavorites,
        history,
        insertItemHistory,
        showedWords,
    }

    return (
        <HomeContext.Provider value={valueProvider} >
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;