module.exports.run = async (bot, message, args) => {



  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

let say = args.join(` `).slice()
if (!say)  return message.channel.send("Write a text you want me to say!");

message.channel.send(say)
  message.delete().catch(O_o=>{});
} else {
  return;
}

}
  ///end of module
module.exports.help = {
  name: "say"
}
