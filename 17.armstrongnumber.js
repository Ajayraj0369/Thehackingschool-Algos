function armstrongNumber(num){
  
    let x = num.toString(10)
    
    let sum = 0;
    for(i=0; i<x.length; i++){
        sum +=Math.pow(x[i], 3)
    }
    if(sum === num){
      return "This is a Armstrong Number"
    } 
      else return "this is not an Armstrong Number"
    }
    
    console.log(armstrongNumber(153))