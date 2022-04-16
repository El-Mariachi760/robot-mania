
var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Do you have the GEARS to be the ultimate Mecha!? Enter "YES" or "NO"');

    promptFight = promptFight.toLowerCase();
  
    // Enter the conditional recursive function call here!
  
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "no") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you want to be a human about it?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " is a typical human. BYE LOSER");
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        return true;
      }
    }
    if (promptFight === " " || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
      }
  }

var fight = function(enemy) {
    console.log(enemy);
    //Alert all players that they are starting a new round
    while(playerInfo.health > 0 && enemy.health > 0) {
    if (fightOrSkip()) {
        break;
    }
    
    //Subtract the value of 'playerInfo.attack' from the value of 'enemy.health' and use the result to update the value in the 'enemy.health' variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
    // check enemy's health
    if (enemy.health <=0) {
        window.alert(enemy.name + " is now a pile of junk!")
        // award player for winning round
        playerInfo.money = playerInfo.money + 20
        // leave while() loop since enemy is dead
        break;
    }   else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.")
    }

    // remove player's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
    
    // check player's health
    if (playerInfo.health <=0) {
        window.alert(playerInfo.name + " is now in the recycling bin!")
        break;
    }   else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    }
};

//Execute Function


var startGame = function() {

    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
                window.alert("Welcome to Robot-Mainia! Round " + ( i + 1 ) );
                //pick new enemy
                var pickedEnemyObj = enemyInfo[i];

                // reset enemy health before round
                pickedEnemyObj.health = randomNumber(40,60);

                fight(pickedEnemyObj);

                if (playerInfo.health > 0 && i < enemyInfo.length -1) {

                    //ask if player wants more health or dmg
                    var storeConfirm = window.confirm("You survived, want to grease your gears?")

                    if (storeConfirm){
                    
                    shop();
                    }
                }
            } 
        else {
            window.alert("You are a pile of junk! GAME OVER!");
            break;       
            }
        }
  
        var endGame = function() {
            // if player is still alive, player wins!
            if (playerInfo.health > 0) {
                window.alert("I guess you're not human after all, you are the Mech Master!")
            }
            else {
                window.alert("You fight like a human, no wonder you are a pile of junk.")
            }
            var playAgainConfirm = window.confirm("Would you like to play again?");
        
            if (playAgainConfirm) {
                //restart the game
                startGame();
            }
            else {
                window.alert("BYE LOSER!")
            }
        }
        
        endGame();

    }
    var shop = function() {
        //ask player that they would like

        var shopOptionPrompt = window.prompt(
            "How about 1OIL for the rusty parts, 2UPGRADE to your attack, or 3LEAVE if you are don't need anything? Please enter '1', '2' or '3'"
        );

        shopOptionPrompt = parseInt(shopOptionPrompt);
        switch (shopOptionPrompt) {
            case 1:
                playerInfo.refillHealth();
                break;

            case 2:
                playerInfo.upgradeAttack();
                break;

            case 3:
                window.alert("Wow, tough guy right here!")
                break;
            
            default:
                window.alert("You need to choose!");

                //call to shop again
                shop();
                break;
        }
    };

    var randomNumber = function(min,max) {
        var value = Math.floor(Math.random()*(max - min + 1)) +min;

        return value;
    };
    var getPlayerName = function () {
        var name = "";

        while (name === "" || name === null) {
            name = prompt("Name your Mech");
        }


        console.log("Your robot's name is " + name)
        return name;
    };
    var playerInfo = {
        name: getPlayerName(),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
         },
         refillHealth: function() {
             if (this.money >= 7){
            this.health += 20;
            this.money -= 7;
             }
             else{
                 window.alert("Not enough coin!!!")
             }
         },
         upgradeAttack: function() {
            if (this.money >= 7){
            this.attack += 6;
            this.money -= 7;
            }
            else{
                window.alert("Not enough coin!!!")
            }
          }
    };
    // enemy variables
    var enemyInfo = [
        {
            name:"Mr. Roboto",
            attack: randomNumber(10,14)
        },
        {
            name:"Mecha Balrog",
            attack: randomNumber(10,14)
        },
        { 
            name:"Cyber Karen",
            attack: randomNumber(10,14)
        }
    ];
startGame();

