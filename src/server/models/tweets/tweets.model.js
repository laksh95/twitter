let data = require('./../../sqldb/db')
let sequelize = data.sequelize
let connection = data.connection

module.exports = () => {
  let tweets = connection.define('tweets', {
    id: {
      type: sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    tweet: {
      type:sequelize.STRING,
      allowNull:true
    }
  },{
    classMethods: {
      
    }
  })
}
