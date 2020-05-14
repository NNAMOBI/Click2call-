"use strict";

const express = require('express')
const router = express.Router()

const routeToOrg= require('../controllers/org')



/*route to create an organization
@body
- business_name: string
- business_address: string
- contact_phone: string
*/

const organizationRoute = router.post('/organization', routeToOrg.organ_Create)


module.exports = organizationRoute;