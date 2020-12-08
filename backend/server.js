const express=require('express');
const bodyparser=require('body-parser');

const app=express();

const port=process.env.PORT || 5000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/',(req,res) => {
    res.send("Hello World.....");
});

const route = require('./routes/routes');
app.use('/api',route);


app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
