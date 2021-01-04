const dotenv = require('dotenv')
const path = require("path")
const sqlite3 = require('sqlite3').verbose()

dotenv.config()

const DB_PATH = process.env.DB_PATH

if (!DB_PATH) {
    console.error("⛔⛔ SETTINGS MISSING ⛔⛔")
    console.error("⛔⛔ DB_PATH")
    process.exit("9")
}
const path_db = path.resolve(__dirname, "../../", DB_PATH)
const database = new sqlite3.Database(path.resolve(path_db, 'micro-blog.db'))

const query = `
    CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    createDate TEXT,
    author TEXT)`

database.run(query)

class pull_db {
    constructor(name){
        this.name = name
    }
}

module.exports = {
    database,
    pull_db
}