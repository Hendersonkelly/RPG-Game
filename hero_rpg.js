//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});




class Character{
    constructor(name,health, power, bounty){
        this.name = name
        this.health= health
        this.power = power
        this.bounty = bounty
        

    }
   
       
    

    alive(character){
        if(character.health > 0){
            return true
        }
        else{
            return false
        }
    }
    attack(character){
        
        if(character.evadePoints >= 2){
            console.log(
                `You have evade points lets see if you can miss this hit. `);
            let points = character.evadePoints
          let evade =  Math.floor(Math.random() * (101 ) )
            if (evade <= (points )*(.10*(evade))){
                
                character.health-= 0
             

                console.log(
                    `You were able to evade the hit. Your health ❤️points remain at ${character.health}
                 That sneaky Cheshire 😼can sometimes come in handy`);
    
            
            }
            else if (evade > (points )*(.10*(evade))){
            console.log(`
            That sneaky little Cheshire😼could not be found this time. evasion did not succeed  `)
            character.health-= this.power
          
            console.log(`
            ${this.name} has removed ${this.power} from ${character.name}'s health❤️ points. Leaving ${character.health} `);

            if (character.health <= 0){
                console.log(`
                ${character.name} has lost the fight⚔️. `)
                this.balloons = this.balloons + character.bounty 
                console.log(
                    `You have collected ${character.bounty} balloons🎈 for a total of ${this.balloons} `)
            }


            }
        }
       else{

           character.health-= this.power
           
            console.log(
                `${this.name} has removed ${this.power} from ${character.name}'s health❤️ points. Leaving ${character.health}`);
            if (character.health <= 0){
                console.log(
                    `${character.name} has lost the fight⚔️. `)
                this.balloons = this.balloons + character.bounty 
                console.log(
                    `You have collected ${character.bounty} balloons🎈 for a total of ${this.balloons}`)
            }
       }
            
                }

        
    


    printStatus(name){
        console.log(`
         ${name.name} has ${name.health} health ❤️points `);
    }
}

class Hero extends Character{
     constructor(name, health, power){
        super(name, health, power ) 
        this.inventory = []
        this.balloons = 30
        this.evadePoints = 4
    }    
    printInventoryList(){
       
        for (let obj of this.inventory){ //everytime we loop through it gives us the obj
          
               
            console.log(`
             ${obj.name}, 
           cost: ${obj.cost} baloons🎈, 
           description: ${obj.description}
           `)
      }  

    }
    searchItem(characterName){
    this.printInventoryList
            console.log(characterName.inventory);
            console.log(`
            Type the item number you wish to use.==> `);
        let userInput =Number( prompt())
        userInput = userInput -1
     
        console.log(characterName.inventory[userInput]);
       }
       sidekick(){
       let sideKick = Math.floor(Math.random()*5)
      
       if (sideKick == 1){ 
         this.power= this.power *2
        console.log(`
        Surprise! Carl decided to join you for this fight⚔️ he will let your power points be worth double `);
        
       }
     
       else {
        this.power = this.power
        console.log(
            `I wonder where Carl went off to. His tennis ball 🥎walker sure would come in handy in this fight⚔️. 
            Your power points will remain the same without your sidekick`);
       }
    }

