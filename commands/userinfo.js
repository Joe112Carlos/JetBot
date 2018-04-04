const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member) return message.channel.send("Mention someone first!");

  if (member.user.bot === true) {
      bot = "Yes";
    } else {
      bot = "No";
  }

  const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
  };


let infoEmbed = new Discord.RichEmbed()
.setTitle("User information:")
.setThumbnail(`${member.user.displayAvatarURL}`)
.setAuthor(`${member.user.tag} with id: ${member.id}`, `${member.user.avatarURL}`)
.setColor("#ffff02")
.addField("Username:", `${member.user.tag}`)
.addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname"}`, true)
.addField("Bot?", `${bot}`, true)
.addField("Guild", `${bot}`, true)
.addField("Status", `${status[member.user.presence.status]}`, true)
.addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "not playing anything."}`, true)
.addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
.addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
.addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

message.channel.send(infoEmbed);
} else {
  if(message.channel !== botcmds) return;

  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member) return message.channel.send("Mention someone first!");

  if (member.user.bot === true) {
      bot = "Yes";
    } else {
      bot = "No";
  }

  const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
  };


let infoEmbed = new Discord.RichEmbed()
.setTitle("User information:")
.setThumbnail(`${member.user.displayAvatarURL}`)
.setAuthor(`${member.user.tag} with id: ${member.id}`, `${member.user.avatarURL}`)
.setColor("#ffff02")
.addField("Username:", `${member.user.tag}`)
.addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname"}`, true)
.addField("Bot?", `${bot}`, true)
.addField("Guild", `${bot}`, true)
.addField("Status", `${status[member.user.presence.status]}`, true)
.addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "not playing anything."}`, true)
.addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
.addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
.addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

message.channel.send(infoEmbed);
}
}
  ///end of module
module.exports.help = {
  name: "userinfo"
}
