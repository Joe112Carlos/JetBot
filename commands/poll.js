const Discord = require("discord.js");
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {


      let split = args.join (" ").split("|");
      let question = split[0];
      let option1 = split[1];
      let option2 = split[2];

    if(!question) return message.channel.send("Error.\nCorrect Usage:\n>poll [question] | [option 1] | [option2]");
    if(!option1) return message.channel.send("Error.\nCorrect Usage:\n>poll [question] | [option 1] | [option2]");
    if(!option2) return message.channel.send("Error.\nCorrect Usage:\n>poll [question] | [option 1] | [option2]");

    let pollEmbed = new Discord.RichEmbed()
    .setTitle("Poll")
    .setColor("#ffffff")
    .addField("Question:", question)
    .addField("Options:",` **Option A:**${option1} || **Option B**:${option2}` )
    .setFooter(`By ${message.author.username}`)

    message.channel.send(pollEmbed).then(m => {
    m.react("🅰");
    m.react("🅱");

  });

  } else { if(message.channel !== botcmds) return;



  let split = args.join (" ").split("|");
  let question = split[0];
  let option1 = split[1];
  let option2 = split[2];

if(!question) return message.channel.send("Error.\nCorrect Usage:\n>poll [question] | [option 1] | [option2]");
if(!option1) return message.channel.send("Error.\nCorrect Usage:\n>poll [question] | [option 1] | [option2]");
if(!option2) return message.channel.send("Error.\nCorrect Usage:\n>poll [question] | [option 1] | [option2]");

let pollEmbed = new Discord.RichEmbed()
.setTitle("Poll")
.setColor("#ffffff")
.addField("Question:", question)
.addField("Options:",` **Option A:**${option1} || **Option B**:${option2}` )
.setFooter(`By ${message.author.username}`)

message.channel.send(pollEmbed).then(m => {
m.react("🅰");
m.react("🅱");

});
}
//message.channel.send(pollEmbed).then(m => m.react("🅰")).then(m => m.react("🅱"));


//💩
  }
  ///end of module
module.exports.help = {
  name: "poll"
}
