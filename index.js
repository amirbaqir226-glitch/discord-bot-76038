const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const express = require('express');

// إعداد خادم ويب خفيف لإبقاء البوت أونلاين 24 ساعة
const app = express();
app.get('/', (req, res) => {
    res.send('البوت _76038 🔨 يعمل بنجاح تام!');
});
app.listen(3000, () => {
    console.log('🌐 خادم الويب شغال على المنفذ 3000');
});

// إعدادات بوت الديسكورد والصلاحيات
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// عند اشتغال البوت بنجاح
client.once('ready', () => {
    console.log(`🔥 تم تسجيل الدخول بنجاح كـ ${client.user.tag}`);
    client.user.setActivity('_76038 🔨 | حماية السيرفر 🛡️', { type: 0 });
});

// نظام الأوامر والتفاعل
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content === '!هلا' || message.content === '!سلام') {
        const embed = new EmbedBuilder()
            .setTitle('🌟 أهلاً بك في سيرفر _76038 🔨!')
            .setDescription(`مرحباً بك ${message.author}، أنا البوت الرسمي (ID: _76038).`)
            .setColor(0x00FFCC)
            .setTimestamp()
            .setFooter({ text: 'البوت الرسمي: _76038 🔨' });

        await message.channel.send({ embeds: `({ embeds: [embed] })` });
    }

    if (message.content.includes('السلام عليكم')) {
        await message.reply('وعليكم السلام ورحمة الله وبركاته! منور السيرفر يا غالي ❤️');
    }
});

// تسجيل الدخول باستخدام التوكن الخاص بك مباشرة
client.login('MTU0NjE1MTcxNjg5Njg5OTEwMw.Gim_7g.rYhvgIv1jcbGl1Kec4vwcRiD0CLoTmSbsbhilA');
