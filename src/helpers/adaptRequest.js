"use strict"

 const adaptRequest = (req = {})=> {
    
    return Object.freeze({
      path: req.path,
      method: req.method,
      pathParams: req.params,
      queryParams: req.query,
      body: req.body
    })
    
  }

  module.exports = adaptRequest;