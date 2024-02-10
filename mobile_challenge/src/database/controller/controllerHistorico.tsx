
import { WordDetails } from "../../@types/entities";
import InternalDatabase from "../database";

export async function getHistoricoDB(): Promise<Array<WordDetails>> {
    let response = await InternalDatabase.getDBConnection().then(
        db => db.executeSql("SELECT * FROM historico;"));
    
    let destruct = response[0].rows.raw();
         
    let returnArray: Array<WordDetails> = [];

    destruct.forEach((wd) => {
        returnArray.push({
            word: wd.word,
            index: wd.index,
            favorite: wd.favorite,
            phonetic: wd.phonetic,
            phonetics: JSON.parse(wd.phonetics),
            origin: wd.origin,
            meanings: JSON.parse(wd.meanings),
            dateAccess: new Date(wd.data),
        })
    })

    return returnArray;
}

export async function insertHistoricoDB(wordDetails: WordDetails) {

    let objInsert = {
        word: wordDetails.word,
        index: wordDetails.index,
        favorite: wordDetails.favorite,
        phonetic: wordDetails.phonetic,
        phonetics: JSON.stringify(wordDetails.phonetics).split(`"`).join(`""`),
        origin: wordDetails.origin,
        meanings: JSON.stringify(wordDetails.meanings).split(`"`).join(`""`),
        data: wordDetails.dateAccess?.toString(),
    };

    return await InternalDatabase.getDBConnection().then(db => db.executeSql(`
        INSERT OR REPLACE INTO historico(word, position, favorite, phonetic, phonetics, origin, meanings, data) 
        VALUES(
            "${objInsert.word}", 
            "${objInsert.index}", 
            "${objInsert.favorite}", 
            "${objInsert.phonetic}", 
            "${objInsert.phonetics}", 
            "${objInsert.origin}" , 
            "${objInsert.meanings}" , 
            "${objInsert.data}");`))
        .catch((err) => console.error(err));
}