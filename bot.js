const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I'm ready');
});

client.login(process.env.BOT_TOKEN);
