//Carga del módulo express
const express = require('express'); 

//Instancia del server
const app = express();

//Middleware para parsear formularios (URL encoded)
app.use(express.urlencoded({extended: false}))
//Middleware para parsear JSON
app.use(express.json())
// Servir archivos estáticos
app.use(express.static(__dirname+'/public'))

app.get('/:id', (req,res) => {
    //req.query
    //req.body
    //req.headers
    //req.params
    res.send("Getting root")
})

app.listen(5010)