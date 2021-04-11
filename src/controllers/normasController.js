const database = require('../databases/connection')
const jwt = require('jsonwebtoken');
class normasController{

    listarNormas(request,response,next){
        if (!request.header('apiKey') || request.header('apiKey') !== process.env.API_KEY) {
            return response.status(401).json({status: 'Erro de Autenticação', message: 'Não atutorizado.'})
        }

        database.select("*").table("normas").then(normas=>{ 
           response.status(200).json({normas})
        }).catch(error=>{
            response.status(400).json({error})
        })
        

    }
    listarNorma(request,response){
        
        if (!request.header('apiKey') || request.header('apiKey') !== process.env.API_KEY) {
            return response.status(401).json({status: 'Erro de Autenticação', message: 'Não atutorizado.'})
        }

        const p_codigo  =  request.params.codigo
        database.select("*").table("normas").where({codigo:p_codigo}).then(norma=>{ 
            console.log(norma.length)
            if(norma.length===0){
                response.status(404).json({message:"Código não encontrado"})
            }else{
                response.status(200).json({norma})
            }
            
            
        }).catch(error=>{
            response.status(400).json({error})
        })

    }

    inserirNorma(request,response){
        const {codigo,titulo,objetivo,palavras_chave,data_publicacao,status,arquivo} = request.body
      
        database.insert({codigo,titulo,objetivo,palavras_chave,data_publicacao,status,arquivo}).table("normas").then(data=>{ 
            response.status(201).json({message:"Norma criada com sucesso !"})
      
        }).catch(error=>{
            console.log(error)    
            response.status(400).json({error})
        })

    }

    atualizarNorma(request,response,next){
        const {codigo,titulo,objetivo,palavras_chave,data_pulicacao,status,arquivo} = request.body
      
        database.where({codigo:codigo}).update({codigo,titulo,objetivo,palavras_chave,data_pulicacao,status,arquivo}).table("normas").then(data=>{ 
            response.status(201).json({message:"Norma atualizada com sucesso !"})
      
        }).catch(error=>{
            console.log(error)
            response.status(400).json({error})
        })

    }

}
module.exports = new normasController()