const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let bossRole = message.guild.roles.find("name", "Owner");
  let modRole = message.guild.roles.find("name", "Admin");
  let botcmds = message.guild.channels.find("name", "bot-commands");
  if((message.member.roles.has(modRole.id)) || (message.member.roles.has(bossRole.id)))  {
  if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \nUsage: ' + `>` + 'purge (amount)'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
} else {
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
  name: "purge"
}

//const fetched = await message.channel.fetchMessages({limit: args[10]});
//message.channel.bulkDelete(fetched)
//console.log(fetched.size + ' messages found, deleting...')
