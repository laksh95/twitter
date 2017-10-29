let data = require('./../../sqldb/db')
let sequelize = data.sequelize
let connection = data.connection
module.exports = () => {
  let users = connection.define('users', {
    id: {
      type:sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    username: {
      type: sequelize.STRING,
      allowNull:false
    }
  }, {
    classMethods: {
      addUser: (models,userDetails) => {
        return models.users.create({ username:userDetails.username })
      },
      associate: (models) => {
        let tweets = models.tweets
        models.user.hasMany(tweets,{
          foreignKey:'user_id'
        })
      }
    }
  })
}
