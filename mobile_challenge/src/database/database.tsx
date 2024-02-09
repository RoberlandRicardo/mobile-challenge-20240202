import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';
import { tables } from './model';

const dbName = "mpvistoria.db";

class InternalDatabase {

    static db: SQLiteDatabase;

    static async initDB() {
        // SQLite.DEBUG(true);
        SQLite.enablePromise(true);
        SQLite.openDatabase({ name: dbName, location: 'default' })
            .then(async (db) => {
                tables.forEach(async (table) => {
                    var string = `CREATE TABLE IF NOT EXISTS ${table.name} (`
                    table.values.forEach((value, index) => {
                        string = string + value;
                        if (index < table.values.length - 1) string = string + ", ";
                    })
                    string = string + ");";

                    await db.executeSql(string);
                });
                this.db = db;
            }).catch((err) => {
                console.error(err)
            });
    }

    static async getDBConnection() {
        if (this.db == null)
            await this.initDB();
        return this.db;
    }

    static async dropDatabase() {
        SQLite.deleteDatabase({ name: dbName, location: 'default' });
        
    }

    static async closeConnection(db: SQLiteDatabase) {
        if (db)
            db.close;
    }
}

export default InternalDatabase;