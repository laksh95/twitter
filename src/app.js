let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let config = require('config');
let passport = require('passport');

let app = express();

let db = require('./server/sqldb/db')


require('./server/managers/passport')();
require('./express')(app)
// set port
PORT  = process.env.PORT || 3000;
// view engine setup


app.set('port', process.env.PORT || PORT)

db.connection.sync({force:true})
.then(()=> {
  app.listen(app.get('port'))
})
console.log("RUNNING : http://localhost: "+ PORT)


module.exports = app;
