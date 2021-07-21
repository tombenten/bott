module.exports = {
	name: 'rules',
	execute(message, args) {
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
        .setColor("#66F037")
        .setTitle("SmartTrades Rules:")
        .setDescription(`**1.** No spamming
**2.** No hate speech, NSFW content or abusive comments towards other members
**3.** No DM advertising or  server promoting
**4.** Keep chatrooms on topic
**5.** Trade safely and apply proper risk management
**6.** Nothing sent by traders or other members should be seen as trading advice
**7.** Copying alerts to another server will result in an instant ban
**8.** This server is not subject to your idea of 'fair', punishments will be given out as seen fit by staff to rulebreakers

*All the following rules will be enforced by staff to keep the server as professional as possible, please adhere to the above rules or punishments will be given out*`)

    message.channel.send({
        embed
    });
	},
};
