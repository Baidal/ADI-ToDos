const sqlite3 = require('sqlite3') 
const sqlite = require('sqlite')

async function setUp(){
    try{
        const db = await sqlite.open({
            filename: './db.sqlite',
            driver: sqlite3.Database
        })
        await db.migrate({ force: true});
    }catch(e){
        console.log(e)
    }
}

setUp()