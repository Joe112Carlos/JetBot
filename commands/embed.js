const Discord = require("discord.js");
const botconfig = require("C:/Users/Joe/Desktop/discordbotjs/botconfig.json");

module.exports.run = async (bot, message, args) => {
  let botcmds = message.guild.channels.find(`name`, "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

  let prefix = botconfig.prefix
if(message.content.startsWith(`${prefix}`)){
let messageforembed = args.join(` `).slice(7);
if(!messageforembed) return message.channel.send("Usage:\n>embed NoColor [TEXT]\nOR >embed [COLORCODE] [Text]!");
let color = args.slice().join(" ");
if(!color) color = "#ffff02";

let embedEmbed = new Discord.RichEmbed()
.setColor(color)
.setDescription(`${messageforembed}`)
.setFooter(`Posted by ${message.author.username}`)
message.channel.send(embedEmbed);

message.delete().catch(O_o=>{});
  }
}
else {
  if(message.channel !== botcmds) return;
  else {
  let errorEmbed = new Discord.RichEmbed()
  .setTitle(":x: Error")
  .setColor("#FF0000")
  .setDescription("No permission!")
  botcmds.send(errorEmbed)
}
}
}
  ///end of module
module.exports.help = {
  name: "embed"
}
