
import { WordDetails } from "../../@types/entities";
import InternalDatabase from "../database";

export async function getHistorico() {
    let objReturn = await InternalDatabase.getDBConnection().then(
        db => db.executeSql("SELECT * FROM historico;"));

    console.log(objReturn);
    return 
}

export async function insertHistorico(wordDetails: WordDetails) {

    let objInsert = {
        word: wordDetails.word,
        phonetic: wordDetails.phonetic,
        phonetics: JSON.stringify(wordDetails.phonetics),
        origin: wordDetails.origin,
        meanings: JSON.stringify(wordDetails.meanings),
        data: Date.toString(),
    };

    return await InternalDatabase.getDBConnection().then(db => db.executeSql(`
        INSERT OR REPLACE INTO historico(word, phonetic, phonetics, origin, meanings, data) 
        VALUES(
            ${objInsert.word}, 
            "${objInsert.phonetic}", 
            "${objInsert.phonetics}", 
            "${objInsert.origin}" , 
            "${objInsert.meanings}" , 
            "${objInsert.data}");`));
}