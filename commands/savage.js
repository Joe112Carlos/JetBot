const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

    let savageEmbed = new Discord.RichEmbed()
    .setTitle("Savage")
    .setColor("#596058")
    .setImage("https://media.giphy.com/media/xT9IgMw9fhuEGUaJqg/giphy.gif")
    .setFooter("Getting Auto Deleted in 10 sec, pls wait.")
    message.channel.send(savageEmbed).then(msg => {msg.delete(10000)});

} else { if(message.channel !== botcmds) return;

let savageEmbed = new Discord.RichEmbed()
.setTitle("Savage")
.setColor("#596058")
.setImage("https://media.giphy.com/media/xT9IgMw9fhuEGUaJqg/giphy.gif")
.setFooter("Getting Auto Deleted in 10 sec, pls wait.")
message.channel.send(savageEmbed).then(msg => {msg.delete(10000)});
}
  }
  ///end of module
module.exports.help = {
  name: "savage"
}
