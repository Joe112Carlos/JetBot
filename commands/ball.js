const Discord = require("discord.js");
const ms = require('ms');
const colors = require("../colors.json")


module.exports.run = async (bot, message, args) => {
let botcmds = message.guild.channels.find(`name`, "bot-commands");
let bossRole = message.guild.roles.find("name", "Owner");
if(message.member.roles.has(bossRole.id)) {
var ball = ['Yes','No doubt about it','Maybe','signs point to yes','I say no','No chance','Dont think so',`Not really`,`YES !!!`];
  //message.channel.send(ball[Math.floor(Math.random () * ball.length)]);

let ballEmbed = new Discord.RichEmbed()
.setTitle("8Ball")
.setColor(colors.orange)
.addField("Question:", args.join(" ").slice(0))
.addField("Answer:", ball[Math.floor(Math.random () * ball.length)])
.setFooter(`asked by ${message.author.username}`)
message.channel.send(ballEmbed)
}
else {
if(message.channel !== botcmds) return;
    var ball = ['Yes','No doubt about it','Maybe','signs point to yes','I say no','No chance','Dont think so',`Not really`,`YES !!!`];
      //message.channel.send(ball[Math.floor(Math.random () * ball.length)]);

let ballEmbed = new Discord.RichEmbed()
.setTitle("8Ball")
.setColor(colors.orange)
.addField("Question:", args.join(" ").slice(0))
.addField("Answer:", ball[Math.floor(Math.random () * ball.length)])
.setFooter(`asked by ${message.author.username}`)
botcmds.send(ballEmbed)

}
  }
  ///end of module
module.exports.help = {
  name: "8ball"
}
