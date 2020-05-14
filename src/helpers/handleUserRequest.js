"use strict"
const {PostOrganization} = require('../services/postOrg')

class HandleUserRequest {
    
    static handler(httpRequest){

       return new Promise((resolve, reject)=>{
        if(httpRequest.method === 'POST'){
          
          resolve({
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 200,
            data: PostOrganization.post(httpRequest)
          })
        }
        reject({
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          errorMessage: 'Bad request. No POST body.'
        })

       })
       

    }
}
 module.exports = {HandleUserRequest}

// export class PostUser {
//     constructor(){

//     }
//     postUser(){

//     }

// }