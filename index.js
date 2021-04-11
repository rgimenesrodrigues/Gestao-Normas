const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes')
const PORT = process.env.PORT || '8080'
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./src/routes/swagger-output.json')
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
const {body, check} = require('express-validator')
require('dotenv/config');

const isProduction = process.env.NODE_ENV === 'production'

const app = express()
app.use(cors());
app.use(express.json())
app.use(router)
app.use(compression())
app.use(helmet())
app.set("port",PORT)
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerFile));


const origin = {
  origin: isProduction ? 'https://www.salesforce.com' : '*',
}

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 60, // 60 requests,
  })

app.use(cors(origin))
app.listen(PORT,()=>{
    console.log("Aplicação rodando na porta "+ PORT)
})

app.get('/v1/inserirNorma',(request,response)=>{
    response.send("Inseriu a norma")
    
})

module.exports = app;