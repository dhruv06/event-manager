const mysql=require('mysql');

const dbConn=mysql.createConnection({
  host :  'localhost',
  user : 'root',
  password : 'root',
  database : 'eventmanager'
});

dbConn.connect(function(err){
  if(err) throw(err);
  console.log('database connected.....');

});

module.exports = dbConn;