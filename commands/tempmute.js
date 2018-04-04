const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let bossRole = message.guild.roles.find("name", "Owner");
  let modRole = message.guild.roles.find("name", "Admin");
  if((message.member.roles.has(modRole.id)) || (message.member.roles.has(bossRole.id))) {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.delete().catch(O_o=>{}) && message.reply(":x: **Couldn`t find user!**").then(msg => {msg.delete(2000)});
  message.delete().catch(O_o=>{});
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.delete().catch(O_o=>{}) && message.reply(":x: **You Can`t mute this person!**").then(msg => {msg.delete(2000)});
  let muterole = message.guild.roles.find(`name`, "muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTONS: false
        });
      });
    }catch (e){
      console.log(e.stack);
    }
  }
  //end of create roles
  let mutetime = args[1];

  if(!mutetime) return message.delete().catch(O_o=>{}) && message.reply(":x: **You didn`t specify a time!**").then(msg => {msg.delete(2000)});

  let reason = args.slice(2).join(" ");
  if(!reason) return message.delete().catch(O_o=>{}) && message.reply(":x: **Write a reason!**").then(msg => {msg.delete(2000)});

  await(tomute.addRole(muterole.id));
  message.channel.send(`:white_check_mark: **<@${tomute.id}> has been muted for ${ms(ms(mutetime))}**`).then(msg => {msg.delete(2000)});
  //message.channel.send(`:white_check_mark: Muted!`).then(msg => {msg.delete(1500)});
  setTimeout(function(){
  tomute.removeRole(muterole.id);
  let botlog = message.guild.channels.find("name", "botlog");
  botlog.send(`:white_check_mark: **unmuted <@${tomute.id}>!**`);
  }, ms(mutetime));
///



  let mutereasonEmbed = new Discord.RichEmbed()
  .setDescription("Mute")
  .setColor("#ffff02")
  .addField("Muted User", `${tomute} with ID: ${tomute.id}`)
  .addField("Muted By", `${message.author} with ID: ${message.author.id}`)
  //.addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Muted Time:", `${mutetime}`)
  .addField("Reason", `${reason}`);

  let reportschannel = message.guild.channels.find(`name`, "public-incident-log");
  if(!reportschannel) return message.channel.send("Couldn`t find botlog channel!");

    message.delete().catch(O_o=>{});
    reportschannel.send(mutereasonEmbed);

} else {
  let botcmds = message.guild.channels.find("name", "bot-commands");
  if(message.channel !== botcmds) return;

  let errorEmbed = new Discord.RichEmbed()
  .setTitle(":x: Error")
  .setColor("#FF0000")
  .setDescription("No permission!")
  botcmds.send(errorEmbed)


}

  //end of module
}

module.exports.help = {
  name: "mute"
}
