module.exports = {
	name: 'alerts',
	async execute(message, args, Discord, client) {
    const channel = "866808354823602227"
    const nexRole = message.guild.roles.cache.find(role => role.name === "Nex alerts");
    const nexEmoji = "⏭️";

    const embed = new Discord.MessageEmbed()
        .setColor("#66F037")
        .setTitle("Set your alerts here:")
        .setDescription(`Choose which alerts you want notifications for\n\n`
          + `${testEmoji} for test\n`
        );

     let MessageEmbed = await message.channel.send({embed});
     MessageEmbed.react(testEmoji);
		 MessageEmbed.react(testEmoji);
		 MessageEmbed.react(testEmoji);
		 MessageEmbed.react(testEmoji);

     client.on("messageReactionAdd", async (reaction, user) => {
       if(reaction.message.partial) await reaction.message.fetch();
       if(reaction.partial) await reaction.fetch();
       if(user.bot) return;
       if(!reaction.message.guild) return;

       if(reaction.message.channel.id === channel){
         if(reaction.emoji.name === nexEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(nexRole);
         } else {
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
         } else {
           return;
         }
       }

     });
  },
};
