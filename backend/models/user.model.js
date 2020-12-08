var dbConn=require('../config/db.config');

var users = function(users)
{
    this.user_id = users.user_id;
    this.user_name = users.user_name;
    this.email_id = users.email_id;
    this.password = users.password;
    this.tasks= users.tasks;
    this.points= users.points;
};






