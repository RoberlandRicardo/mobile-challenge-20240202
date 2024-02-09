
export type WordFavorite = {
    word: string,
    index: number,
}

export type WordEntitie = {
    word: string,
    favorite: boolean,
}

export type WordDetails = {
    word: string,
    index: number,
    favorite: boolean,
    phonetic?: string,
    phonetics: Array<{
        text: string,
        audio: string | undefined
    }>, 
    origin: string,
    meanings: Array<{
        partOfSpeech: string,
        definitions: Array<{
            definition: string,
            example: string,
            synonyms: Array<string>,
            antonyms: Array<string>
        }>
    }>,
    dateAccess?: Date
}