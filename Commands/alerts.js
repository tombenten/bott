module.exports = {
	name: 'alerts',
	async execute(message, args, Discord, client) {
    const channel = "866814356489240587"
    const nexRole = message.guild.roles.cache.find(role => role.name === "Nex alerts");
    const nexEmoji = "⏭️";
		const demonRole = message.guild.roles.cache.find(role => role.name === "Demon alerts");
    const demonEmoji = "👹";
		const joeyRole = message.guild.roles.cache.find(role => role.name === "Joey alerts");
    const joeyEmoji = "⛓️";
		const creRole = message.guild.roles.cache.find(role => role.name === "Cre alerts");
    const creEmoji = "👑";

    const embed = new Discord.MessageEmbed()
        .setColor("#66F037")
        .setTitle("Set your alerts here:")
        .setDescription(`Choose which alerts you want notifications for!\n\n`
          + `${nexEmoji} for **Nex** alerts\n`
					+ `${joeyEmoji} for **Joey** alerts\n`
					+ `${demonEmoji} for **Demon** alerts\n`
					+ `${creEmoji} for **Cre** alerts\n`
        );

     let MessageEmbed = await message.channel.send({embed});
     MessageEmbed.react(nexEmoji);
		 MessageEmbed.react(joeyEmoji);
		 MessageEmbed.react(demonEmoji);
		 MessageEmbed.react(creEmoji);


     client.on("messageReactionAdd", async (reaction, user) => {
       if(reaction.message.partial) await reaction.message.fetch();
       if(reaction.partial) await reaction.fetch();
       if(user.bot) return;
       if(!reaction.message.guild) return;

       if(reaction.message.channel.id === channel){
         if(reaction.emoji.name === nexEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(nexRole);
         }
				 if(reaction.emoji.name === joeyEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(joeyRole);
         }
				 if(reaction.emoji.name === demonEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(demonRole);
         }
				 if(reaction.emoji.name === creEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(creRole);
         }

				 else {
           return;
         }
       }

     });

     client.on("messageReactionRemove", async (reaction, user) => {
       if(reaction.message.partial) await reaction.message.fetch();
       if(reaction.partial) await reaction.fetch();
       if(user.bot) return;
       if(!reaction.message.guild) return;

       if(reaction.message.channel.id === channel){
         if(reaction.emoji.name === nexEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(nexRole);
         }
				 if(reaction.emoji.name === joeyEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(joeyRole);
         }
				 if(reaction.emoji.name === demonEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(demonRole);
         }
				 if(reaction.emoji.name === creEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(creRole);
         }

				  else {
           return;
         }
       }

     });
  },
};
