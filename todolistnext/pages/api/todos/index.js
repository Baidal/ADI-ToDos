import getDbConnection from "../../../sql/getDbConnection"

export default async function handler(req, res) {
    const db = await getDbConnection()
    
    if(req.method === 'GET'){
        const todos = await db.all('SELECT * from todo')
        res.status(200).send(todos);
    }else if(req.method === 'POST'){
        const text = req.body.text

        if(!text)
            return res.status(400).send({
                error: "No se ha introducido el texto del todo"
            })

        const query = await db.run(`INSERT INTO todo(text) VALUES ('${text}')`)
        const newTodo = await db.get(`SELECT * FROM todo where id = ${query.lastID}`)
        res.status(201).send(newTodo)
    }

  }