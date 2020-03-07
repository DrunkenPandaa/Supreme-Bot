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
                .setTitle('User:', message.member.user.tag, true)
                .addField('Username + #', message.member.user.tag, true)
                .addField('Mention', message.member, true)
                .addField('Bot?', message.member.user.bot, true)
                .addField('Created At', message.member.user.createdAt,true)
                .addField('Joined At', message.member.joinedAt, true)
                .addField('Joined At2', moment(message.guild.member.get(user.id).joinedAt).format("MMMM Do YYYY, h:mm a"))
                .addField('Current Server', message.guild.name, true)
                .addField('Discord Univeral ID', message.member.user.id, true)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Chatters District :mad:')
                .setColor(0xF1C40F)
                message.channel.sendEmbed(myinfo);
            break;

            case 'test':

                const test = new Discord.RichEmbed()
                .setTitle('Infotext')
                .setDescription('[This is a test description](https://example.com)');
                message.channel.sendEmbed(test);

            break;

            
        }
});
