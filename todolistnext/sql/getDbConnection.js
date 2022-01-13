const sqlite3 = require('sqlite3') 
const sqlite = require('sqlite')

async function getDbConnection(){
    try{
        return await sqlite.open({
            filename: './db.sqlite',
            driver: sqlite3.Database
        })
    }catch(e){
        console.log(e)
    }
}

export default getDbConnection;