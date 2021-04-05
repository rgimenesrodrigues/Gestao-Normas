const database = require('../databases/connection')

class normasController{
    inserirNorma(request,response){
        const {codigo,objetivo} =  request.body

        console.log(codigo,objetivo)

        database.insert({codigo,objetivo}).table("normas").then(data=>{ 
            console.log(data)
            response.json({message:"Norma criada com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })

    }
    listarNormas(request,response){
        
        database.select("*").table("normas").then(normas=>{ 
            console.log(normas)
            response.json({normas})
        }).catch(error=>{
            console.log(error)
        })

    }
    validarConexao(request,response){
        
        response.json({message:"Conectado com sucesso!"})
        

    }
    

}
module.exports = new normasController()