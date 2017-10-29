let model = require('./users.model')
let sql = require('./../../sqldb/index')
let db = sql()
// This file handles request and response for different api requests. It calls the appropriate class method from the model file accordingly.

module.exports = {
  getFriends: (req,res) => {
    if(req.query.userid) {
      model.getFriends(db, req.query)
      .then((data) => {
        if(!data) {
          res.status(400).json({status:false,msg:'No friends for this user found.'})
        }
        else {
          res.status(200).json({status:true,data:data})
        }
      })
      .catch((err)=>{
        res.status(500).josn({status:false,msg:err})
      })
    }
  }
}
