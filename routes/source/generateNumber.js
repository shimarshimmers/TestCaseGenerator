
  function generateInRangeFloat(min,max)
  { return parseFloat(Math.random()* (max-min)+min).toFixed(7);
  }
  
  function generateInRangeDouble(min,max)
  {  return parseDouble(Math.random()* (max-min)+min).toFixed(15);
  }
  
  
  function generateInRangeInt(min,max)
  {
      return parseInt(Math.random()*(max-min)+min).toFixed();
  }

 function  generateRequiredTestCase(dataType,min,max,number)
   {
        let test="";
  
       switch(dataType)
       {
           case "int": 
           {
               for(var i=0;i<number;i++)
              test= test.concat(generateInRangeInt(min,max),",");
               break;
              }
              case "float":
                  {
                      for(var i=0;i<number;i++)
                     test= test.concat(generateInRangeFloat(min,max),",");
                      break;
              }
              case "double":
                  { for(var i=0;i<number;i++)
                     test= test.concat(generateInRangeDouble(min,max),",");
                      break;
                 }
                 default:
                  test = dataType+" is not supported \n";
    
      }
       
     
       return test;
  
      }
  
      module.exports =function(dataType,min,max,number){
        return generateRequiredTestCase(dataType,min,max,number);
      }
  