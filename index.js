const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const colors = require("./colors.json")
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn`t find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);

bot.user.setActivity(">help | Made by Joe", {type: "WATCHING"});

 //bot.user.setGame("Assisting Joeyy");
});

bot.on("messageDelete", async message => {
  if(message.author.id == "410857700751048716") return;
  let delmessage = message.content
  let botlogchannel = message.guild.channels.find(`name`, "deletedmessages")

  let delmsgEmbed = new Discord.RichEmbed()
  .setTitle("Deleted message")
  .setColor("#FFFF00")
  .addField("Message:", `${delmessage}`)
  .addField("Author of message:", `<@${message.author.id}> || ${message.author.username} || ID: ${message.author.id}`)
  .addField("Message deleted in:", message.channel)

  botlogchannel.send(delmsgEmbed)
});


bot.on("guildMemberRemove", async member => {
 //let botlogch = member.guild.channels.find(`name`, "botlog")
  let botlogchannel = member.guild.channels.find(`name`, "welcome-leave")
  botlogchannel.send(`**${member.user.username}** left the server.`)
  //botlogch.send(`${member.user.username}`)
});

bot.on("guildMemberAdd", async member => {

  let botlogchannel = member.guild.channels.find(`name`, "welcome-leave")
  botlogchannel.send(`Welcome :tada:`)
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm")  return message.channel.send("Not useable in DM!");

  let mentionResponse = botconfig.mentionResponse
  if(message.isMentioned(bot.user.id)) {

       // Here we get a random message to return as a response (from the arraylist in the config file again)
       response = Math.floor(Math.random() * mentionResponse.length);
       // Here we send the respond to the channel
       message.channel.send("" + mentionResponse[response]);
       // Returning again to make sure this is all we will do
       return;
}

  let prefix = botconfig.prefix;
  if(!message.content.startsWith(`${prefix}`)) return;
  let AmessageArray = message.content.split(" ");
  let cmd = AmessageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


if(cmd === `${prefix}botinfo`){

 let bicon = bot.user.displayAvatarURL;
 let botembed = new Discord.RichEmbed()
 .setDescription("Bot Information")
 .setColor("#ffff02")
 .setThumbnail(bicon)
 .addField("This bot is coded by Joe Launchpad#2019,its a basic Command bot for discord.It contains different Admin Commands which allow admins to Mute,kick,ban,get info and More!", bot.user.username);

  return message.channel.send(botembed);
}

if(cmd === `${prefix}rules`){

 let botembed = new Discord.RichEmbed()
 .setColor("#ffff02")
 .setTitle("Rules for The chat","|")
 .addField("1: Be supportive to the members.","|")
 .addField("2: Where respect is shown, respect is given.","|")
 .addField("3: English is the prefered language and should be the only one spoken. ","|")
 .addField("4: Do not spam!","|")
 .addField("5: Leaking of any personal information, will not be tolerated at all.","___________")

 return message.channel.send(botembed);
}






});

bot.login(botconfig.token);
