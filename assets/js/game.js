//player variables
var playerName = window.prompt("Name Your Mech");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy variables
var enemyNames = ["Mr. Roboto","Mecha Balrog","Cyber Karen"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //Alert all players that they are starting a new round
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Do you have the GEARS to be the ultimate Mecha!? Enter 'YES' or 'NO'");
    
    
        // if player choses to skip
    if (promptFight === "no" || promptFight === "NO") {
        //confirm player wants to skip
       var confirmSkip = window.confirm("Are you sure you want to be a human about it?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " is a typical human. BYE LOSER");
            // subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable
    var damage = randomNumber(playerAttack - 3, playerAttack);
    
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " is now a pile of junk!")
        // award player for winning round
        playerMoney = playerMoney + 20
        // leave while() loop since enemy is dead
        break;
    }   else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    
    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " is now in the recycling bin!")
        break;
    }   else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }
};

//Execute Function


var startGame = function() {

    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    enemyHealth = randomNumber(40,60);

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
                window.alert("Welcome to Robot-Mainia! Round " + ( i + 1 ) );
                //pick new enemy
                var pickedEnemyName = enemyNames[i];

                // reset enemy health before round
                enemyHealth = Math.floor(Math.random() * 21) + 40;

                fight(pickedEnemyName);

                if (playerHealth > 0 && i < enemyNames.length -1) {

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
            if (playerHealth > 0) {
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
                window.alert("Of couse you give up, you might as well be a human")
            }
        }
        
        endGame();

    }
    var shop = function() {
        //ask player that they would like

        var shopOptionPrompt = window.prompt(
            "How about OIL for the rusty parts, UPGRADE to your attack, or LEAVE if you are don't need anything? Please enter 'OIL', 'UPGRADE' or 'LEAVE'"
        );

        switch (shopOptionPrompt) {
            case "OIL":
            case 'oil':
                if (playerMoney >= 7) {
                    window.alert("Oil increased your health by 20 for 7 dollars.")
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                    break;
                }
            case "UPGRADE":
            case "upgrade":
                if (playerMoney >= 7) {
                    window.alert("Your attack increased by 6 for 7 dollars.")
                    playerAttack = playerAttack + 6
                    playerMoney = playerMoney - 7
                    break;
                }

            case "LEAVE":
            case "leave":
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
startGame();

// for(var i =0; i < enemyNames.length; i++) {
//     var pickedEnemyName = enemyNames[i];
//     enemyHealth = 50;
//     fight(enemyNames[i]);
// }