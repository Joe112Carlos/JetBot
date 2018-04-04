const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

let  highestRole = message.guild.roles.find("name", "Owner")
let catEmbed = new Discord.RichEmbed()
.setColor("#FF0000")
.setTitle("Server information")
.setThumbnail(message.guild.iconURL)
.addField("This server belongs to:", message.guild.owner)
.addField("Member size:", message.guild.members.size)
.addField("Highest role:", highestRole)
.addField("Created On:", message.guild.createdAt)
.addField("Roles:", message.guild.roles.filter(r => r.id !== message.guild.id).map(roles => `->${roles.name}`).join(" \n "))
message.channel.send(catEmbed);
} else {
  if(message.channel !== botcmds) return;

let  highestRole = message.guild.roles.find("name", "Owner")
let catEmbed = new Discord.RichEmbed()
.setColor("#FF0000")
.setTitle("Server information")
.setThumbnail(message.guild.iconURL)
.addField("This server belongs to:", message.guild.owner)
.addField("Member size:", message.guild.members.size)
.addField("Highest role:", highestRole)
.addField("Created On:", message.guild.createdAt)
.addField("Roles:", message.guild.roles.filter(r => r.id !== message.guild.id).map(roles => `->${roles.name}`).join(" \n "))
message.channel.send(catEmbed);

}


}
  ///end of module
module.exports.help = {
  name: "serverinfo"
}
