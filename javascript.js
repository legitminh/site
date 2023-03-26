console.log("hello, you have discovered the secret message: U9sJK0l1")
let max = parseInt(prompt("fizzBuzz to where"))
for (let a = 1; a<= max; a++ ){
    if ((a % 3 === 0) && (a % 5 === 0)){
        console.log("FizzBuzz") 
    }
    else if (a % 3 === 0){
        console.log("Fizz")
    }
    else if (a % 5 ===0){
        console.log("Buzz")
    }
    else{
        console.log(a)
    }
}