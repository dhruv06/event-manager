const dbConn = require("../config/db.config");

exports.inviteMember = function(req,res){

const data=req.body;    
var sql="select * from joincommitte where committe_name = ? and email_id = ?";

dbConn.query(sql,[data.committe_name,data.email_id],function(err,result){
if(err)
res.status(400).json(err);

if(result && result.length)
{
    res.json({
        error : true,
        message : "member is already exist in a committe...."
    });
}
else
{
 var sql = "insert into joincommitte (committe_name,email_id) values (?)";
 dbConn.query(sql,[Object.values(data)],function(err,result){
   if(err)
    res.status(400).json(err);
    
   res.json({
       error : false,
       message : "invitation has been sent sucessfully......"
   }); 

 });


}


});

};

//remove member from committe

exports.removeMember = function(req,res){
const data = req.body;

var sql = "delete from joincommitte where committe_name = ? and email_id = ?"
dbConn.query(sql,[data.committe_name,data.email_id],function(err,result){
  if(err)
  res.status(400).json(err);
  if(result.affectedRows == 0)
  {
    res.json({
       error : true,
       message : "User not exist in an committe....." 
    });
  }
  else
  {
    res.json({
        error : false,
        message : "member removed from committe successfully..... "
    });
  }
 

});








};





