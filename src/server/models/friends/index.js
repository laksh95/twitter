let express = require('express')
let router = express.Router()
let controller = require('./controller')


// Calls differnt function to perform task based on the type of request

// This will call controller fuction to get friends for specific user 
router.get('/getFriends/:userid',controller.getFriends)

module.exports = router
