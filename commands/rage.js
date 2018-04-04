const Discord = require("discord.js");
const ms = require('ms');


module.exports.run = async (bot, message, args) => {
  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {


    message.delete().catch(O_o=>{});
      let catEmbed = new Discord.RichEmbed()
      .setColor("#FF0000")
      .setTitle("...")
      .setFooter("Getting Auto Deleted in 10 sec, pls wait.")
      .setImage("https://media.giphy.com/media/l0MYrqggEwtDscVP2/giphy.gif");

      message.channel.send(catEmbed).then(msg => {msg.delete(10000)});

} else { if(message.channel !== botcmds) return;

message.delete().catch(O_o=>{});
  let catEmbed = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setTitle("...")
  .setFooter("Getting Auto Deleted in 10 sec, pls wait.")
  .setImage("https://media.giphy.com/media/l0MYrqggEwtDscVP2/giphy.gif");

  message.channel.send(catEmbed).then(msg => {msg.delete(10000)});
}
  }
  ///end of module
module.exports.help = {
  name: "..."
}
