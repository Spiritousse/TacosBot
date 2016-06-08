// Tacos bot !

const viandes = new Array('Steack', 'Kebab', 'Escalope', 'Merguez','Brochette');
const sauces = new Array('Ketchup', 'Mayo', 'Moutarde', 'Curry', 'Algerienne', 'Maison', 'Harissa', 'Tartare');
const supp = new Array('Chevre', 'Emmental', 'Sauce Gruyere', 'Oeuf', 'Chekchouka', 'Carre Burger');

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./botkit/lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears('tacos', 'direct_message,direct_mention,mention', function(bot, message) {
	var answer = chooseARandomTacos().toLowerCase();
    bot.reply(message, 'Oh, je vois que tu veux manger un délicieux tacos ! Laisse moi te proposer quelque chose...');
	bot.reply(message, 'Et voilà : un magnifique ' + answer);
});

function chooseARandomTacos(){

	var rand_viandes = Math.floor((Math.random()*5));
	var rand_sauces = Math.floor((Math.random()*8));
	
	return "tacos " + viandes[rand_viandes] + " sauce " + sauces[rand_sauces] + " ! ";

}