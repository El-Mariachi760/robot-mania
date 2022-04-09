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
    window.alert("Welcome Mech Fighters!");
    var promptFight = window.prompt("Do you have the GEARS to be the ultimate Mecha!?")

    // if player chooses to fight
    if (promptFight === "YES" || promptFight === "yes"){

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " is now a pile of junk!")
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    
    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " is now recycled!")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }
    
    // if player choses to skip
    } else if (promptFight === "no" || promptFight === "NO") {
        //confirm player wants to skip
        window.confirm("Are you sure you want to be a human about it?");

        //if yes (true), leave fight
        var confirmSkip = true;
        if (confirmSkip) {
            window.alert(playerName + " is a typical human. BYE LOSER");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a 'Yes' or 'No'")
    }
};
//Execute Function

for(var i =0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

// var enemyNames = ["Mr.Roboto", "Zerg", "Cyber Karen"];
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }