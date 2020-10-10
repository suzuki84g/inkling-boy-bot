const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('準備完了！');
});

client.on('message', message => {
  if (message.content === '!ping') {
    // メッセージが送信されたチャンネルへ「Pong.」を送り返す。
    message.channel.send('Pong.');
  }
});

client.login(config.token);
