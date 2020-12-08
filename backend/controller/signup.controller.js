const dbConn=require('../config/db.config');

exports.signup = function(req,res) {

if(req.body.constructer === Object && Object.keys(req.body) === 0)    
{
    res.status(400).send(
    {
        error : true,
        message : "Insufficent data...."  
    }); 
}    
else
{
    const user = req.body;
    var sql = "select * from users where email_id = ? and password = ?";
    //console.log(user);
    dbConn.query(sql,[user.email_id,user.password],function(err,result){
       if(err)
       res.status(400).json(err);
       
       //console.log(result);

       if(result && result.length)
       {
         res.json({
             error : true,
             message : "Username is already exist...."
         });
       }
       else
       {
        sql = "insert into users (user_name,email_id,password) values (?)";
    
        dbConn.query(sql,[Object.values(user)],function(err,result){
           if(err)
           res.status(400).json(err);  
           res.json({
               error : false,
               message : "user has been registered sucessfully....",
               data : user
           });
    
        });

       } 

    });
  
}

};