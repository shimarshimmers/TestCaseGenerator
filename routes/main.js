const express=require('express');
const router=express.Router();
const generateRequiredTestCase=require('./source/generateNumber.js');
const {generate1DArray,generate2DArray}=require('./source/generateArray.js');
const generateCharacter=require ('./source/generateCharacter.js')
const test=require('./source/test1.js')


router.get('/api/:Primitive/:char/:number',(req,res)=>{
  
    
    const number=parseInt(req.params.number);
   
     console.log(` number Of Cases: ${number}`)
     const out=generateCharacter(number);
     res.json({"1": out})
     console.log(out);
  });
 

router.get('/api/Primitive/:dataType/:min/:max/:number',(req,res)=>{
  
   const dataType= req.params.dataType;
   const min=parseInt(req.params.min);
   const  max= parseInt(req.params.max);
   const number=parseInt(req.params.number);
  
    console.log(`Data Structure: Primitive \n Data Type : ${dataType} \n min: ${min} \n max: ${max} \n number Of Cases: ${number}`)
    const out=generateRequiredTestCase(dataType,min,max,number);
  res.json({"1":out})
    console.log(out);
 });

 router.get('/api/Array/1D/:dataType/:size/:min/:max/:number',(req,res)=>{
    
    const dataType= req.params.dataType;
    const size=parseInt(req.params.size);
    const min=parseInt(req.params.min);
    const max= parseInt(req.params.max);
    const number=parseInt(req.params.number);
    console.log(`Data Structure: Array \n Data Type : ${dataType} \n min: ${min} \n max: ${max} \n number Of Cases: ${number} `)
    const out=generate1DArray(dataType,size,min,max,number);
    res.json({"2": out})
    console.log(out);
 });

  router.get('/api/Array/2D/:dataType/:row/:column/:min/:max/:number',(req,res)=>{
    
    const dataType= req.params.dataType;
    const row=parseInt(req.params.row);
    const column= parseInt(req.params.column);
    const min=parseInt(req.params.min);
    const max= parseInt(req.params.max);
    const number=parseInt(req.params.number)
    console.log(`Data Structure: Array \n Data Type : ${dataType} \n min: ${min} \n max: ${max} \n number Of Cases: ${number} \n row:${row} \n column:${column}`)
    const out=generate2DArray(dataType,row,column,min,max,number);
    res.json({"3": out})
    console.log(out);
 });


 router.get('/apitest',(req,res)=>{
    console.log("ho jao bhaiya") ;
    res.send(test);

 })
 module.exports=router;
