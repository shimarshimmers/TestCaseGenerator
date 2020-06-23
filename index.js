const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const port=8000;

app.get('/',(req,res)=>{
    res.send("hello world");
  
});  
const router=require('./routes/main.js')
app.use(router)

app.listen(port,()=>
console.log('live on port 8000'));
            
