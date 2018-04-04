const Discord = require("discord.js");
const ms = require('ms');
const colors = require("../colors.json")
const random = [ true, false ];


module.exports.run = async (bot, message, args) => {
let botcmds = message.guild.channels.find(`name`, "bot-commands");
let bossRole = message.guild.roles.find("name", "Owner");
if(message.member.roles.has(bossRole.id)) {

  let misssilesuccess = new Discord.RichEmbed()
  .setTitle(":white_check_mark: Target down!")
  .setImage("https://media.giphy.com/media/12KiGLydHEdak8/giphy.gif");

  let misslefailt = new Discord.RichEmbed()
  .setTitle(":x: Missed the target!")
  .setImage("https://media.giphy.com/media/3o6ZtqacuimILjUNji/giphy.gif");


let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//if(target.id == message.author.id) return;
if(!target) return message.delete().catch(O_o=>{}) && message.reply(":x: **Couldn`t find target!**").then(msg => {msg.delete(2000)});
return(random[Math.floor(Math.random() * random.length)]) && message.channel.send(misslefailt).then(msg => {msg.delete(2500)}) || message.channel.send(misssilesuccess).then(msg => {msg.delete(1900)});
message.delete().catch(O_o=>{});


//if(random[Math.floor(Math.random() * random.length)] == "false")





//let random = Math.floor(Math.random () * 2





////////////////////////////7////////
}
////////////////////////////////////
else {
if(message.channel !== botcmds) return;

  let misssilesuccess = new Discord.RichEmbed()
  .setTitle(":white_check_mark: Target down!")
  .setImage("https://media.giphy.com/media/12KiGLydHEdak8/giphy.gif");

  let misslefailt = new Discord.RichEmbed()
  .setTitle(":x: Missed the target!")
  .setImage("https://media.giphy.com/media/3o6ZtqacuimILjUNji/giphy.gif");


let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//if(target.id == message.author.id) return;
if(target == message.author) return;
if(!target) return message.delete().catch(O_o=>{}) && message.reply(":x: **Couldn`t find target!**").then(msg => {msg.delete(2000)});
return(random[Math.floor(Math.random() * random.length)]) && message.channel.send(misslefailt).then(msg => {msg.delete(2500)}) || message.channel.send(misssilesuccess).then(msg => {msg.delete(1900)});
message.delete().catch(O_o=>{});


//if(random[Math.floor(Math.random() * random.length)] == "false")





//let random = Math.floor(Math.random () * 2





////////////////////////////7////////


}
  }
  ///end of module
module.exports.help = {
  name: "target"
}
