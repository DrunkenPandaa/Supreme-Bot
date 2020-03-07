const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQ5MzQyMTgyMDgzMjY0NTIy.XmOj3w.joqLstoJ5p8YUjBgvsfUT8a3T78';

bot.login(process.env.token);

const PREFIX = '+';

bot.on('ready', () =>{
    console.log('Online!')

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
            break;

            case 'embed':

                const embed = new Discord.RichEmbed()
                .setTitle('User Information')
                .addField('Username + #', message.member.user.tag, true)
                .addField('Account Age', message.member.user.createdAt,true)
                .addField('Current Server', message.guild.name, true)
                .addField('Discord Univeral ID', message.member.user.id, true)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Chatters District :mad:')
                .setColor(0xF1C40F)
                message.channel.sendEmbed(embed);
            break;

            case 'myinfo':
                message.channel.sendMessage('My Info test')
        }
});
