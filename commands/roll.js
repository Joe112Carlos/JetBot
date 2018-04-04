const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

message.channel.send(Math.floor(Math.random() * 100));
} else {
if(message.channel !== botcmds) return;

  message.channel.send(Math.floor(Math.random() * 100));
}


}
///end of module
module.exports.help = {
name: "roll"
}
