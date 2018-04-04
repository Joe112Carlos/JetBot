const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botcmds = message.guild.channels.find("name", "bot-commands");
  let bossRole = message.guild.roles.find("name", "Owner");
  if(message.member.roles.has(bossRole.id)) {
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Bot help")
    .setDescription("Thanks for using my bot!:robot:")
    .setColor("#990000")
    .addField("----------------**FUN COMMANDS**----------------", "-----------------------------------------------------")
    .addField("8ball", "Gives you a random answer!")
    .addField("roll", "Gives you a random Number!")
    .addField("dog", "Sends a random Dog pic! :dog:")
    .addField("ree", "REEEEEEEEEEE,what else?  ")
    .addField("illuminati", "You will know...")
    .addField("savage", "SUPAA HOT FIRE")
    .addField("ello", "Ello my brudda")
    .addField("----------------**SERVER COMMANDS**----------------", "---------------------------------------------------------")
    .addField("report", "Sends a report into a admin channel and a admin will edit it!, the Report Command will auto-delete, so do not wonder and do not send twice!")
    .addField("userinfo", "Gives Information about the mentioned user!")
    .addField("wish", ">wish [WISH]/[SUGGESTION] to let us know what you want to improve/change!The wish Command Auto-deletes so do not wonder and do not write twice!")
    .addField("poll", "Creates a poll!Correct usage:\n>poll [question] | [Option1] | [Option2]\nIts important to use **|**  !")
    .addField("botinfo", "Shows Information about the bot!")
    .addField("emojilist", "Sends a list of Costum emojis from the server.")
    .addField("serverinfo", "Shows Information about the server.")
    .addField("help", "Shows this  list!")
    .addField("----------------**STAFF COMMANDS**----------------", "-------------------------------------------------------")
    .addField("kick", "Kicks mentioned user!")
    .addField("lockdown", "Locks the channel and only admins can write in it!")
    .addField("purge", "Deletes the amount of messages given!")
    .addField("mute", "Mutes mentioned user from all channels for the given amount of time!")
    .addField("unmute", "Unmutes mentioned user from all channels!")
    .addField("embed", "Embeds the text you want!\nCorrect Usage:>embed NoColor [TEXT]\nOR\n>embed [COLORcode] [TEXT]\nget Color codes here:\n https://html-color-codes.info/")
    message.author.send(helpEmbed)
    let helpinfoEmbed = new Discord.RichEmbed()
    .setDescription(":satellite: I`ve messaged you the help-list!Check your DMs! :satellite: ")
    message.channel.send(helpinfoEmbed)

  } else { if(message.channel !== botcmds) return;


let helpEmbed = new Discord.RichEmbed()
.setTitle("Bot help")
.setDescription("Thanks for using my bot!:robot:")
.setColor("#990000")
.addField("----------------**FUN COMMANDS**----------------", "-----------------------------------------------------")
.addField("8ball", "Gives you a random answer!")
.addField("roll", "Gives you a random Number!")
.addField("dog", "Sends a random Dog pic! :dog:")
.addField("ree", "REEEEEEEEEEE,what else?  ")
.addField("illuminati", "You will know...")
.addField("savage", "SUPAA HOT FIRE")
.addField("ello", "Ello my brudda")
.addField("----------------**SERVER COMMANDS**----------------", "---------------------------------------------------------")
.addField("report", "Sends a report into a admin channel and a admin will edit it!, the Report Command will auto-delete, so do not wonder and do not send twice!")
.addField("userinfo", "Gives Information about the mentioned user!")
.addField("wish", ">wish [WISH]/[SUGGESTION] to let us know what you want to improve/change!The wish Command Auto-deletes so do not wonder and do not write twice!")
.addField("poll", "Creates a poll!Correct usage:\n>poll [question] | [Option1] | [Option2]\nIts important to use **|**  !")
.addField("botinfo", "Shows Information about the bot!")
.addField("emojilist", "Sends a list of Costum emojis from the server.")
.addField("serverinfo", "Shows Information about the server.")
.addField("help", "Shows this  list!")
.addField("----------------**STAFF COMMANDS**----------------", "-------------------------------------------------------")
.addField("kick", "Kicks mentioned user!")
.addField("lockdown", "Locks the channel and only admins can write in it!")
.addField("purge", "Deletes the amount of messages given!")
.addField("mute", "Mutes mentioned user from all channels for the given amount of time!")
.addField("unmute", "Unmutes mentioned user from all channels!")
.addField("embed", "Embeds the text you want!\nCorrect Usage:>embed NoColor [TEXT]\nOR\n>embed [COLORcode] [TEXT]\nget Color codes here:\n https://html-color-codes.info/")
message.author.send(helpEmbed)
let helpinfoEmbed = new Discord.RichEmbed()
.setDescription(":satellite: I`ve messaged you the help-list!Check your DMs! :satellite: ")
message.channel.send(helpinfoEmbed)

}
//.addField("------**Most of the Commands require permissions!**------------")

}
  ///end of module
module.exports.help = {
  name: "help"
}
