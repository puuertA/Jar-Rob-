const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/SsxVZIX3NxZwMC2uhK/giphy.gif',
  'https://media.giphy.com/media/cxY2eMwHffafu/giphy.gif',
  'https://media.giphy.com/media/psnguNpp8hIjQNMB5K/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para amassar no soco!');
}
/*
message.channel.send(`${message.author.username} **acaba de descer o cacete em** ${user.username}! :punch::punch: :regional_indicator_p: :regional_indicator_o: :regional_indicator_r: :regional_indicator_r: :regional_indicator_a: :regional_indicator_d: :regional_indicator_a:`, {files: [rand]});
*/

var porrada = [
`${message.author} acaba de descer a porrada em ${user}`,
`${message.author} sento o cacete em ${user}`,
`${message.author} esmigalho ${user}`,
];


var descrição = porrada[Math.floor(Math.random() * porrada.length)];
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('agressão mano')
        .setColor('#FA1D00')
        .setDescription(descrição)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('tome surra')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}