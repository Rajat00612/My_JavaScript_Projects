// Challenge 1

UserPermission = false;

console.log("here we Solve the Challenge video no 22")
const StartGame=()=>{
let chances = 0;
var randomNumber = Math.round(Math.random()*100);
do{
    var a = prompt("Guess the Number")
    a = Number.parseInt(a)
console.log(`"Enter Number not Matched Try again"${a}`)
chances++

 if(a>randomNumber){
    console.log("Your Enter number Greater than random number")
}else{
    console.log("Your Enter number lesser than random number")
}
}while(randomNumber!==a)0
console.log(`Number Matched :- ${ randomNumber}`)
 if (chances<=10){
    console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
 else if (chances<=20){
console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
else if (chances<=30){
    console.log(` Number Matched Your Score is :- ${100-chances}* You Taken chances:- ${chances}`)
}
else if (chances<=40){
    console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
else if (chances<=50){
    console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
else if (chances<=60){
    console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
else if (chances<=70){
    console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
else if (chances<=80){
    console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
else if (chances<=90){
    console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
else if (chances<=100){
    console.log(` Number Matched Your Score is :- ${100-chances} You Taken chances:- ${chances}`)
}
}

const StartGamePermission =()=>{
    let UserPermission = confirm("Are You opened  your Console")
    if(UserPermission===true){
        StartGame()
    }
    }
    