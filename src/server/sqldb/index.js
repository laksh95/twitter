let path = require('path')

let models = ['users','friends','tweets']
let db = require('./db')
// let format = path.join(__dirname,'../models/{0}/{0}.model.js')
// for(let i in models){
//    let model = require(format.replace(/\{0\}/g,models[i]))();
//    db[model.name]=model;
// }
db.Users = db.sequelize.import('../models/users/users.model')
db.Friends = db.sequelize.import('../models/friends/friends.model')
db.Tweets = db.sequelize.import('../models/tweets/tweets.model')

db.Users.associate(db)
db.Friends.associate(db)

let sql = () => db

module.exports = sql
