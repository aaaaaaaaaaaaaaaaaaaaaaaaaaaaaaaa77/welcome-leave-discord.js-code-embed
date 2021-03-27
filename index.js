const Discord = require('discord.js');
const client = new Discord.Client();
var dateFormat = require('dateformat');

client.on('ready', () => {
  console.log(`logged  in as ${client.user.username}✅`)
    console.log('□□□□□ 0%')
    console.log('■□□□□ 20%')
    console.log('■■□□□ 40')
    console.log('■■■□□ 60%')
    console.log('■■■■□ 80%')
    console.log('■■■■■ 100%')
    console.log('◇────────────────◇────────────────◇')
    console.log('𓅂 THANKS FOR USING WELCOME + LEAVE BOT CODE')
    console.log('◇────────────────◇────────────────◇')
    console.log('IF YOU GET ANY ERROR DM Asterio🪐 #1978')
    console.log('SUBSCRIBE TO BLITZIO'); }); // Create an event listener for new guild members 
client.on('guildMemberAdd', member => { // Send the message to a designated channel on a server: 
  const channel = member.guild.channels.cache.find(ch => ch.id === '810455326418534421'); // Do nothing if the channel wasn't found on this server 
  if (!channel) return; // Send the message, mentioning the member 
  let embed = new Discord.MessageEmbed()
    .setTitle(`Welcome <@${member.user.id}> `)
  
    .setAuthor(`${member.user.tag} Has Joined.`)

    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))

    .addField('Date Joined', dateFormat(member.user.createdAt, "mm:dd:yyyy h:MM"), true)

    .addField('Total Members', member.guild.memberCount, true)
  channel.send(embed);

});
client.on('guildMemberRemove', member => { // Send the message to a designated channel on a server: 
  const channel = member.guild.channels.cache.find(ch => ch.id === '810455326418534421'); // Do nothing if the channel wasn't found on this server 
  if (!channel) return; // Send the message, mentioning the member 
  let embed = new Discord.MessageEmbed()
    .setTitle("Bye...")

    .setAuthor(`${member.user.tag} Has Left.`)

    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))

    .addField('Account Created At', dateFormat(member.user.createdAt, "mm:dd:yyyy h:MM"), true)

    .addField('Total Members', member.guild.memberCount, true)
  channel.send(embed);

});

client.login(process.env.TOKEN);
