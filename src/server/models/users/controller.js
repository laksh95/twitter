let model = require('./users.model')()
let sql = require('./../../sqldb/index')
let db = sql()

// This file handles request and response for different api requests. It calls the appropriate class method from the model file accordingly.

module.exports = () => {
  addUser: (req,res) => {
    if(!req.body) {
        res.status(400).json({msg:'No data',status:false})
    }
    else {
      if(!req.body.username) {
        res.status(400).json({msg:'username empty or undefined',status:false})
      }
      else {
        model.addUser(db,req.body)
        .then((data)=> {
          if(!data)
            res.status(500).json({status:false,msg:'Error adding new user'})
          else
          res.status(200).json({status:true,msg:'User added sucessfully'})
        })
      }
    }
  }
}
