//Write a program to subtract two integers without using Minus (-) operator


function substract(x,y){
  
  return x + ~y + 1
  
}

console.log(substract(7,3))