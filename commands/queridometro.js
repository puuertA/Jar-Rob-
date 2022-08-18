const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/4M9eCs3dRfppwlkrGu/giphy.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um **usuário válido** para descobrir sua queridagem');
}
/*
message.channel.send(`${message.author.username} **acaba de descer o cacete em** ${user.username}! :punch::punch: :regional_indicator_p: :regional_indicator_o: :regional_indicator_r: :regional_indicator_r: :regional_indicator_a: :regional_indicator_d: :regional_indicator_a:`, {files: [rand]});
*/

let queridagem = Math.floor(Math.random() * 100);

var queridometro = [
  `${message.author}\n O **queridometro** de ${user} é de **${queridagem}%**`,
];
var queridometroeu = [
  `${message.author}\n O **queridometro** de ${user} é de **100%**`,
];

var descrição = queridometro[Math.floor(Math.random() * queridometro.length)];
var descriçãoeu = queridometroeu[Math.floor(Math.random() * queridometroeu.length)];
let avatar = message.mentions.users.first().displayAvatarURL({format: 'png'});
const portaid = "183355810724839424"
if (user.id === portaid) {
  const embed = new Discord.MessageEmbed()
        .setTitle('💗𝓺𝓾𝓮𝓻𝓲𝓭𝓸𝓶𝓮𝓽𝓻𝓸💗')
        .setColor('#FA1D00')
        .setDescription(descriçãoeu)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('queridou?')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
} else {
  const embed = new Discord.MessageEmbed()
        .setTitle('💗𝓺𝓾𝓮𝓻𝓲𝓭𝓸𝓶𝓮𝓽𝓻𝓸💗')
        .setColor('#FA1D00')
        .setDescription(descrição)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('queridou?')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);}
  
}