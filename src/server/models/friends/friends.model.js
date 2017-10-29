let data = require('./../../sqldb/db')
let sequelize = data.sequelize
let conneciton = data.connection

module.exports = () => {
  let friends = connection.define('friends', {
    id:{
      type:sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    username: {
      type:sequelize.STRING,
      allwoNull:false
    }
  }, {
    classMethods: {
      associate: (models) => {
        let users = models.users
        let tweets = models.tweets
        users.hasMany(model.friends,{
          foreignKey:'user_id'
        })
        friends.hasMany(tweets, {
          foreignKey:'friend_id'
        })
      },
      getFriends: (models,body) => {
        return models.friends.findAll({
          attributes:['id','username'],
          where: {
            user_id:body.userid
          }
        })
      }
    }
  })
}
