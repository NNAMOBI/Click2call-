"use strict"

/*home route to create the create users 
@body
- isAdmin: string
- email: string
- password: string
- status: string
*/

const {HandleUserRequest} = require('../../helpers/handleUserRequest')
const adaptRequest = require('../../helpers/adaptRequest')



exports.userCreate = (req, res)=> {
    const httpRequest = adaptRequest(req)

    HandleUserRequest.handler(httpRequest)
    .then(({headers, statusCode, data})=>{

        res
        .set(headers)
        .status(statusCode)
        .send(data)
    })
    .catch(({headers, statusCode, errorMessage})=>{
        res
        .set(headers)
        .status(statusCode)
        .send(errorMessage)})


}