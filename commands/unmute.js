
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bossRole = message.guild.roles.find("name", "Owner");
  let modRole = message.guild.roles.find("name", "Admin");
  if((message.member.roles.has(modRole.id)) || (message.member.roles.has(bossRole.id))) {
  const member = message.mentions.members.first();




//test
        let muterole = message.guild.roles.find("name", "muted");
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!unmutedmember) return message.delete().catch(O_o=>{}) && message.reply(":x: **Please mention a valid member of this server!**").then(msg => {msg.delete(2000)}); // if there is no kickedmmeber var
        if (member.roles.exists('name', 'muted')) {
        unmutedmember.removeRole(muterole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.channel.send(`:white_check_mark: **${unmutedmember.user} has been succesfully unmuted!**`).then(msg => {msg.delete(2000)}); // sends a message saying he was kicked
//test
let mutereasonEmbed = new Discord.RichEmbed()
.setDescription("Unmute")
.setColor("#ffff02")
.addField("Unmuted User", `${unmutedmember} with ID: ${unmutedmember.id}`)
.addField("Unmuted By", `${message.author} with ID: ${message.author.id}`)
.addField("Time", message.createdAt)

let reportschannel = message.guild.channels.find(`name`, "botlog");
if(!reportschannel) return message.channel.send("Couldn`t find botlog channel!");

  message.delete().catch(O_o=>{});
  reportschannel.send(mutereasonEmbed);

} else {
  return message.delete().catch(O_o=>{}) && message.reply(":x: **This User isn`t muted!**").then(msg => {msg.delete(2000)});
}
//else
}else {
  let botcmds = message.guild.channels.find("name", "bot-commands");
  if(message.channel !== botcmds) return;
  let errorEmbed = new Discord.RichEmbed()
  .setTitle(":x: Error")
  .setColor("#FF0000")
  .setDescription("No permission!")
  botcmds.send(errorEmbed)
}
}
//end of module

module.exports.help = {
  name: "unmute"
}
