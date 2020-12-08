import React from 'react';
import Axios from 'axios';

export default class StartEvent extends React.Component{

constructor(props)
{
   super(props);
   
   this.onChangeEmailid = this.onChangeEmailid.bind(this);
   this.onChangeEventname = this.onChangeEventname.bind(this);
   this.onChangeUsername = this.onChangeUsername.bind(this);
   this.onchangePassword = this.onchangePassword.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
    
   this.state = {
     eventname:'',
     username:'',
     emailid:'',
     password:'' 
   }
}

onChangeEventname(e)
{
   this.setState({eventname : e.target.value});
}

onChangeUsername(e)
{  
   this.setState({username : e.target.value});
}

onChangeEmailid(e)
{
     this.setState({emailid : e.target.value});  
}

onchangePassword(e)
{
     this.setState({password : e.target.value});  
}

onSubmit(e)
{
   console.log("hi");    
   e.preventDefault();
   console.log(this.state);

   const excercise = {
      eventname : this.state.eventname,
      username : this.state.username,
      email : this.state.emailid,
      password : this.state.password 
   };
   
   console.log(excercise);

   Axios.post('http://localhost:5000/api/startevent',excercise)
        .then(res => {
              console.log(res.data);window.alert(res.data.message);
        }  );
   
   setTimeout( () => {window.location = '/admin/login'},500);        
}


render(){
return(
<div width="100%" >
<div className="main" >       

<div id="myform" onSubmit={this.onSubmit}>
<center>  
<h2>Start Event</h2>
<form>

<div className="form-group">
<label>Event Name</label>   
<input type="text" 
       id="evntname" 
       className="form-control" 
       placeholder="Enter Event name" 
       onChange = {this.onChangeEventname}
       value = {this.state.eventname}
       required />
</div>

<div className="form-group">
 <label>User Name</label>   
 <input type="text" 
        id="username" 
        className="form-control" 
        placeholder="Enter User Name" 
        onChange={this.onChangeUsername}
        value={this.state.username}
        required/>
</div>

<div className="form-group">
  <label>Email-id</label>
  <input type="email" 
         id="emailid" 
         className="form-control" 
         placeholder="Enter Email-id" 
         onChange={this.onChangeEmailid}
         value={this.state.emailid}
         required/> 
</div>

<div className="form-group">
 <label>Password</label>
 <input type="password" 
        id="password" 
        className="form-control"
        placeholder="Enter Password" 
        onChange ={this.onchangePassword}
        value={this.state.password}
        required/>   
</div>

<button type="submit" 
        className="btn btn-primary"> Create </button>

</form>
</center>
</div>

</div>
</div>

)
}    




}