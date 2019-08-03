// Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and OddNumbers


const generate =(x) =>{
    for(i=0; i<=x; i++){
        if(i%2== 0){
            console.log(`${i} is an even number`)
        }
        else console.log(`${i} is an odd number.`)
    }
}

generate(20);