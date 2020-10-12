`use strict`

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('準備完了！');
});

client.on('message', message => {
  // messageは詳細情報が戻ってくる
  // console.log(message)
  // includesでテキストに指定した文字列
  // todo:botが入力した場合を除くを追加
  if (message.content.includes(`こんにちは`)) {
    message.channel.send('こんにちは！！');
  } else if (message.content.startsWith(`${prefix}beep`)) {
    message.channel.send('Boop.');
  }
});

client.on('message', message => {
  if (message.content.startsWith()) {

  }
})

client.login(token);
