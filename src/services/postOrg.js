"use strict"

const organization = require('../../src/models').organization


class PostOrganization {

    static async post(httpRequest){

        try {
            if(httpRequest.body){
            
     await organization.create(httpRequest.body).then((organizations)=>{
                 console.log(  {
                       message: 'saved to the database',
                       // dataSent: organizations,
                       id: organizations.id
                   })
                   
                         
               })
               
            

        }

        }catch(err){
         console.error(err.message)
        }
        
       
         
    }
}

module.exports = { PostOrganization }