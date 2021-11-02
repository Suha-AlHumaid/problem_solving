const fizzBuzz =(n)=>{

    for (let i=1;i<= n; i++ ){
  
        if  ((i%3) ==0 && i %5 ==0){
        
            console.log("FizzBuzz");
        
         
        }else if ((i%5) ==0){
            console.log("buzz");
       
        } else if ((i%3) ==0 & i %5 ==0){
          
        
        }
        else{
            console.log(i);
            console.log("Fizz");
        }
    }
};


console.log(fizzBuzz(15)); 