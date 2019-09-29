const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("627838539085905943")
setInterval(function() {
channel.send(`iyedgamerdz iyedgamerdz iyedgamerdz iyedgamerdz iyedgamerdz iyedgamerdz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);