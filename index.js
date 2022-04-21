const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online



const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

require('events').EventEmitter.defaultMaxListeners = 0

client.on('guildMemberAdd', member => {
  member.send("Leia as regras, seja sussa e diverta-se!\nLembre-se de utilizar j!help no servidor para ver os comandos disponíveis do bot!");
});

client.on('message', message => {
  if (message.content.startsWith('foda-se') || message.content.startsWith('fodase') || message.content.startsWith('fodas') || message.content.startsWith('FODASE') || message.content.startsWith('foudaci')) {
    message.reply('**🖕🖕🖕🖕🖕🖕🖕🖕🖕 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFODASE VOCE VA TOMANO CU 🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕**');
  }
});

client.on('message', message => {
  if (message.content.startsWith('autotune')) {
    message.reply('**https://www.youtube.com/watch?v=jt9LlHXGckg**');
  }
});

client.on('message', message => {
  if (message.content.startsWith('porta')) {
    message.reply('**mó feião esse cara mané** 🤪');
  }
});

client.on('message', message => {
  if (message.content.startsWith('perez')) {
    message.reply('**o nivel fico muito bom porque eu não to entendendo mais nada, muie registrada da nagai** 😕🤔');
  }
});

client.on('message', message => {
  if (message.content.startsWith('amanda')) {
    message.reply('**a maior responsável por call do soninho br 2021 atualizado ok google pesquisar**💤😴');
  }
});

client.on('message', message => {
  if (message.content.startsWith('nagai')) {
    message.reply('**hackeou a vida e sabe tocar, cantar ,desenhar, dançar um break e é muie registrada da perez**🎨🎵');
  }
});

client.on('message', message => {
  if (message.content.startsWith('kaue')) {
    message.reply('**um dos mais capudo do frifas** 💀');
  }
});

client.on('message', message => {
  if (message.content.startsWith('davi')) {
    message.reply('**O CARA QUEBRA COM COCÔ VEI** 💩');
  }
});

client.on('message', message => {
  if (message.content.startsWith('bia')) {
    message.reply('**dizem que a bia sacou a glo pra vitoria e ela desapareceu** 🔫');
  }
});

client.on('message', message => {
  if (message.content.startsWith('mel')) {
    message.reply('**bzzzzzz, muito gostosa (de acordo com ela mesma e várias pessoas que concordam com ela) essa dai bleh 🐝🍯**');
  }
});

client.on('message', message => {
  if (message.content.startsWith('cat')) {
    message.reply('**comedora oficial de mel 🍯 e mestra de rpg de pootaria 🧙‍♂️**');
  }
});

client.on('message', message => {
  if (message.content.startsWith('eron')) {
    message.reply('**outro dos mais capudos do frifas** 💀');
  }
});


client.on('message', message => {
  if (message.content.startsWith('claro')) {
    message.reply('**dizem que é uma uva concord ou o hipocampo do paraguay** 🍇☄️');
  }
});

client.on('message', message => {
  if (message.content.startsWith('brandao')) {
    message.reply('🕳🕳 EI VOCÊ SABIA? **SABOTAGEM AO CONTRARIO É MEGATOBAS?** 🕳🕳');
  }
});

client.on('message', message => {
  if (message.content.startsWith('freitas')) {
    message.reply('**essa cara é pintudo,um dos mais pirocudos de massachusets** 🍆');
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("ready", () => {
  let activities = [
    `Utilize ${config.prefix}help para obter ajuda`,
    `${client.guilds.cache.size} servidores!`,
    `${client.channels.cache.size} canais!`,
    `${client.users.cache.size} usuários!`
  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "WATCHING"
  }), 1000 * 60);
  client.user
    .setStatus("dnd")
    .catch(console.error);
  console.log("Estou Online!")
});

const { executionAsyncResource } = require('async_hooks');
const ytdl = require('ytdl-core');

const { YTSearcher } = require('ytsearcher');

const searcher = new YTSearcher({
  key: "AIzaSyAQoHjWUbntrTorspvGYvoH2ozsWbH0L84",
  revealed: true
});

const queue = new Map();

client.on("ready", () => {
  console.log("I am online!")
})

client.on("message", async (message) => {
  const prefix = `${config.prefix}`;

  const serverQueue = queue.get(message.guild.id);

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();
  
  switch (command) {
    case 'tocar':
      execute(message, serverQueue);
      break;
    case 'parar':
      stop(message, serverQueue);
      break;
    case 'pular':
      skip(message, serverQueue);
      break;
    case 'listar':
      Queue(serverQueue);
      break;
  }

  async function execute(message, serverQueue) {
    let vc = message.member.voice.channel;
    if (!vc) {
      return message.channel.send("⚠️ Por favor entre em um **canal de voz** primeiro! ⚠️");
    } else {
      let result = await searcher.search(args.join(" "), { type: "video" })
      const songInfo = await ytdl.getInfo(result.first.url)

      let song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url
      };

      if (!serverQueue) {
        const queueConstructor = {
          txtChannel: message.channel,
          vChannel: vc,
          connection: null,
          songs: [],
          volume: 10,
          playing: true
        };
        queue.set(message.guild.id, queueConstructor);

        queueConstructor.songs.push(song);

        try {
          let connection = await vc.join();
          queueConstructor.connection = connection;
          play(message.guild, queueConstructor.songs[0]);
        } catch (err) {
          console.error(err);
          queue.delete(message.guild.id);
          return message.channel.send(`❌Incapaz de entrar no canal de voz erro: ${err}❌`)
        }
      } else {
        serverQueue.songs.push(song);
        return message.channel.send(`✅ A música ***${song.title}*** foi adicionado ao queue! ✅`);
      }
    }
  }
  function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
      serverQueue.vChannel.leave();
      queue.delete(guild.id);
      return;
    }
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on('finish', () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
    serverQueue.txtChannel.send(`🎵 Tocando agora ***${serverQueue.songs[0].title}*** 🎵`)
  }
  function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send("⚠️ Você precisa entrar em um canal de voz primeiro! ⚠️")
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
  function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send("⚠️ Você precisa entrar em um canal de voz primeiro!");
    if (!serverQueue)
      return message.channel.send("🔇 Não há músicas para pular! 🔇");
    serverQueue.connection.dispatcher.end();
  }
  function Queue(serverQueue) {
    if (!serverQueue.connection)
      return message.channel.send("🔇 Não há músicas tocando! 🔇");
    if (!message.member.voice.channel)
      return message.channel.send("⚠️ Você não está em um canal de voz! ⚠️")

    let nowPlaying = serverQueue.songs[0];
    let qMsg = `⏯ **Tocando agora:** _${nowPlaying.title}_\n\n`

    
    for (var i = 1; i < serverQueue.songs.length; i++) {
      qMsg += `**[${i}]** ${serverQueue.songs[i].title}\n`
    }

    const embed = new Discord.MessageEmbed()
      .setTitle(`🎶 **Jaré's Music Queue!** 🎶`)
      .setColor("#7DEB5E")
      .setDescription(`\n${qMsg} Requerido por: ${message.author}`)

    message.channel.send(embed);
  }

})


client.login("ODA4MTEyNDYyNDczNzIzOTQ0.YCBzYQ.i-MAnMHWoNpx_EKBsju82pjji9A")


