
const Discord = require("discord.js");
const ms = require('ms');
const client = new Discord.Client();
const REEGETOUT = client.emojis.get("305818615712579584");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {

  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {


      let {body} = await superagent
      .get(`https://cdn.discordapp.com/emojis/398781338720796672.gif?v=1`);

      let catEmbed = new Discord.RichEmbed()
      .setColor("#FF0000")
      .setTitle("REEEEE")
      .setFooter("Getting Auto Deleted in 10 sec, pls wait.")
      .setImage("https://cdn.discordapp.com/emojis/398781338720796672.gif?v=1");

      message.channel.send(catEmbed).then(msg => {msg.delete(10000)});

  } else { if(message.channel !== botcmds) return;


  let {body} = await superagent
  .get(`https://cdn.discordapp.com/emojis/398781338720796672.gif?v=1`);

  let catEmbed = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setTitle("REEEEE")
  .setFooter("Getting Auto Deleted in 10 sec, pls wait.")
  .setImage("https://cdn.discordapp.com/emojis/398781338720796672.gif?v=1");

  message.channel.send(catEmbed).then(msg => {msg.delete(10000)});
}
  }
  ///end of module
module.exports.help = {
  name: "ree"
}
