"use strict";

const express = require('express')
const router = express.Router()

//importing the controllers
const routeToUser = require('../controllers/users')



/*home route to create the create users 
@body
- isAdmin: string
- email: string
- password: string
- status: string
*/

const usersRouter = router.post('/user', routeToUser.userCreate)


module.exports = usersRouter;