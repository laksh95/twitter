let express = require('express')
let router = express.Router()
let controller = require('./controller')

 // Calls differnt function to perform task based on the type of request

// This will call addUser function to add new user  
router.post('/addUser', controller.addUser)

module.exports = router
