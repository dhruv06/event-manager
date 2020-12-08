const admin = require('../models/admin.model');
const dbConn = require('../config/db.config');

exports.startEvent = function(req,res){

if(req.body.constructer === Object && Object.keys(req.body).length === 0)
{
     res.status(400).send(
         {error : true ,
          message : 'Insufficient data....'}
         );
}    
else
{ 
    const event = new admin(req.body);
    //console.log(Object.values(event));
    var sql = "insert into admin values (?)";
   
    dbConn.query(sql,[Object.values(event)],function(error,result){
      if(error)
       res.send(error);
      else
      {
        res.json({
            error : false,
            message : "Event has been created sucessfully....",
            data : event 
        });   
      }

    });
}
};