const Discord = require("discord.js");
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {

  //const status = {
    //online: "Online",
  //  idle: "Idle",
  //  dnd: "Do Not Disturb",
  //  offline: "Offline/Invisible"
  //};
  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

  let bots = message.guild.members.bots
  let onlineEmbed = new Discord.RichEmbed()
  .setTitle("Members Online/Oflline:")
  .setColor(colors.orange)
  .addField("Online:", message.guild.members.filter(m => m.presence.status !== "offline").size).addField("Offline:", message.guild.members.filter(m => m.presence.status === "offline").size)


  message.channel.send(onlineEmbed)
} else { if(message.channel !== botcmds) return;
let bots = message.guild.members.bots
let onlineEmbed = new Discord.RichEmbed()
.setTitle("Members Online/Oflline:")
.setColor(colors.orange)
.addField("Online:", message.guild.members.filter(m => m.presence.status !== "offline").size).addField("Offline:", message.guild.members.filter(m => m.presence.status === "offline").size)
}
}
  ///end of module
module.exports.help = {
  name: "onlinemembers"
}
