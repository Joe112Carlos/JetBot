const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

//let rainbowrole = message.guild.roles.find("name", "Rainbow")
//if(!rainbowrole) return message.channel.send("error, beta contact.Contact joe");
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tomute) return message.channel.send(":x:");
try{
  muterole = await message.guild.updateRole({
    name: "Rainbow",
    color: "#123000",
    permissions:[]
  })
}catch (e){
  console.log(e.stack);
}
await(tomute.addRole(muterole.id));




//////////
setTimeout(function(){
tomute.removeRole(rainbowrole.id);
}, ms(2));
/////////// LOOP




////////
} else {

if(!message.channel !== botcmds) return;
let rainbowrole = message.guild.roles.find("name", "Rainbow")
if(!rainbowrole) return message.channel.send("error, beta contact.Contact joe");
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tomute) return message.channel.send(":x:");
try{
  muterole = await message.guild.createRole({
    name: "RainBowROle",
    color: "#123000",
    permissions:[]
  })
}catch (e){
  console.log(e.stack);
}
await(tomute.addRole(rainbowrole.id));



}
}
  ///end of module
module.exports.help = {
  name: "role"
}
