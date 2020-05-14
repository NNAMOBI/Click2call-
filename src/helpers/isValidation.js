"use strict"

module.exports.isValid = (httpRequest)=>{
    switch(httpRequest.body){

        case email:
    }
    

    

}

class Validation {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
        
    }
    static validateEmail(email){
 let valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
  return valid.test(email)
    }
}