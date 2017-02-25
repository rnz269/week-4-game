// one object before modification

var gameState = {
	hero: "",
	enemy: "",
	lastHeroAttack: "",
	lastEnemyAttack: "",
	victoryCommentary: "",
	lossCommentary: "",
	commentary: "",
	numberOfUserAttacks: 0,
	character: {
		goku: {
			name: "Goku",
			health: 50,
			counterAttackPower: 4,
			isAlive: true
		},
		gohan: {
			name: "Gohan",
			health: 150,
			attackPower: 5,
			// attackPower:5 *(1 + this.numberOfUserAttacks),
			counterAttackPower: 10,
			isAlive: true
		},
		vegeta: {
			name: "Vegeta",
			health: 50,
			attackPower: 5,
			counterAttackPower:4,
			isAlive: true
		},
		frieza: {
			name: "Frieza",
			health: 50,
			attackPower: 5,
			counterAttackPower: 4,
			isAlive: true
		},
		cell: {
			name: "Cell",
			health: 50,
			attackPower: 5,
			counterAttackPower: 4,
			isAlive: true
		}
	}
};

// var goku = gameState.character.goku;
// goku.attackPower = 6 + gameState.numberOfUserAttacks;


// numberOfUserAttacks is updating, but goku.attackPower is not. 

// var goku = {
// 	health:100,
// 	attackPower:4 *(1 + gameState.numberOfUserAttacks),
// 	counterAttackPower: 20
// };

// var gohan = {
// 	health:50,
// 	attackPower:4 *(1 + gameState.numberOfUserAttacks),
// 	counterAttackPower: 10
// };


// Hero and enemy selection:
$(".goku").click(function(){
	if (gameState.hero === "") {
		console.log("hero selected: goku");
		gameState.hero = gameState.character.goku;
	}

	else if (gameState.hero !== gameState.character.goku && gameState.hero !== ""){
		console.log("enemy selected: goku");
		gameState.enemy = gameState.character.goku;
	}
});

$(".gohan").click(function(){
	if (gameState.hero === "") {
		console.log("hero selected: gohan");
		gameState.hero = gameState.character.gohan;
	}

	else if (gameState.hero !== gameState.character.gohan && gameState.hero !== ""){
		console.log("enemy selected: gohan");
		gameState.enemy = gameState.character.gohan;
	}
});

$(".vegeta").click(function(){
	if (gameState.hero === "") {
		console.log("hero selected: vegeta");
		gameState.hero = gameState.character.vegeta;
	}

	else if (gameState.hero !== gameState.character.vegeta && gameState.hero !== ""){
		console.log("enemy selected: vegeta");
		gameState.enemy = gameState.character.vegeta;
	}
});

$(".frieza").click(function(){
	if (gameState.hero === "") {
		console.log("hero selected: frieza");
		gameState.hero = gameState.character.frieza;
	}

	else if (gameState.hero !== gameState.character.frieza && gameState.hero !== ""){
		console.log("enemy selected: frieza");
		gameState.enemy = gameState.character.frieza;
	}
});

$(".cell").click(function(){
	if (gameState.hero === "") {
		console.log("hero selected: cell");
		gameState.hero = gameState.character.cell;
	}

	else if (gameState.hero !== gameState.character.cell && gameState.hero !== ""){
		console.log("enemy selected: cell");
		gameState.enemy = gameState.character.cell;
	}
});


$(".btn").click(function(){
	if (gameState.hero, gameState.enemy === "") {
		alert("You have not yet chosen both a hero and an enemy");
	}
	// Else indicates if both characters have been chosen
	else {
			if (gameState.hero.isAlive && gameState.enemy.isAlive) {
			gameState.enemy.health = gameState.enemy.health - gameState.hero.attackPower;
			console.log (gameState.enemy.health);
			gameState.lastHeroAttack = "You attacked " + gameState.enemy.name + " for " + gameState.hero.attackPower + " damage.";
			gameState.numberOfUserAttacks++;
			}

			// If enemy's health drops below 1
			if (gameState.enemy.health < 1) {
				gameState.enemy.isAlive = false;
			// Then, make the enemy disappear
			if (gameState.enemy.name === "Goku") {
				$(".gokuVisible").html("");
			}

			if (gameState.enemy.name === "Gohan") {
				$(".gohanVisible").html("");
			}

			if (gameState.enemy.name === "Vegeta") {
				$(".vegetaVisible").html("");
			}

			if (gameState.enemy.name === "Frieza") {
				$(".friezaVisible").html("");
			}

			if (gameState.enemy.name === "Cell") {
				$(".cellVisible").html("");
			}
				gameState.victoryCommentary = "You have defeated " + gameState.enemy.name + ", you can choose to fight another enemy.";
			
			}
			// Else indicates if enemy is alive ... he'll fight back
			else if (gameState.hero.isAlive && gameState.enemy.isAlive) {
					gameState.hero.health = gameState.hero.health - gameState.enemy.counterAttackPower;
					console.log (gameState.hero.health);
					gameState.lastEnemyAttack = " " + gameState.enemy.name + " attacked you back for " + gameState.enemy.counterAttackPower + " damage.";
				}
					if (gameState.hero.health < 1) {
						gameState.hero.isAlive = false;
						gameState.lossCommentary = "You have been defeated. Game over!";
						$("attack").prop("disabled",true);
						var restartButton = $("<button>");
						restartButton.addClass("btn btn-danger");
						restartButton.text("Restart");
						$(".restart").html(restartButton);
					}
				

			}
		// gameState.enemy.health = gameState.enemey.health - gameState.hero.attackPower;
		renderScoreboard();
	})




function renderScoreboard() {

	var healthGoku = $(".gokuHealth").html(gameState.character.goku.health);
	var healthGohan = $(".gohanHealth").html(gameState.character.gohan.health);
	var healthVegeta = $(".vegetaHealth").html(gameState.character.vegeta.health);
	var healthFrieza = $(".friezaHealth").html(gameState.character.frieza.health);
	var healthCell = $(".cellHealth").html(gameState.character.cell.health);
	var commentary = $(".commentaryIntermediate").html(gameState.lastHeroAttack + gameState.lastEnemyAttack);
	var commentaryEnd = $(".commentary").html(gameState.lossCommentary + gameState.victoryCommentary);
}

$(".restart").click(function(){
	gameState.hero = "";
	gameState.enemy = "";
	gameState.victoryCommentary = "";
	gameState.lossCommentary = "";
	gameState.numberOfUserAttacks = 0;
	gameState.character.goku.isAlive = true;
	gameState.character.gohan.isAlive = true;
	gameState.character.vegeta.isAlive = true;
	gameState.character.frieza.isAlive = true;
	gameState.character.cell.isAlive = true;
	gameState.character.goku.health = 50;
	gameState.character.gohan.health = 50;
	gameState.character.vegeta.health = 50;
	gameState.character.frieza.health = 50;
	gameState.character.cell.health = 50;
	gameState.victoryCommentary = "";
	gameState.lossCommentary = "";
	gameState.lastHeroAttack = "";
	gameState.lastEnemyAttack = "";
	renderScoreboard();
	$(".restart").html("");
	// unappend restart div
});
