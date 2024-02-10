import { User } from "../../@types/entities";
import InternalDatabase from "../database";

export async function insertUserDB(newUser: User) {

    let objInsert = {
        id: newUser.id,
        name: newUser.name,
        senha: newUser.senha,
        favorites: JSON.stringify(newUser.favorites).split(`"`).join(`""`),
    };

    return await InternalDatabase.getDBConnection().then(db => db.executeSql(`
        INSERT OR REPLACE INTO user(id, name, senha, favorites) 
        VALUES(
            "${objInsert.id}", 
            "${objInsert.name}", 
            "${objInsert.senha}", 
            "${objInsert.favorites}");`))
        .catch((err) => console.error(err));
}