       heroAttack(character){
        
     

        if(this.inventory.length >0){
            console.log(
            `Would you like to use an item?==>
            yes or no==>   `);
           let userInput= prompt()
            if(userInput.toLocaleLowerCase() == `yes`){
                this.printInventoryList()
                console.log(`
                Please type the number associated with your item you would like to use==>`);
           
            let input = Number(prompt())
            switch(input){
                case 1:
                    
                console.log(`
                You have chosen Spoonful🥄 of Sugar. Ellie drinks her tonic and is returned to full health❤️ before the fight⚔️ begins `);
                this.health = 30
                character.health-=this.power 
                console.log(
                    `${this.name} has removed ${this.power} health ❤️points from ${character.name} `);
                console.log(`
                ${character.name} has ${character.health} health❤️ points`);

                console.log(`
                Ellie's health❤️ points are returned to full capacity `);
                        
                 if (character.health <= 0){
                    console.log(`
                    ${character.name} has lost the fight⚔️. `)
                    this.balloons = this.balloons + character.bounty 
                    console.log(`
                    You have collected ${character.bounty} balloons🎈 for a total of ${this.balloons}`);
                 }

                  break  
                    
                    
                    
                case 2:
                  
                console.log(`
                You have chosen Pete's Dragon.🐲 Before the fight⚔️ begins, an invisible dragon🐲 flies next to you and supports any powerful hits by adding 2. `);
                this.power = this.power +2
                character.health-=this.power 
                console.log(`
                ${this.name} has removed ${this.power} health❤️ points from ${character.name} `);
                console.log(
                    `${character.name} has ${character.health} health ❤️points`);
                this.power = this.power -2
                        
                if (character.health <= 0){
                    console.log(`
                    ${character.name} has lost the fight⚔️. `)
                    this.balloons = this.balloons + character.bounty 
                    console.log(`
                    You have collected ${character.bounty} balloons🎈 for a total of ${this.balloons} `);
                }
                        
                    
                    break
                    case 4:
                    
                    console.log(`
                    You have chosen Posion Apple🍎⚗️. Much like a naive girl in the woods🌳🌳 that enjoys breaking an entering your opponent will be charmed into taking a bite. They will immediately lose 2 health❤️ points.
                     `) 
                      
                    character.health = character.health-2 
                    character.health -= this.power 
                    
                    console.log(`
                    ${this.name} has removed ${this.power } health ❤️points from ${character.name}
                    
                    `);
                    console.log(`
                    ${character.name} has ${character.health} health ❤️points
                    `);
                        
                    if (character.health <= 0){
                        console.log(`
                        ${character.name} has lost the fight⚔️.
                        `)
                        this.balloons = this.balloons + character.bounty 
                        console.log(`
                        You have collected ${character.bounty} balloons🎈 for a total of ${this.balloons}
                        `);
                     }
                
                 
                    break
                    
                    case 5:
                    
                    console.log(`
                    You have chosen The Perfect Cast🎣. This item gives you a chance to take a risk. 
                    If you can guess a random number between 1-5 correctly, you automatically win the fight⚔️.
                     Sounds pretty good to me "A-hyuck" 
                     `)



                    let random = Math.floor(Math.random()*6)
                    console.log(`
                    Choose a number between 1-5. Will we see eye👀 to eye👀?
                    `);
                    let guess = Number(prompt())


                    if(guess == random){
                        console.log(`
                        I knew if we listened to each other's heart. You did it! 
                        `);
                        character.health= 0


                        console.log(`
                        ${character.name} has lost the fight⚔️.
                        `)
                        this.balloons = this.balloons + character.bounty 


                        console.log(`
                        You have collected ${character.bounty} balloons 🎈for a total of ${this.balloons}
                        `);
                    }
                    else{
                        console.log(`
                        Gwarsh! Better luck next time
                        `);



                    }
                    
                    
                
            

                    
                }
                
                
                    }   
                
                    else {
                        character.health-= this.power
                            console.log(`
                            ${this.name} has removed ${this.power} health ❤️points from ${character.name}
                            `);
                            console.log(`
                            ${character.name} has ${character.health} points left
                            `);
                
                                if (character.health <= 0){
                                 console.log(`
                                 ${character.name} has lost the fight⚔️.
                                 `)
                                this.balloons = this.balloons + character.bounty 
                
                                console.log(`
                                You have collected ${character.bounty} balloons 🎈for a total of ${this.balloons}
                                `);
                
                
                                }
                         }
                }
        else{
        character.health-= this.power
            console.log(`
            ${this.name} has removed ${this.power} health❤️ points from ${character.name}
            `);

            console.log(`
            ${character.name} has ${character.health} points left
            `);


                if (character.health <= 0){


                console.log(`
                ${character.name} has lost the fight⚔️.
                 `)


                this.balloons = this.balloons + character.bounty 


                console.log(`
                You have collected ${character.bounty} balloons🎈 for a total of ${this.balloons}
                `);


                }
        }
        
 
        
}

       

        
    


}
    class Goblin extends Character{
        constructor( name, health, power, bounty){
           super(name, health, power, bounty)
           
       }
    }
    
    class Zombie extends Character{
        constructor(name, health, power, bounty){
            super(name, health, power, bounty)
        }
    } 
    class Medic extends Character{
        constructor(name, health, power, bounty){
            super(name, health, power, bounty)
        }

        heal(name){
            this.health = this.health +3
            console.log(`
            Like the Shadowman he is, he has used his power to heal himself by adding 3 health ❤️points for a total of ${this.health}
            
            `);


        }
    } 
    class Shadow extends Character{
        constructor(name, health, power, bounty){
            super(name, health, power, bounty)
        }
    } 
    class Pirate extends Character{
        constructor(name, health, power, bounty){
            super(name, health, power, bounty)
        }
        walkThePlank(name){
           name.health = name.health - 2
           console.log(`
           Captain Hook has decided after his blow to make you walk the plank. 
           Ellie splashed 💦to the water and was eventually saved by mermaids🧜‍♀️, but after a long swim🏊‍♀️. 
           Ellie lost 2 health ❤️points for a total of ${name.health}
           
           `);



        }
    } 
    class Witch extends Character{
        constructor(name, health, power, bounty){
            super(name, health, power, bounty)
        }

        playTheGame(name, character){
            console.log(`
            Choose a number between 1 and 3.==>
            
            `);
            let choice = Number(prompt())
            switch(choice){
                case 1:
                    console.log(`
                    Madam Mim transforms into a mouse 🐭and she is easily able to attack her
                    `);

                    
                    break

                case 2:
                    console.log(`
                    Madam Mim transforms into a large snake🐍 with green spots. 
                    While you are able to attack she quickly evades and regains 2 health ❤️points.
                    `);
                    
                    this.health = this.health +2
                    
                    break

                case 3:
                    console.log(`
                    Madam Mim accidentally transforms into a snail🐌 and is easily attacked due to her small size.
                    `);
                    
                    this.health = this.health -1
                    
                    
                    ;
                    break
                default:
                    console.log(`
                    Madam Mim transforms into a mouse 🐭 and you are easily able to attack her due to her small size
                    `);
                    name.heroAttack(character)
                    


            }
                




        }
    } 

