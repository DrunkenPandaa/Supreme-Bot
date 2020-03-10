const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQ5MzQyMTgyMDgzMjY0NTIy.XmOlnQ.aPFmT4a1blPJfijZulUHxXsjYUg';

bot.login(process.env.token);

const PREFIX = '+';

bot.on('ready', async () =>{
    console.log('Logged in!');
    bot.user.setActivity('Supreme Leading', { type: 'WATCHING'}).catch(console.error);

})

bot.on('message', message=>{

        let args = message.content.substring(PREFIX.length).split(" ");

        switch(args[0]){
            case 'ping':
                message.channel.sendMessage('pong!');
                break;

            case 'Supreme':
                message.channel.sendMessage('SUPREME FOREVER');
                break;

            case 'info':
                if(args[1] === 'Tobi'){
                    message.channel.sendMessage('Tobi is Supreme!');
                }else{
                    message.channel.sendMessage('yo wtf, invalid args!!')
                }
            break;
            case 'clear':
            if(!args[1]) return message.reply('yo wtf!! define second arg')
            message.channel.bulkDelete(args[1]);
                    message.channel.sendMessage('Deleted a few messages for you!')
            message.channel.bulkDelete(args[0]);
            break;

            case 'myinfo':

                const myinfo = new Discord.RichEmbed()
                .setTitle('User Information')
                .addField('Username + #', message.member.user.tag, true)
                .addField('Mention', message.member, true)
                .addField('Bot?', message.member.user.bot, true)
                .addField('Created At', message.member.user.createdAt,true)
                .addField('Joined At', message.member.joinedAt, true)
                .addField('Current Server', message.guild.name, true)
                .addField('Discord Univeral ID', message.member.user.id, true)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Chatters District :mad:')
                .setColor(0xF1C40F)
                message.channel.sendEmbed(myinfo);
            break;

            case 'roleplay':

                const roleplay = new Discord.RichEmbed()
                .setTitle('Alternate Videogame Roleplay')
                .setColor(0xF1C40F)
                .setAuthor('Supreme')
                .setDescription('[Click here to join the roleplay!](https://discord.gg/dGc2KVy)')
                .setThumbnail('https://images-ext-2.discordapp.net/external/nqIQSbJGTxkf3cAR7FRLI4gBUry5XbEgPo1KWJoSYIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/224104604546236417/db80160021b878780a7c70acbadfd1bd.png?width=678&height=678')
                .addField('Field 1', 'test1', true)
                .addField('Field 2', true)
                .addBlankField()
                .setFooter('ROLEPLAY')
                message.channel.sendEmbed(roleplay);

            break;

            case 'tribe01':

                const tribe01= new Discord.RichEmbed()
                .setTitle('Short stats of: Tribe 0001')
                .setColor(0xF1C40F)
                .setAuthor('Tribe of: Supreme')
                .setDescription('Stats are NOT up to date, short a short overview. May not be accurat.')
                .setThumbnail('https://images-ext-2.discordapp.net/external/nqIQSbJGTxkf3cAR7FRLI4gBUry5XbEgPo1KWJoSYIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/224104604546236417/db80160021b878780a7c70acbadfd1bd.png?width=678&height=678')
                .addField('Wood:', '65')
                .addField('Stone:' '72')
                .addField('Oil:' '84 L')
                .addField('Iron:' '11')
                .addBlankField()
                .setFooter('ALTERNATE WORLD ROLEPLAY')
                message.channel.sendEmbed(tribe01);

            break;

            
            
        }
});
