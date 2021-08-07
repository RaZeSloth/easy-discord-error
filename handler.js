const Discord = require("discord.js")

function errorHandler(err,/** @type {Discord.Message}*/ message, id, client) {
  if (!err) return new SyntaxError("THERE NEEDS TO BE AND ERROR TO SEND")
  if (!message) return new SyntaxError("THERE NEEDS TO BE THE MESSAGE OBJECT")
  if (!id) return new SyntaxError("THERE NEEDS TO BE A BOT AUTHOR ID OBJECT")
  if (!client) return new SyntaxError("THERE NEEDS TO BE AND CLIENT CONSTRUCTOR PASSED IN")



  if (!message.channel.guild) {
    client.users.cache.get(id).send(`There was an error in someone's DMs(${message.author.username})`).catch(a => console.log("got an error sending the message"))
    client.users.cache.get(id).send(`And the error was: \n\`\`\`${err}\`\`\``).catch(a => console.log("got an error sending the message"))
    return;
  }


  client.users.cache.get(id).send(`There was an error in channel \`${message.channel.name}\` in guild \`${message.guild.name}\``).catch(a => console.log("got an error sending the message"))
  client.users.cache.get(id).send(`And the error was: \n\`\`\`${err}\`\`\``).catch(a => console.log("got an error sending the message"))
  return;

}

function embedErrorHandler(err,/** @type {Discord.Message}*/message, id, client) {
  if (!err) return new SyntaxError("THERE NEEDS TO BE AND ERROR TO SEND")
  if (!message) return new SyntaxError("THERE NEEDS TO BE THE MESSAGE OBJECT")
  if (!id) return new SyntaxError("THERE NEEDS TO BE A BOT AUTHOR ID OBJECT")
  if (!client) return new SyntaxError("THERE NEEDS TO BE AND CLIENT CONSTRUCTOR PASSED IN")

  const DMERREMBED = new Discord.MessageEmbed()
    .setTitle(`There was an error in someone's DM`)
    .setDescription(`In ${message.author.username} DMs`)
    .addField(`Error`, `\`\`\`${err}\`\`\``)
    .setColor(`RED`)
  if (!message.channel.guild) {
    client.users.cache.get(id).send(DMERREMBED).catch(a => console.log("got an error sending the message"))
    return;
  }

  const ERREMBED = new Discord.MessageEmbed()
    .setTitle(`ERROR IN GUILD: \`${message.guild.name}\``)
    .setDescription(`IN CHANNEL: \`${message.channel.name}\` `)
    .addField("THE ERROR", `\`\`\`${err}\`\`\``)
    .setColor(`RED`)


  client.users.cache.get(id).send(ERREMBED).catch(a => console.log("got an error sending the message"))

  return;



}
module.exports = { errorHandler, embedErrorHandler }