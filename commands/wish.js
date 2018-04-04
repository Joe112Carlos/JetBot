const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {

    let reason = args.join(" ").slice();
    if(!reason) return message.channel.send("Write a wish/suggestion!");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Wish/Suggestion")
    .setColor("#ffff02")
    .addField("Wish:", reason)
    .addField("Wished/Suggested by:", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt);


    let reportschannel = message.guild.channels.find(`name`, "botlog");
    if(!reportschannel) return message.channel.send("Couldn`t find botlog channel!");

      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);

} else {
  if(message.channel !== botcmds) return;
  let reason = args.join(" ").slice();
  if(!reason) return message.channel.send("Write a wish/suggestion!");

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Wish/Suggestion")
  .setColor("#ffff02")
  .addField("Wish:", reason)
  .addField("Wished/Suggested by:", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt);


  let reportschannel = message.guild.channels.find(`name`, "botlog");
  if(!reportschannel) return message.channel.send("Couldn`t find botlog channel!");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}
}

module.exports.help = {
  name: "wish"
}
