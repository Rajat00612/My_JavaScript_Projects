console.log("here i solve the Practice Set chapter 10 ")

// Question 1 
const randomJokeDouble=()=>{
let p  = fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&idRange=1-318&amount=10")

p.then((value)=>{
   
return value.json()
}).then((value)=>{
    console.log(value)
  
    let data = value
     let randomNumber = Math.floor(Math.random()*10)
     console.log(randomNumber)
let jokes = data.jokes[randomNumber]

let joke = document.getElementById("joke1")
console.log(joke)
joke.innerHTML=`Question:-  ${(jokes.joke),(jokes.setup)}`
let jokedeli = document.getElementById("Delivery");
jokedeli.innerHTML=`Answer :-  ${(jokes.delivery)}`
let cata = document.getElementById("Catagory");
cata.innerHTML = ` Category:- ${jokes.category}`
let type = document.getElementById("type2");
type.innerHTML = ` Type:- ${jokes.type}`
})
}



const randomJokeSingle=()=>{
    let p  = fetch("https://v2.jokeapi.dev/joke/Any?type=single&idRange=1-318&amount=10")
    
    p.then((value)=>{
       
    return value.json()
    }).then((value)=>{
        console.log(value)
      
        let data = value
         let randomNumber = Math.floor(Math.random()*10)
         console.log(randomNumber)
    let jokes = data.jokes[randomNumber]
    
    let joke = document.getElementById("joke1")

    joke.innerHTML=`Jokes:-  ${(jokes.joke)}`
    let jokedeli = document.getElementById("Delivery");
    jokedeli.innerHTML=``
    let cata = document.getElementById("Catagory");
    cata.innerHTML = ` Category:- ${jokes.category}`
    let type = document.getElementById("type2");
    type.innerHTML = ` Type:- ${jokes.type}`
    })
    }
    randomJokeSingle()
// Question 2

// let Note = prompt("Please Enter your Notes here !!!")
// localStorage.setItem("NOTE",Note)

// // console.log(`Value of ${key} is ${Note}`)


// // question 3 
//  let n =localStorage.getItem("NOTE",Note)
// alert("hey your current not is here",n)

// // Question 4 
// let removeItem = prompt("Enter the name u want to remove")
// localStorage.removeItem(removeItem)