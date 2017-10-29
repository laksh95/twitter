let sequelize = require('sequelize')
let config = require('config')
let connection = new sequelize(config.sequelize.uri, config.sequelize.options)
module.exports = {
  sequelize,
  connection
}
