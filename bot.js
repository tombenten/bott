
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = "!"
const fs = require("fs");
//Bot.js File:
const keepAlive = require('./server.js');
const mySecret = process.env['TOKEN']


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./Commands/").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, Discord, client);
	} catch (error) {
		console.error(error);
		message.reply('upsy wupsy you did a fucky wucky');
	}
});






keepAlive();
client.login(mySecret);
