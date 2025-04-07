console.log("Welcome to Snake Water Gun game lets Start the Game !!")
let UserPoints = 0;
let ComputerPoints = 0;
let round = 0;
let AgainPlay = false;
startGame=async()=>{
    let confirmation = confirm("🎮 Ready to Play Snake 🐍, Water 💧, Gun 🔫?\n\nClick OK to start the game or Cancel to exit.")
    if(confirmation==true){
    for(round = 1 ;round<11;round++){
        let UserChoice = prompt("🎮 Let's Play Snake 🐍 Water 💧 Gun 🔫!\n\nPlease enter your choice:");
        let options = ["snake","water","gun"]
        let randomSelection = Math.round(Math.random()*2)
        let ComputerChoice = options[randomSelection]
        console.log(ComputerChoice)
        CheckOptions(ComputerChoice,UserChoice)
   
    }

        }
          await FinalResult(UserPoints,ComputerPoints)
    }
   

    
const CheckOptions =(ComputerChoice,UserChoice)=>{
 
    if(UserChoice=="snake"&&ComputerChoice=="water"){
        UserPoints++ , 
        alert(`🏆 Round ${round} - 🎉 User Wins!\n📊 Scorecard → 👤 User: ${UserPoints} 🤖 Computer: ${ComputerPoints}`)
    } else if (UserChoice=="water"&&ComputerChoice=="snake"){
      ComputerPoints++ ,
           alert(`💥 Round ${round} - 🤖 Computer Wins!\n📊 Scorecard → 👤 User: ${UserPoints} 🤖 Computer: ${ComputerPoints}`)
    }
else if(UserChoice=="gun"&&ComputerChoice=="snake"){
    UserPoints++ ,
    alert(`🏆 Round ${round} - 🎉 User Wins!\n📊 Scorecard → 👤 User: ${UserPoints} 🤖 Computer: ${ComputerPoints}`)
}else if (UserChoice=="snake"&&ComputerChoice=="gun"){
    ComputerPoints++ , 
    alert(`💥 Round ${round} - 🤖 Computer Wins!\n📊 Scorecard → 👤 User: ${UserPoints} 🤖 Computer: ${ComputerPoints}`)
        }else if(UserChoice=="water"&&ComputerChoice=="gun"){
    UserPoints++ ,
    alert(`🏆 Round ${round} - 🎉 User Wins!\n📊 Scorecard → 👤 User: ${UserPoints} 🤖 Computer: ${ComputerPoints}`)
}else if (UserChoice=="gun"&&ComputerChoice=="water"){
    ComputerPoints++ , 
    alert(`💥 Round ${round} - 🤖 Computer Wins!\n📊 Scorecard → 👤 User: ${UserPoints} 🤖 Computer: ${ComputerPoints}`)
        }
         else if(UserChoice==ComputerChoice){
            alert(`🤝 Round ${round} - It's a Tie!\n📊 Scorecard → 👤 User: ${UserPoints} 🤖 Computer: ${ComputerPoints}`)
        }
        
}


const FinalResult = (UserPoints,ComputerPoints)=>{
    if(UserPoints>ComputerPoints){
        alert(`🎉 Congrats! You Win! 🏆\n\nTotal Score: ${UserPoints} 💯`)

    }else if(UserPoints==ComputerPoints){
        alert("🤝 It's a Tie! Both have the same points 😎\n\nGreat match! 🔁 Play again?")
    }
    else{
        alert(`💻 Computer Wins! 😢\n\nTotal Score: ${ComputerPoints} 🤖 `)
    }
 

}
playAgain=async()=>{
AgainPlay = confirm("🎮 Game Over!\n\nWould you like to play another round of Snake 🐍, Water 💧, Gun 🔫?\nClick OK to play again or Cancel to exit.")
    if(AgainPlay===true){
        for(round = 1 ;round<11;round++){
            let UserChoice = prompt("🎮 Let's Play Snake 🐍 Water 💧 Gun 🔫!\n\nPlease enter your choice:");
            let options = ["snake","water","gun"]
            let randomSelection = Math.round(Math.random()*2)
            let ComputerChoice = options[randomSelection]
            console.log(ComputerChoice)
              CheckOptions(ComputerChoice,UserChoice)
        
            }
    
}
await FinalResult(UserPoints,ComputerPoints)
}