class Store{
    constructor(){
    this.items= []
    
    }
    additem(name, cost, description){
        let tool = new Items(name, cost, description)
     this.items.push(tool)
    }
    printItemList() {
    
        for (let obj of this.items){ //everytime we loop through it gives us the obj
       
           
                        console.log(
                            `${obj.name}, 
                       cost: ${obj.cost} balloons🎈, 
                       description: ${obj.description}
                       `)
                  }  
    }
    
    buyitem(characterName, store){
        this.printItemList()
        console.log(`
        Please choose the number of the item you would like to purchase.==>
        `);
       let userInput =Number(prompt())
        switch(userInput){
            case 1: 
             if(userInput == 1){
               
                if(characterName.balloons >= 4){
                    
                    characterName.inventory.push(store.items[0])
                    console.log(characterName.inventory);
                    console.log(`
                    This item has been added to your inventory📥
                     `);
                    
                }
                else{
                    return console.log(`
                    You do not have enough balloons 🎈for this item.
                  `);
                }
                break
            }
            
            case 2: 
             if(userInput == 2){
               
                
                if(characterName.balloons >= 3){
                    
                    characterName.inventory.push(store.items[1])

                    console.log(`
                    This item has been added to your inventory📥
                    `);
                    
                }
                else{
                    return console.log(`
                    You do not have enough balloons 🎈for this item.
                    `);
                }
                break
            }
            case 3: 
             
                
                if(characterName.balloons >= 4){
                    
                    characterName.inventory.push(store.items[2])
                    console.log(characterName.inventory);
                    console.log(`
                    This item has been added to your inventory📥
                    `);
                    characterName.evadePoints +2
                    
                }
                else{
                    return console.log(`
                    You do not have enough balloons 🎈for this item.
                    `);
                }
                break
            
            case 4: 
             
               
                if(characterName.balloons >= 1){
                    
                    characterName.inventory.push(store.items[3])
                    console.log(characterName.inventory);
                    console.log(`
                    This item has been added to your inventory📥
                    `);
                    
                }
                else{
                    return console.log(`
                    You do not have enough balloons 🎈for this item.
                   `);
                }
                break
            
            case 5: 
            
                if(characterName.balloons >= 4){
                    
                    characterName.inventory.push(store.items[4])
                    console.log(characterName.inventory);
                    console.log(`
                    This item has been added to your inventory📥
                    `);
                    
                }
                else{
                    return console.log(`
                    You do not have enough balloons 🎈for this item.
                    `);
                }
                break
            

                default: {
                    console.log(`
                    Unexpected input try again.
                    `);}

            
             }
        }


    }




