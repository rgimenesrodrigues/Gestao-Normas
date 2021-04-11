const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes')
const PORT = process.env.PORT || '8080'
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./src/routes/swagger-output.json')



const app = express()
app.use(cors());
app.use(express.json())
app.use(router)
app.set("port",PORT)
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerFile));

app.listen(PORT,()=>{
    console.log("Aplicação rodando na porta "+ PORT)
})
app.get('/v1/inserirNorma',(request,response)=>{
    response.send("Inseriu a norma")
})