const Discord = require("discord.js");
const superagent = require("superagent");
const colors = require("../colors.json")
module.exports.run = async (bot, message, args) => {
let botcmds = message.guild.channels.find("name", "bot-commands");
let bossRole = message.guild.roles.find("name", "Owner");
if((!message.member.roles.has(bossRole.id)) || (message.channel !== botcmds)) return;
let {body} = await superagent
.get(`http://random.cat/meow`);

let catEmbed = new Discord.RichEmbed()
.setColor("#FF0000")
.setTitle("Cat :cat:")
.setImage(body.file);
message.channel.send(catEmbed);












}
  ///end of module
module.exports.help = {
  name: "cat"
}
