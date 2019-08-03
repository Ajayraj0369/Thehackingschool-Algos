const pallindrome = (str) =>{
    let text = "";
    for(i= ((str.length)-1);i>=0; i--){

      text += str[i];
     
  }
  return (text== str)? "Pallindrome" : "not Pallindrome";
  }
  
  console.log(pallindrome("madam"))