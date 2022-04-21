const Discord = require("discord.js");
 
exports.run = (client, message, args) => {

var descuteis = [
  `***j!avatar***
  - envia o avatar do usuário mencionado como uma imagem\n
  ***j!falar***
  - faz o bot falar por você\n
  ***j!limpar***
  - limpa o chat até 99 mensagens\n
  ***j!site***
  - envia o link do site do bot no canal atual\n
  `,
];

var descfunny = [
  `***j!abraçar***
  - abraça o usuário mencionado\n
  ***j!agredir***
  - amassa no soco o usuário mencionado\n
  ***j!beijar***
  - beija o usuário mencionado\n
  ***j!coinflip***
  - joga cara ou coroa\n
  ***j!queridometro***
  - verifica a queridagem do usuário mencionado`,
];

var descmusic = [
  `***j!tocar***
  - começa a reproduzir música no canal de voz atual\n
  ***j!pular***
  - pula para a próxima música da queue\n
  ***j!parar***
  - para de reproduzir e desconecta o bot do canal de voz\n
  ***j!listar***
  - mostra a lista de músicas a ser reproduzida\n
  `,
];

var descrição = descuteis;
var descrição2 = descfunny;
var descrição3 = descmusic;

    const embed = new Discord.MessageEmbed()
        .setTitle('🔌 **Comandos Úteis!** 🔌\n\n')
        .setColor('#7DEB5E')
        .setDescription(descrição)
        .setAuthor(message.author.tag);

    const embed2 = new Discord.MessageEmbed()
        .setTitle('🤣👌 **Comandos para diversão!** 👌🤣\n\n')
        .setColor('#FDCA47')
        .setDescription(descrição2)
        .setAuthor(message.author.tag);

    const embed3 = new Discord.MessageEmbed()
        .setTitle('🎶 **Comandos de Música** 🎶\n\n')
        .setColor('#745BC2')
        .setDescription(descrição3)
        .setAuthor(message.author.tag);

message.channel.send(embed);
message.channel.send(embed2);
message.channel.send(embed3);
}
