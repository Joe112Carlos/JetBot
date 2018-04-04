
const Discord = require("discord.js");
const ms = require('ms');
const colors = require("../colors.json")
module.exports.run = async (bot, message, args) => {
  let botcmds = message.guild.channels.find(`name`, "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
if(emojiList == "") {
  let errorEmbed = new Discord.RichEmbed()
  .setTitle(":x: Error")
  .setColor("#FF0000")
  .setDescription("No Costum emojis!")
  botcmds.send(errorEmbed)
  return;
}
  //message.channel.send(`Custom Emojis in this server:\n${emojiList} `);
let emojiembed = new Discord.RichEmbed()
.setTitle("Emojilist")
.setColor(colors.orange)
.setDescription(`Available:\n${emojiList}`)
message.channel.send(emojiembed)
  }
  else {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    if(message.channel !== botcmds) return;
    if(emojiList == "") {
      let errorEmbed = new Discord.RichEmbed()
      .setTitle(":x: Error")
      .setColor("#FF0000")
      .setDescription("No Costum emojist!")
      botcmds.send(errorEmbed)
      return;
    }
    let emojiembed = new Discord.RichEmbed()
    .setTitle("Emojilist")
    .setColor(colors.orange)
    .setDescription(`Available:\n${emojiList}`)
    botcmds.send(emojiembed)

  }
}
  ///end of module
module.exports.help = {
  name: "emojilist"
}
