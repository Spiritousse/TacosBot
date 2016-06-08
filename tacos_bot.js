const viandes = new Array('Steack', 'Kebab', 'Escalope', 'Merguez','Brochette');
const sauces = new Array('Ketchup', 'Mayo', 'Moutarde', 'Curry', 'Algerienne', 'Maison', 'Harissa', 'Tartare');
const supp = new Array('Chevre', 'Emmental', 'Sauce Gruyere', 'Oeuf', 'Chekchouka', 'Carre Burger');

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears('randomtacos','direct_message,direct_mention,mention', function(bot, message) {
	bot.reply(message,'Oh, je vois que tu veux manger un délicieux tacos ! Desire tu un supplement ?');
	controller.hears(['oui','non'],'direct_message,direct_mention,mention', function(bot, message) {
		var test = message.match[0];
	if(test=='oui'){
	return bot.reply(message, 'Et voilà : un magnifique ' + randomtacos(true).toLowerCase());
	}
	else return bot.reply(message, 'Et voilà : un magnifique ' + randomtacos().toLowerCase());
	}
	);
});

function randomtacos(withasupp)
{
	var rand_viandes = Math.floor((Math.random()*5));
	var rand_sauces = Math.floor((Math.random()*8));
	var rand_supp = Math.floor((Math.random()*6));
	if(!withasupp) return "tacos " + viandes[rand_viandes] + " sauce " + sauces[rand_sauces] +" ! ";
	else return "tacos " + viandes[rand_viandes] + " sauce " + sauces[rand_sauces] + " supplement " + supp[rand_supp] +" ! ";
}

