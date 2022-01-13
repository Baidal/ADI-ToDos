import getDbConnection from "../../../sql/getDbConnection"

export default async function handler(req, res) {
    const { todoId } = req.query
    const db = await getDbConnection()
    const todo = await db.get(`SELECT * from todo where id = ${todoId}`)
    
    if(!todo)
      res.status(404).send({error: `No se ha encontrado el todo con id ${todoId}`})

    if(req.method === "GET")
      res.status(200).send(todo)
    else if(req.method === "DELETE"){
      try{
        await db.exec(`
          DELETE FROM todo
          WHERE id = ${todoId}
        `)
        res.status(200).send({ok: "ok"})
      }catch(e){
        res.status(500).send({error: `Error al eliminar el todo con id ${todoId}`})
      }
    }

  }