class Items{
    constructor(name,cost,description){
    this.name = name
    this.cost = cost
    this.description = description
}

}





    

    

    

const main = () => {
   

   
    let Ellie  = new Hero( `Ellie`, 30,5, 30)
    let Grumpy = new Goblin(`Grumpy`, 6,2, 5)
    let OogieBoogie = new Zombie(`Oogie`,Infinity, 2, 0 )
    let DrFacilier = new Medic(`Dr Facilier`, 10, 3, 8)
    let Shadowman = new Shadow(`Shadowman`, 1, 1, 5)
    let CaptainHook = new Pirate(`Captain Hook`, 10, 7, 8)
    let MadMadamMim = new Witch(`Mad Madam Mim`, 10, 4, 7)
    let Carl = new Hero(`Carl`, 10,5,10)
    let FantasyCostco = new Store
    

    FantasyCostco.additem (`1. Spoonful of Sugar🥄`, 4,`This item will bring Ellie back to full health❤️` )
    FantasyCostco.additem (`2. Pete's Dragon🐲`, 3, `This item adds 2 points to Ellie's power to do more damage`)
    FantasyCostco.additem (`3. Cheshire's Smile😼`, 2, `This item provides you with 2 evade points which will increase your probability to win by 10%. You can only achieve up to 50%`)
    FantasyCostco.additem (`4. Poison Apple🍎⚗️`, 1, `This item will charm your opponent and reduce their health❤️ by 2`)
    FantasyCostco.additem (`5. The Perfect Cast🎣`, 4, `This item chooses a whole number between 1-3. You will then choose a number if they match you immediately win the fight⚔️ and recieve your balloons🎈`)
    

console.log(`

Adventure is out there!🗺️🎒`  
);


console.log(`
Ellie is a young woman 🧍‍♀️ seeking adventure. 
She craves travel ✈️and seeing the unseen and experiencing the unknown🗺️❓. 


You will get the opportunity to help💜 her on her journey as she faces different villains🦹.


As you move through your journey you will get to collect balloons 🎈 to use as currency 💰
that may be used in the store🏢 to buy items that will support your success.
You might even get the opportunity to get some help💜 from your sidekick Carl🧍.
`);

console.log(`
Ellie starts off on her journey 🎒and comes upon what looks like old European castle ruins🏰.
The castle is surrounded by a forest🌳🌳 of thorns and roots.

Ellie immediately decides to enter the castle 🏰to marvel at its history and statuesque beauty.
As she enters the forest of thorns 🌳🌳she hears something behind her.
She stops and listens to determine what the disturbance could be. 

The rustling seemed to be coming from a small thorn bush 🌿behind her. 
By the time she turns around she is confronted with a goblin🧌. 
This was not just any goblin, but the goblin Grumpy🧌 who worked for the evil fairy🔮 who now rules this land.
`)



console.log(`
The goblin looked at her and said
 “Ha it's a female!. All females is poison ⚗️🧪 full of  wicked wiles.” 
 Grumpy 🧌starts to walk toward Ellie ominously.
 `);


  while ( Grumpy.alive(Grumpy) == true && Ellie.alive(Ellie) == true) {
      Ellie.printStatus(Ellie)
      Grumpy.printStatus(Grumpy)
      console.log(``)
      console.log("What do you want to do?")
      console.log("1. Fight the goblin 🗡️🧌")
      console.log("2. Do nothing 🤷‍♀️")
      console.log("3. Run Away🏃")
      console.log("> ")

      let rawInput = prompt()

      if (rawInput == "1"){
        console.log(`
        Ellie decides to fight🗡️.
        `);
          //Hero attacks goblin
          Ellie.sidekick()
          Ellie.heroAttack(Grumpy)

    }

      else if (rawInput == "2"){
          
      }
      else if (rawInput == "3"){
          console.log("You left the area, but Ellie left behind her chance at balloons 🎈for this adventure")
          break;  //break out of loop
        
          
      }
     
      else{
          console.log(`Invalid input ${rawInput}`)
      }//end of if statement

      if (Grumpy.alive(Grumpy) == true ){
          // Goblin attacks hero
          console.log(`
          The goblin was enraged😡🧌 by Ellie's presence and continued presence 
          `);
          Grumpy.attack(Ellie)
      }// end of if statement

  }// end of while loop
  
 
console.log(`
Would you like to visit Fantasy Costco 🧙🏢 before your next adventure? 
Please answer yes or  no.==>
`);

  let answer = prompt()
   if(answer.toLocaleLowerCase() == `yes` ){
       
       FantasyCostco.buyitem(Ellie, FantasyCostco)
     
   }
   else{
       console.log(`
       Ok we will continue with our adventure
       `);
   }



 
  
console.log(`
Once again Ellie 🧍found herself walking in an unknown world full of black and white creatures🩻🪦,
 spooky decorations 🎃and overall creepy town.


While traveling through the town she came across a lovely woman named Sally🧍 who invited her up for tea🫖.
 She told Ellie the adventures she and Jack🩻 had recently had in a neighboring city🌇. 



 Ellie finished her tea🫖 and was about to be on her way when Sally warned⚠️ her 
 she didn't want to be out at night🌒 


  “There is something in the air” she said. 
  Taking her seriously Ellie began to quickly walk🏃‍♀️ back to the entrance of the town🩻🪦. She was not looking for a fight⚔️.
  
  `);



console.log(`
At the entrance to the town 🩻🪦 leaning up against the post was what looked like a scarecrow🎃. 
He was overstuffed and left out in one too many rainstorms. As Ellie was pondering this, it suddenly moved.
 Standing in front of her was the ominous presence of Oogie Boogie the zombie🧟‍♂️. 


“I am the shadow on the moon at night💀, filling your dreams to the brim with fright😬.” the zombie said as he approached Ellie.

`)


  while ( OogieBoogie.alive(OogieBoogie) == true && Ellie.alive(Ellie) == true) {
      Ellie.printStatus(Ellie)
      OogieBoogie.printStatus(OogieBoogie)
      console.log(``)
      console.log("What do you want to do?")
      console.log("1. Fight the zombie🗡️🧟‍♂️")
      console.log("2. Do nothing🤷")
      console.log("3. Run away🏃! He is immortal!")
  
      console.log("> ")

      let rawInput = prompt()

      if (rawInput == "1"){
          //Hero attacks zombie
          console.log(`Ellie 🧍‍♀️ moves towards Oogie Boogie 🧟‍♂️going for his loose exposed thread🧵 
         
          `);
          Ellie.sidekick()
          Ellie.heroAttack(OogieBoogie)
          console.log(`It was no use he was not going to lose😬
          
          `);

    }

      else if (rawInput == "2"){
          
      }
      else if (rawInput == "3"){
          console.log("Good plan! Oogie Boogie 🧟‍♂️is no one to play around with")
          break;  //break out of loop
          
      }
      else{
          console.log(`Invalid input ${rawInput}`)
      }//end of if statement

      if (OogieBoogie.alive(OogieBoogie) == true ){
          // zombie attacks hero
          console.log(`Wasting no time! He begins dragging you to the cemetary🪦🪦.
          
          `);
          OogieBoogie.attack(Ellie)
      }// end of if statement

  }// end of while loop


  console.log(`
  Would you like to visit Fantasy Costco🧙🏢 before your next adventure? 
Please answer yes or  no.==>
`);

  answer = prompt()
   if(answer.toLocaleLowerCase() == `yes` ){
       
       FantasyCostco.buyitem(Ellie, FantasyCostco)
     
   }
   else{
       console.log(`Ok we will continue with our adventure🎒
       
       `);
   }
  
console.log(`
After her last adventure🎒, Ellie was glad when she began to smell the sweet smells of freshly cooked beignets 🥐
and heard the dance worthy jazz music 🎶🎺🎶filling the street before her.
 Not to mention she was starving. She entered a cafe, sat down and ordered a meal🍽️. 
 

 While enjoying her food, she was approached by an odd gentleman💀🪄 who was best described as tall and had an irregularly large shadow 👺attached to him. 


Once at her table the gentleman introduced himself as Dr. Facilier💀🪄 and began his pitch enticing Ellie's sense of adventure with spells⚗️🪄 that could make her invincible.  Although intriguing Ellie is not one to be fooled👎 or taken advantage of. She turned him down and asked him to leave her to the meal she ordered🍽️. 
`);


console.log(`
Don't you disrespect me, little girl!💀🪄 Don't you derogate or deride! 
You're in my world now, not your world; and I got friends on the other side…” 💀🪄
With those words Dr. Facilier 💀🪄began to laugh and the shadow 👺seemed to be growing larger around him.

`);



  while ( DrFacilier.alive(DrFacilier) == true && Ellie.alive(Ellie) == true) {
      Ellie.printStatus(Ellie)
      DrFacilier.printStatus(DrFacilier)
      Shadowman.printStatus(Shadowman);
      console.log(``)
      console.log("What do you want to do?")
      console.log("1. fight the team🗡️")
      console.log("2. Do nothing🤷‍♀️")
      console.log("3. Run away🏃‍♀️")
      console.log("> ")

      let rawInput = prompt()

      if (rawInput == "1"){
          //Hero attacks Dr. Facilier
          console.log(` 
          She grabbed a flashlight🔦 shining it towards the men
          `);
          Ellie.sidekick()
          Ellie.heroAttack(DrFacilier)
          console.log(`They retreated 
          
          `);

    }

      else if (rawInput == "2"){
          
      }
      else if (rawInput == "3"){
          console.log(`
          Whew your safe, but you left all the balloons 🎈 you could have earned behind
          `)
          break;  //break out of loop
          
      }
      else{
          console.log(`Invalid input ${rawInput}`)
      }//end of if statement

      if (DrFacilier.alive(DrFacilier) == true ){
          // Medic attacks hero
          console.log(`Dr. Facilier 💀🪄began enchanting a nearby item and it began chasing Ellie around
          
          `);
          DrFacilier.attack(Ellie)
          DrFacilier.heal(DrFacilier)
      }
      if (Shadowman.alive(Shadowman) == true && DrFacilier.alive(DrFacilier) == true ){
          // Shadow attacks hero
          Shadowman.attack(Ellie)
      }
      
      
      // end of if statement
    }// end of while loop
    console.log(`
    Ellie now more than ever knew her grandma was right when she said 
    “Don't go messin with no shadowman!💀🪄” She hurried out of the sweet smelling streets🥐 looking for home🏠.
     She felt like she was almost there.
     `);

  console.log(`
  Would you like to visit Fantasy Costco 🧙🏢before your next adventure? 
Please answer yes or  no.==>
`);

   answer = prompt()
   if(answer.toLocaleLowerCase() == `yes` ){
       
       FantasyCostco.buyitem(Ellie, FantasyCostco)
     
   }
   else{
       console.log(`
       Ok we will continue with our adventure🎒
       `);
   }
  
  
console.log(`
Ellie 🧍finally got home and was tucked into her bed 🛏️when she heard a rustling at the window🪟.
 With a loud WHOOSH, the window flew open! 


 A small green and yellow fairy 🧚‍♀️flew around feverishly as if looking for something.
 Ellie immediately got out of bed🛏️ to investigate and began following the fairy 🧚‍♀️darting around the room.



  In the chase, the fairy's 🧚‍♀️purse fell off and what seemed to be glowing dust ✨settled all over her.
   Ellie began floating✨ out of her window🪟. 
   

   She soared over her neighborhood 🌃and headed for the 2nd star ✨on the left.
   
   
   Next thing she knew the glowing dust✨ began to flicker and start to dull. Ellie found herself falling. Falling quickly and fast toward what looked like a ship⛵. She came to a stop as she hit the sails of a large pirate ship🏴‍☠️⛵🗡️.

`);
console.log(`
Crew members immediately gathered Ellie up and took her to see the captain🪝🏴‍☠️.
Captain Hook🪝🏴‍☠️ slowly turned around looking curious at Ellie.


 He slapped his thigh with his silver hook🪝 and said “Look alive, you swabs! We've got him this time.” 
 “We have clearly found🔍 ourselves a lost boy! We will use her to lure Peter👕✨ to us.”


  Ellie wriggled out of the grips of the crew and started to run🏃‍♀️. Captain Hook🪝🏴‍☠️ easily captured her. 


  `);


  while ( CaptainHook.alive(CaptainHook) == true && Ellie.alive(Ellie) == true) {
      Ellie.printStatus(Ellie)
      CaptainHook.printStatus(CaptainHook)
      console.log(``)
      console.log("What do you want to do?")
      console.log("1. fight Captain Hook🗡️")
      console.log("2. Do nothing🤷‍♀️")
      console.log("3. Flee🏃‍♀️")
      console.log("> ")

      let rawInput = prompt()

      if (rawInput == "1"){
          //Hero attacks pirate
          console.log(` 
          Ellie grabbed a pocketwatch⏰ out of her pocket holding it just out of site of Captain Hook🪝🏴‍☠️ and began humming "Never Smile at a Crocodile🐊
          `);
          Ellie.sidekick()
          Ellie.heroAttack(CaptainHook)

    }

      else if (rawInput == "2"){
          
      }
      else if (rawInput == "3"){
          console.log(`
          Whew. You escaped when Captain Hook🪝🏴‍☠️ was distracted by a ticking sound⏰, but you missed out on all the balloons🎈 you could have collected.
          `)
          break;  //break out of loop
          
      }
      else{
          console.log(`Invalid input ${rawInput}`)
      }//end of if statement

      if (CaptainHook.alive(CaptainHook) == true ){
          // pirate attacks hero
          console.log(`Hook 🪝🏴‍☠️lunges towards her pinning her with his sword🗡️.
          
          `);
          CaptainHook.attack(Ellie)
          CaptainHook.walkThePlank(Ellie)
      }// end of if statement
console.log(`
Ellie once again made it out.
 While wet💧 and cold 🥶and much less enthusiastic about adventure🎒, forward was her only option. 
 `);
  }// end of while loop
  console.log(`
  Would you like to visit Fantasy Costco 🧙‍♂️🏢before your next adventure? 
Please answer yes or  no.==>
`);

console.log(`
Would you like to visit Fantasy Costco🧙‍♂️🏢 before your next adventure? 
Please answer yes or  no.==>
`);

   answer = prompt()
   if(answer.toLocaleLowerCase() == `yes` ){
       
       FantasyCostco.buyitem(Ellie, FantasyCostco)
     
   }
   else{
       console.log(`
       Ok we will continue with our adventure🎒
       `);
   }
  
console.log(`
She was exhausted and cold 🥶and could really use a warm place🔥 to consider her next move.
 Ellie got excited when she could faintly see a small cottage🏡🌳 in the woods 
 It looked old but kept with smoke trickling from the chimney🧱.
  Hopefully someone would be home and welcoming of a worn traveler. 
  
  
  Ellie knocked on the door 🚪and an older lady short 🧙in stature with bright purple hair🟪 answered.
   She was welcomed in and ushered to a nearby chair 🪑next to the fireplace🧱🔥. 
   
   
   The lady introduced herself as the “Magnificent Marvelous Mad Mad Mad Madam Mim.” 🧙with a curtsey 
   `);


console.log(`
This introduction told Ellie all she needed to know and quickly ran🏃‍♀️ towards the door🚪. 

Madam Mim 🧙blocked her way and said “You want to leave, let's play a game🕹️.” 
You guess a number between 1-3. 
The number you pick will influence the obstacle that will stand in your way.


Don't play and I end you right here💀.”

`);

  while ( MadMadamMim.alive(MadMadamMim) == true && Ellie.alive(Ellie) == true) {
     Ellie.printStatus(Ellie)
      MadMadamMim.printStatus(MadMadamMim)
      console.log(``)
      console.log("What do you want to do?")
      console.log("1. Play her game🕹️")
      console.log("2. Do nothing and take your chances🤷‍♀️")
      console.log("3. Flee🏃‍♀️")
      console.log("> ")

      let rawInput = prompt()

      if (rawInput == "1"){
          
          
          MadMadamMim.playTheGame(Ellie, MadMadamMim)
          Ellie.attack(MadMadamMim)

    }

      else if (rawInput == "2"){
          
      }
      else if (rawInput == "3"){
          console.log(`
          You have slipped out of the nearby window🪟 when she get too excited about someone to play a game🕹️ with, but you missed out on the balloons🎈 to end the game with.
          `)
          break;  //break out of loop
          
      }
      else{
          console.log(`Invalid input ${rawInput}`)
      }//end of if statement

      if (MadMadamMim.alive(MadMadamMim) == true ){
        console.log(`
        Madam Mim began snickering as she transforms into a large fire breathing dragon🐲.
        `);
          
          MadMadamMim.attack(Ellie)
      }// end of if statement

  }// end of while loop
  

  console.log(`
  Ellie woke with a start and covered in sweat💧🛏️💧.
  
  
  “Man the dreams💭 I have been having lately! 
  Maybe I should lay off spicy foods🌶️ before bed.” she thought as she laid back down 🛏️and fell back asleep.
  `);
} //end of main

main() // runs the game by calling the main driving function





