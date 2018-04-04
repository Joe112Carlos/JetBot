const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle("Doggo :dog:")
    .setImage(body.url);
    message.channel.send(dogEmbed);
  }
  else {
  if(message.channel !== botcmds) return;
let {body} = await superagent
.get(`https://random.dog/woof.json`);

let dogEmbed = new Discord.RichEmbed()
.setColor("#FF0000")
.setTitle("Doggo :dog:")
.setImage(body.url);
message.channel.send(dogEmbed);
}
}
  ///end of module
module.exports.help = {
  name: "dog"
}
