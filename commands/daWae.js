const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
let botcmds = message.guild.channels.find("name", "bot-commands");

let bossRole = message.guild.roles.find("name", "Owner");
if(message.member.roles.has(bossRole.id)) {
  let savageEmbed = new Discord.RichEmbed()
.setTitle("Ello my brudda")
.setColor("#107000")
.setImage("https://media.giphy.com/media/3oFzmqnykCz2rMO3ok/giphy.gif")
message.channel.send(savageEmbed)
}
else {
if(message.channel !== botcmds) return;
let savageEmbed = new Discord.RichEmbed()
.setTitle("Ello my brudda")
.setColor("#107000")
.setImage("https://media.giphy.com/media/3oFzmqnykCz2rMO3ok/giphy.gif")
botcmds.send(savageEmbed)
}
  }
  ///end of module
module.exports.help = {
  name: "ello"
}
