const Discord = require("discord.js");
const ms = require('ms');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  let bossRole = message.guild.roles.find("name", "Owner");
  let modRole = message.guild.roles.find("name", "Owner");
  if((message.member.roles.has(modRole.id)) || (message.member.roles.has(bossRole.id))) {

    if (!client.lockit) client.lockit = [];
     let time = args.join(' ');
     let validUnlocks = ['release', 'unlock'];
     if (!time) return message.reply(':x: **You must set a duration for the lockdown in either hours, minutes or seconds**');
     if (validUnlocks.includes(time)) {
       message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: null
       }).then(() => {
         message.channel.send('Lockdown lifted.');
         clearTimeout(client.lockit[message.channel.id]);
         delete client.lockit[message.channel.id];
       }).catch(error => {
         console.log(error);
       });
     } else {
       message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
       }).then(() => {
         message.reply(`:white_check_mark: **Channel locked down for ${ms(ms(time), { long:true })}**`).then(() => {

           client.lockit[message.channel.id] = setTimeout(() => {
             message.channel.overwritePermissions(message.guild.id, {
               SEND_MESSAGES: null
             }).then(message.reply(':white_check_mark: **Lockdown lifted**.')).catch(console.error);
             delete client.lockit[message.channel.id];
           }, ms(time));

         }).catch(error => {
           console.log(error);
         });
       })
}

message.delete().catch(O_o=>{});
//else
} else { if(message.channel !== botcmds) return;

  let errorEmbed = new Discord.RichEmbed()
  .setTitle(":x: Error")
  .setColor("#FF0000")
  .setDescription("No permission!")
  botcmds.send(errorEmbed)



}
}
///end of module
module.exports.help = {
name: "lockdown"
}
