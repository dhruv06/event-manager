const dbConn = require('../config/db.config');

exports.login = function(req,res)
{
 if(req.body.constructer === Object && Object.keys(req.body).length === 0)
 { 
   res.status(400).json({
       error : true,
       message : "Insufficient data..."
   });
 } 
 else
 {
    const data = req.body; 
    var sql="select * from users where email_id = ? and password = ?";
    dbConn.query(sql,[data.email_id,data.password],function(err,result){
      if(err)
      res.status(400).json(err);
      
      if(result && result.length )
      {
         res.json({
           error : false,
           message : "login sucessfully.....",
           data : result[0]
         });
      }
      else{
          res.json({
           error : true,
           message : "Invalid username or password....."
          });
      }
    }); 

 }

}
