const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>  {

  let bossRole = message.guild.roles.find("name", "Owner");
  let modRole = message.guild.roles.find("name", "Admin");
  let botcmds = message.guild.channels.find("name", "bot-commands");
  if((message.member.roles.has(modRole.id)) || (message.member.roles.has(bossRole.id))) {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!kUser) return message.delete().catch(O_o=>{}) && message.reply(":x: **Can`t find user!**").then(msg => {msg.delete(2000)});;
  let kReason = args.join(`  `).slice(22);
  if (!kReason) return message.delete().catch(O_o=>{}) && message.reply(":x: **Write a reason for the kick!**").then(msg => {msg.delete(2000)});
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: **You can`t do that!**");

  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.delete().catch(O_o=>{}) && message.reply(":x: **You can`t kick that person!**").then(msg => {msg.delete(2000)});



  let kickEmbed = new Discord.RichEmbed()
  .setDescription("-Kick Information-")
  .setColor("#ff0000")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Time:",message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "public-incident-log");
  if(!kickChannel) return message.channel.send("Can`t find botlog channel!");
  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
  message.channel.send(`:white_check_mark: **Successfully kicked ${kUser}**`)
message.delete().catch(O_o=>{});

}
else { if(message.channel !== botcmds) return;
  let errorEmbed = new Discord.RichEmbed()
  .setTitle(":x: Error")
  .setColor("#FF0000")
  .setDescription("No permission!")
  botcmds.send(errorEmbed)

}

}

module.exports.help = {
  name: "kick"
}
