const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let botcmds = message.guild.channels.find(`name`, "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.delete().catch(O_o=>{}) && message.reply(":x: **Can't find user!**").then(msg => {msg.delete(2000)});
  let bReason = args.join(" ").slice(22);
  if(!bReason) return message.delete().catch(O_o=>{}) && message.reply(":x: **Write a Reason!**").then(msg => {msg.delete(2000)});
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.delete().catch(O_o=>{}) && message.reply(":x: **No permission.**").then(msg => {msg.delete(2000)});
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.delete().catch(O_o=>{}) && message.reply(":x: **That person can't be kicked!**").then(msg => {msg.delete(2000)});

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Ban")
  .setColor("#FF0000")
  .addField("Banned User:", `${bUser} `)
  .addField("Banned By:", `<@${message.author.id}>`)
  //.addField("Banned In", message.channel)
  .addField("Time:", message.createdAt)
  .addField("Reason:", bReason);

  let reportschannel = message.guild.channels.find(`name`, "public-incident-log");
  if(!reportschannel) return message.channel.send(":x: **Can't find botlog channel.**").then(msg => {msg.delete(2000)});
  message.delete().catch(O_o=>{});
  reportschannel.send(banEmbed);
  message.reply(`**:white_check_mark: successfully banned ${bUser}!**`).then(msg => {msg.delete(2000)})
} else {
  if(message.channel !== botcmds) return;
  let errorEmbed = new Discord.RichEmbed()
  .setTitle(":x: Error")
  .setColor("#FF0000")
  .setDescription("No permission!")
  botcmds.send(errorEmbed)
}
}

module.exports.help = {
  name: "ban"
}
