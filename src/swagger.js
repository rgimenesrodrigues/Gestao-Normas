const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        "version": "1.0.0",                
        "title": "Gestão de Normas REST API",
        "description": "Api para gestão de normas utilizada na POC para o projeto de conclusão para o curso de Arquitetura de Sistemas Distribuúidos da PUC-MG",
        "contact": {
            "email": "rodrigogimenesrodrigues@gmail.com"
          },
    }        
    ,
    host: 'gestaonormasapi.herokuapp.com',
    basePath: '/v1',
    schemes: ['https','http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [                           
        {
            "name": "normas",               
            "description": "Informações sobre normas técnicas industriais"         
        },
    ],
    securityDefinitions: { },         
    definitions: { }                  
}

const outputFile = './src/routes/swagger-output.json'
const endpointsFiles = ['./src/routes/routes.js']


swaggerAutogen(outputFile, endpointsFiles, doc)