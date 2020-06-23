const generateRequiredTestCase=require('./generateNumber');
module.exports={
    generate1DArray:function (dataType,size,min,max,number){
    let test="";
    let res="";
            for(var i=0;i<number;i++)
           {
                res= generateRequiredTestCase(dataType,min,max,size);
                test=test.concat(res,'\n');
           }
           return test;
        
    },
    generate2DArray:function (dataType,row,column,min,max,number){
        let test="";
        let res="";
                for(var i=0;i<number;i++){
                res=generate1DArray(dataType,column,min,max,row);
                test=test.concat(res,'\n');}
            
            
     },
    };
