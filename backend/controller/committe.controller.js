const dbConn = require("../config/db.config");

exports.addcommitte = function(req,res){

//add-committe feature  
if(req.body.constructer === Object && Object.keys(req.body).length === 0){
  res.status(400).json({
     error : true,
     message : "Insufficient data....."   
  });
} 
else
{
 const data = req.body;
 let sql="insert into committe (committe_name,description) values (?)";
 
 dbConn.query(sql,[Object.values(data)],function(err,result){
  if(err)
   res.status(400).json(err);

  res.json({
      error : false,
      message : "Commite has been add sucessfully.....",
      data : data
  });  

 });


}

};
   

//list out committes
exports.listCommitte = function(req,res){

let sql = "select * from committe"; 

dbConn.query(sql,function(err,result){
    if(err)
    res.status(400).json(err);
    res.json(result);
});  
};

//delete committe
exports.deletecommitte = function(req,res){
  const id=req.params.id;
 
 var sql="delete from committe where committe_id = ?";
 dbConn.query(sql,[id],function(err,result){
  if(err)
  res.status(400).json(err);
  
  if(result.affectedRows == 0)
  {
    res.json({
     error : true,
     message : "Commite with given id not exist..."
    });
  }
  else
  {
   res.json({
      error : false,
      message : "Committe has been deleted sucessfully...."
   }); 
  }
  
 }); 
};



