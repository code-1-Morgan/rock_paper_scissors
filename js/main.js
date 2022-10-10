//create variables for score
let botScore=0,
	playerScore=0;

//call functions on click click
document.getElementById('rock').onclick=playerThrowsRock;
document.getElementById('scissors').onclick=playerThrowsScissors;
document.getElementById('paper').onclick=playerThrowsPaper;

let botsWeapon={};
function playerThrowsRock(){
	getRandomWeapon();
	checkWhoWon(botsWeapon,'rock');
}
function playerThrowsScissors(){
	getRandomWeapon();
	checkWhoWon(botsWeapon,'scissors');
}
function playerThrowsPaper(){
	getRandomWeapon();
	checkWhoWon(botsWeapon,'paper');
}
function getRandomWeapon(){
	let randomNumber=Math.random();
	if(randomNumber<.33){
		botsWeapon='scissors';
	}
	else if(randomNumber<.6666){
		botsWeapon='paper';
	}else{
		botsWeapon='rock'
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon === playersWeapon){
		displayCompleteMessage('There was tie');
		document.getElementById('roundResults').innerHTML=`Bot chose ${botsWeapon}`;
		console.log(botsWeapon);
	}
	else if(
		(botsWeapon === 'scissors' && playersWeapon ==='paper') ||
		(botsWeapon === 'paper' && playersWeapon ==='rock') ||
		(botsWeapon === 'rock' && playersWeapon ==='scissors')
		){
		increaseBotScore(botsWeapon);
	}
	else{
		increasePlayerScore(botsWeapon);
	}
}
function increaseBotScore(botsWeapon){
	document.getElementById('roundResults').innerHTML=`Bot chose ${botsWeapon}`;
	console.log(botsWeapon);
	botScore+=1;
	document.getElementById('computerScore').innerHTML=botScore;
	displayCompleteMessage('Sorry, you\'re a loser');
}
function increasePlayerScore(botsWeapon){
	document.getElementById('roundResults').innerHTML=`Bot chose ${botsWeapon}`;
	console.log(botsWeapon);
	playerScore+=1;
	document.getElementById('humanScore').innerHTML=playerScore;
	displayCompleteMessage('You won this round');
}
function displayCompleteMessage(msg){
	document.getElementById('status').innerHTML=msg;
}